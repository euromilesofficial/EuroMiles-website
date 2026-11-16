'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const handler = require('../api/consultation');
const valid = { full_name: 'Asha Sharma', mobile: '9876543210', email: 'asha@example.com', qualification: 'Class 12', degree_level: "Bachelor's", intake_year: '2027', message: 'Interested in scholarships', contact_consent: true, page: '/study-in-italy/study-universities/' };
function makeResponse() {
  return { headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(code) { this.statusCode = code; return this; }, json(data) { this.body = data; return this; } };
}
async function run(body = valid, method = 'POST', contentType = 'application/json') {
  const res = makeResponse();
  await handler({ method, headers: { 'content-type': contentType }, body }, res);
  return res;
}
test('validation rejects bad submissions before sending', async () => {
  let called = false; global.fetch = async () => { called = true; };
  assert.equal((await run({ ...valid, contact_consent: false })).statusCode, 400);
  assert.equal((await run({ ...valid, mobile: '123' })).statusCode, 400);
  assert.equal((await run({ ...valid, email: 'bad\n@example.com' })).statusCode, 400);
  assert.equal((await run(valid, 'GET')).statusCode, 405);
  assert.equal((await run(valid, 'POST', 'text/plain')).statusCode, 415);
  assert.equal((await run({ ...valid, message: 'a'.repeat(17000) })).statusCode, 413);
  assert.equal(called, false);
});
test('missing mail configuration does not report success', async () => {
  delete process.env.RESEND_API_KEY; delete process.env.LEAD_FROM_EMAIL;
  const result = await run(); assert.equal(result.statusCode, 503); assert.equal(result.body.ok, false);
});
test('sends escaped complete lead to the fixed recipient and reports success only on acceptance', async () => {
  process.env.RESEND_API_KEY = 'test-key'; process.env.LEAD_FROM_EMAIL = 'EuroMiles <leads@example.com>';
  let sent;
  global.fetch = async (url, opts) => { assert.equal(url, 'https://api.resend.com/emails'); sent = JSON.parse(opts.body); return { ok: true }; };
  const result = await run({ ...valid, full_name: '<script>alert(1)</script>', message: 'First line\nSecond & line', page: '/study-in-italy/?private=secret' });
  assert.equal(result.statusCode, 200); assert.deepEqual(sent.to, ['EuroMilesofficial@gmail.com']);
  assert.equal(sent.reply_to, valid.email); assert.match(sent.html, /&lt;script&gt;/); assert.doesNotMatch(sent.html, /<script>/);
  assert.match(sent.html, /First line<br>Second &amp; line/); assert.match(sent.html, /Class 12/); assert.match(sent.html, /2027/);
  assert.doesNotMatch(sent.html, /private=secret/); assert.match(sent.text, /Contact consent: Agreed/);
});
test('provider errors and network failures never report success', async () => {
  global.fetch = async () => ({ ok: false }); assert.equal((await run()).statusCode, 502);
  global.fetch = async () => { throw new Error('network'); }; assert.equal((await run()).statusCode, 502);
});
