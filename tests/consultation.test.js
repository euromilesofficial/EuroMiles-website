'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const handler = require('../api/consultation');
const valid = { full_name: 'Asha Sharma', mobile: '9876543210', email: 'asha@example.com', qualification: 'Class 12', degree_level: "Bachelor's", intake_year: '2027', message: 'Interested in scholarships', contact_consent: true, page: '/study-in-italy/study-universities/' };
function makeResponse() { return { headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(code) { this.statusCode = code; return this; }, json(data) { this.body = data; return this; } }; }
async function run(body = valid, method = 'POST', contentType = 'application/json') { const res = makeResponse(); await handler({ method, headers: { 'content-type': contentType }, body }, res); return res; }
function configure() { process.env.BREVO_API_KEY = 'test-key'; process.env.LEAD_FROM_EMAIL = 'leads@example.com'; }
test('invalid or oversized input is rejected', async () => {
  let called = false; global.fetch = async () => { called = true; };
  assert.equal((await run({ ...valid, contact_consent: false })).statusCode, 400);
  assert.equal((await run({ ...valid, mobile: '123' })).statusCode, 400);
  assert.equal((await run({ ...valid, email: 'bad\n@example.com' })).statusCode, 400);
  assert.equal((await run(valid, 'GET')).statusCode, 405);
  assert.equal((await run(valid, 'POST', 'text/plain')).statusCode, 415);
  assert.equal((await run({ ...valid, message: 'a'.repeat(17000) })).statusCode, 413);
  assert.equal(called, false);
});
test('missing configuration fails safely', async () => {
  delete process.env.BREVO_API_KEY; delete process.env.LEAD_FROM_EMAIL;
  assert.equal((await run()).statusCode, 503);
});
test('sends escaped complete lead and separate confirmation', async () => {
  configure(); const sent = [];
  global.fetch = async (url, opts) => { assert.equal(url, 'https://api.brevo.com/v3/smtp/email'); assert.equal(opts.headers['api-key'], 'test-key'); sent.push(JSON.parse(opts.body)); return { ok: true }; };
  const result = await run({ ...valid, full_name: '<script>alert(1)</script>', message: 'First line\nSecond & line', page: '/study-in-italy/?private=secret' });
  assert.equal(result.statusCode, 200); assert.equal(sent.length, 2);
  assert.equal(sent[0].to[0].email, 'EuroMilesofficial@gmail.com'); assert.equal(sent[0].replyTo.email, valid.email);
  assert.match(sent[0].htmlContent, /&lt;script&gt;/); assert.doesNotMatch(sent[0].htmlContent, /<script>/);
  assert.match(sent[0].htmlContent, /First line<br>Second &amp; line/); assert.match(sent[0].htmlContent, /Class 12/); assert.match(sent[0].htmlContent, /2027/);
  assert.doesNotMatch(sent[0].htmlContent, /private=secret/); assert.match(sent[0].textContent, /Contact consent: Agreed/);
  assert.equal(sent[1].to[0].email, valid.email); assert.equal(sent[1].replyTo.email, 'EuroMilesofficial@gmail.com'); assert.doesNotMatch(sent[1].htmlContent, /<script>/);
});
test('lead failure prevents confirmation and never reports success', async () => {
  configure(); let calls = 0; global.fetch = async () => { calls++; return { ok: false }; };
  assert.equal((await run()).statusCode, 502); assert.equal(calls, 1);
  global.fetch = async () => { throw new Error('network'); }; assert.equal((await run()).statusCode, 502);
});
test('confirmation failure does not cause a duplicate lead submission', async () => {
  configure(); let calls = 0; global.fetch = async () => ({ ok: ++calls === 1 });
  const res = await run(); assert.equal(res.statusCode, 200); assert.match(res.body.message, /could not send a confirmation/i); assert.equal(calls, 2);
  calls = 0; global.fetch = async () => { if (++calls === 2) throw new Error('timeout'); return { ok: true }; };
  assert.equal((await run()).statusCode, 200);
});
