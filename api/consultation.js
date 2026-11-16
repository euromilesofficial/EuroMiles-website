'use strict';

// Vercel serverless endpoint. Never send mail credentials to the browser.
const RECIPIENT = 'EuroMilesofficial@gmail.com';
const MAX_BODY_BYTES = 16 * 1024;
const ALLOWED_QUALIFICATIONS = ['Class 10', 'Class 11', 'Class 12', 'Diploma', "Bachelor's degree", "Master's degree", 'Other qualification'];
const ALLOWED_LEVELS = ["Bachelor's", "Master's", 'PhD'];

function clean(value, max) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim().slice(0, max);
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
function response(res, code, message) {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(code).json({ ok: code === 200, message });
}
function row(label, value) {
  return `<tr><td style="padding:12px 14px;border-bottom:1px solid #eee8dc;color:#66758a;font:600 13px Arial,sans-serif;width:38%;vertical-align:top">${escapeHtml(label)}</td><td style="padding:12px 14px;border-bottom:1px solid #eee8dc;color:#0b2046;font:600 14px Arial,sans-serif;line-height:1.5;overflow-wrap:anywhere">${escapeHtml(value).replace(/\r?\n/g, '<br>')}</td></tr>`;
}

module.exports = async function consultation(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return response(res, 405, 'Method not allowed.');
  }
  if (!String(req.headers['content-type'] || '').toLowerCase().startsWith('application/json')) return response(res, 415, 'Please submit the form again.');
  const body = req.body;
  if (!body || typeof body !== 'object' || Array.isArray(body)) return response(res, 400, 'Please check your details and try again.');
  if (Number(req.headers['content-length'] || 0) > MAX_BODY_BYTES || Buffer.byteLength(JSON.stringify(body)) > MAX_BODY_BYTES) return response(res, 413, 'The submission is too large.');

  const name = clean(body.full_name, 100);
  const mobile = clean(body.mobile, 30).replace(/[\s()-]/g, '').replace(/^(?:\+91|0)/, '');
  const email = clean(body.email, 254);
  const qualification = clean(body.qualification, 50);
  const degree = clean(body.degree_level, 30);
  const intake = clean(body.intake_year, 4);
  const message = clean(body.message, 2000);
  // Send only a relative path; never include page query parameters or fragments.
  const page = clean(body.page, 200).split(/[?#]/)[0];
  const source = /^\/(?!\/)[a-zA-Z0-9/_%-]*$/.test(page) ? page : '/';
  if (name.length < 2 || !/^[6-9]\d{9}$/.test(mobile) || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) || /[\r\n]/.test(email) || !ALLOWED_QUALIFICATIONS.includes(qualification) || !ALLOWED_LEVELS.includes(degree) || !/^20\d{2}$/.test(intake) || body.contact_consent !== true) {
    return response(res, 400, 'Please check all required fields and consent before submitting.');
  }
  const apiKey = process.env.BREVO_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!apiKey || !from || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(from)) return response(res, 503, 'The consultation form is temporarily unavailable. Please try again later.');

  const received = new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Kolkata' }).format(new Date()) + ' IST';
  const fields = [ ['Name', name], ['Mobile', '+91 ' + mobile], ['Email', email], ['Current qualification', qualification], ['Interested degree', degree], ['Preferred intake', intake], ['Message', message || 'Not provided'], ['Contact consent', 'Agreed to contact via WhatsApp, call or email'], ['Page', source], ['Received', received] ];
  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f4f2ed"><div style="max-width:620px;margin:auto;background:#fff;border:1px solid #e7dfcf;border-radius:16px;overflow:hidden"><div style="padding:28px;background:#0b2046;color:#fff;font-family:Arial,sans-serif"><div style="color:#e8bf6d;font-size:12px;font-weight:700;letter-spacing:2px">EUROMILES · NEW ENQUIRY</div><h1 style="font-size:25px;line-height:1.2;margin:12px 0 6px">A new Italy journey starts here.</h1><p style="margin:0;color:#d8e0e9;font-size:14px;line-height:1.5">A student or parent has requested a free consultation.</p></div><div style="padding:24px"><h2 style="font:700 18px Arial,sans-serif;color:#0b2046;margin:0 0 14px">Lead details</h2><table role="presentation" style="width:100%;border-collapse:collapse">${fields.map(([label, value]) => row(label, value)).join('')}</table><p style="font:13px/1.6 Arial,sans-serif;color:#6b788a;margin:20px 0 0">Reply to this email to contact the person who submitted the form. Please handle their information securely.</p></div></div></body></html>`;
  const text = 'EUROMILES — NEW CONSULTATION ENQUIRY\n\n' + fields.map(([label, value]) => `${label}: ${value}`).join('\n');
  const send = (payload) => fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(7000)
  });
  const sender = { name: 'EuroMiles', email: from };
  try {
    const result = await send({ sender, to: [{ email: RECIPIENT }], replyTo: { email }, subject: 'New EuroMiles consultation enquiry', htmlContent: html, textContent: text });
    if (!result.ok) return response(res, 502, 'We could not send your request. Please try again later.');
  } catch {
    // A timeout can mean the provider accepted the email even though we did not receive a response.
    return response(res, 502, 'We could not confirm that your request was sent. Please try again later.');
  }

  // The lead email has been accepted. A failed confirmation must not make the visitor resend the lead.
  const confirmationHtml = `<!doctype html><html><body style="margin:0;padding:24px;background:#f4f2ed"><div style="max-width:620px;margin:auto;background:#fff;border:1px solid #e7dfcf;border-radius:16px;overflow:hidden"><div style="padding:28px;background:#0b2046;color:#fff;font-family:Arial,sans-serif"><div style="color:#e8bf6d;font-size:12px;font-weight:700;letter-spacing:2px">EUROMILES · YOUR ITALY JOURNEY</div><h1 style="font-size:25px;line-height:1.25;margin:12px 0 0">Thank you for getting in touch.</h1></div><div style="padding:28px;color:#0b2046;font:15px/1.7 Arial,sans-serif"><p>Hello ${escapeHtml(name)},</p><p>We've received your request for a free consultation. Our team will review your details and contact you about your study goals and opportunities in Italy.</p><p>For any questions, reply to this email.</p><p>Warm regards,<br><strong>The EuroMiles team</strong></p></div></div></body></html>`;
  let confirmationSent = false;
  try {
    const result = await send({ sender, to: [{ email }], replyTo: { email: RECIPIENT }, subject: 'Your EuroMiles consultation request', htmlContent: confirmationHtml, textContent: `Hello ${name},\n\nWe've received your request for a free consultation. Our team will review your details and contact you about your study goals and opportunities in Italy.\n\nFor any questions, reply to this email.\n\nWarm regards,\nThe EuroMiles team` });
    confirmationSent = result.ok;
  } catch { /* Lead notification was already accepted. */ }
  return response(res, 200, confirmationSent
    ? 'Thank you! Your consultation request has been sent. Please check your email for a confirmation.'
    : 'Thank you! Your consultation request has been sent. We could not send a confirmation email, so please do not submit again.');
};
