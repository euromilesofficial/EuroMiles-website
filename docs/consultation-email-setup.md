# Consultation form: Brevo setup

The shared consultation dialog posts to a Vercel Serverless Function (`/api/consultation`). It sends a formatted lead notification to **EuroMilesofficial@gmail.com**, with the student's email as reply-to, then sends a confirmation to the student with Gmail as reply-to. The separate homepage profile-review form and free-assessment form are not connected by this change. The website remains on Vercel; Cloudflare can host the future CRM.

## Before real emails can be sent

1. Create a Brevo account and complete any account verification and transactional email activation required by Brevo. In Brevo, authenticate a domain you own and add a verified sender email on that domain. Add the DNS records Brevo supplies at your DNS provider. If using a Hostinger mailbox, create it separately in Hostinger; authentication with Brevo does not create an inbox. Preserve existing DNS records, especially MX records, and avoid adding a second SPF record.
2. Create a Brevo **API key** (not an SMTP password). In Vercel project settings under Environment Variables set:
   - `BREVO_API_KEY` — secret API key, server-side only.
   - `LEAD_FROM_EMAIL` — the verified sender email address alone, e.g. `hello@yourdomain.com` (not `Name <address>`). The sender name is EuroMiles.
   Select Preview to test and Production when ready to publish. Redeploy each environment after changes. Never put the key in source control or chat.
3. Submit a real test with consent. Check the Gmail lead email and the test student's confirmation, including spam folders. Test replying to both. Brevo API acceptance does not guarantee inbox delivery; check Transactional > Logs for bounces and delivery status.
4. Before public use, configure suitable Vercel WAF/rate limits and bot protection and review privacy and consent policies. An unprotected public confirmation endpoint could be abused to send unsolicited mail or exhaust the quota. Server validation alone is not bot protection.

## Important limitations

- The lead notification is sent first. If Brevo accepts it but the student confirmation fails, the visitor is told not to resubmit. API acceptance is not guaranteed delivery; check provider logs.
- No lead database, durable queue, retry system or CRM contact/deal integration exists yet. If Brevo is unavailable, the request is not stored. Timeouts can create ambiguous delivery and duplicate emails on retry. Future CRM work should store leads reliably first, add idempotency and retry handling, and separately track email delivery.
- Brevo CRM does not automatically become connected simply by sending transactional emails. Future work must explicitly create contacts/deals and connect a mailbox if reply tracking is required. Do not subscribe leads to marketing without appropriate consent.
- The handler escapes user text for HTML, uses a fixed lead recipient, and collects only the page path (not query strings).
- Free plan sending limits apply to all applicable sends, including both notification and confirmation.

## Tests

Run `node --test tests/consultation.test.js`. Tests mock Brevo and do not send emails. A local static server does not run Vercel functions; use a configured Vercel deployment for end-to-end testing.
