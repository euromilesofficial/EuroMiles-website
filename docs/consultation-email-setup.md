# Consultation email setup

The existing consultation dialog submits to `/api/consultation`, a Vercel Serverless Function. The function sends a styled HTML email and plain-text alternative to **EuroMilesofficial@gmail.com** using Resend. The student's email is the reply-to address. The homepage design is unchanged; this integrates the shared consultation dialog, not the separate homepage profile-review form or free-assessment form.

## Before it can deliver email

1. Create or use a Resend account and verify a domain you control in Resend (follow Resend's DNS instructions). Use a sender on that verified domain; do not use the Gmail recipient as the sender unless it is actually authorised by the provider.
2. In the Vercel project settings, add these environment variables for **Production** and, separately, **Preview** if you want to test previews:
   - `RESEND_API_KEY`: the server-side Resend API key, kept secret.
   - `LEAD_FROM_EMAIL`: a verified sender such as `EuroMiles <leads@your-verified-domain>`.
3. Redeploy the relevant Vercel environment after setting variables. Submit a real test consultation with consent and confirm it arrives at EuroMilesofficial@gmail.com, including spam/junk. Reply to verify the reply-to address. Resend API acceptance means the provider accepted the message, not a guarantee it reached the inbox.
4. Verify the site's privacy/consent policy and configure appropriate Vercel WAF/rate limits or bot protection before public use. The endpoint has validation but no durable rate limiting or lead database.

Never put the API key in source code, client-side variables, GitHub, or chat. Missing configuration and provider errors return a failure message to the visitor; they never show a false success. Incoming user text is escaped in HTML. The form includes the submitted fields, consent, page path and server-side received time; query strings are not collected.

## Future CRM integration

The endpoint receives a structured JSON lead before email delivery. A future integration can deliver the same validated lead to a CRM server-side. If guaranteed delivery to both email and CRM is required, use durable storage/queueing and an idempotency strategy; the current function stores no leads and retries after a timeout can result in duplicate emails.

## Test

Run `node --test tests/consultation.test.js`. Tests mock Resend and do not send email. Local static HTTP servers do not run Vercel functions; use a Vercel deployment for an end-to-end test.
