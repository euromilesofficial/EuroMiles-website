# EuroMiles — New Chat Handover

Updated: 27 October 2026. This is a handover, not a replacement for `AGENTS.md`.

## One project only

Workspace: `/Users/vikassharma/Downloads/EuroMiles/EuroMiles_AntiGravity`.
Codex lists exactly one configured project: `EuroMiles_AntiGravity`. Multiple chats are task histories, not separate website projects. Do not create another project or overwrite this working folder.

Read the existing `AGENTS.md` for design rules. Preserve that filename: it is the automatically recognized instruction file. This lowercase `agent.md` is an explicitly requested handover; ask the next chat to read it. No five root-level agent guides were found: before this handover, the only root Markdown guide found was `AGENTS.md`. Do not delete other documents or chats based on their titles.

## Current website

Static HTML/CSS/JavaScript: `index.html`, `assets/css/`, `assets/js/`, `assets/images/`. No package.json or formal build/test command was found. Section files use spelled-out numbers, e.g. `section-eight.css`, `section-eight.js`, `section-eight-data.js`.

Top bar/navigation and Sections 1–6 are approved and locked. Preserve their appearance and interactions unless explicitly asked. Section 7 is visually developed but retains static mockup reviews: the user cancelled live Google review integration until an API key is ready. Do not restart integration, substitute competitor reviews, or represent the static rating as a live fetch.

Section 8 is the current active design area. It has seven tabs and five questions per tab (35 total): Admissions; Programmes; Cost & Scholarships; Visa & Process; Life After Study; Part-Time Jobs; Erasmus, Internships & Study. Preserve all five questions per tab. FAQ content is in both static HTML and the data file; keep them synchronized. Existing consultation buttons open the existing dialog.

AntiGravity has since changed Section 8. Its current CSS ends with compact rounded pill tabs, navy/gold selected state, a downward pointer, desktop connecting lines/nodes, and mobile swipe navigation. These supersede the earlier rectangular 60px tabs. Review the actual final CSS cascade before editing; do not restore an older screenshot automatically. Many ordered overrides and !important declarations exist; avoid unrelated refactors.

Recent Section 7–8 transition work reduced extra space and blended the header artwork. Section 6 social follow strips were made responsive using fluid layouts/container queries. Preserve these fixes.

## Icons: last outstanding verification

The user reported disappearing icons. A local HTTP preview showed icons and no broken image assets. The user's other browser tab opens index.html using file://, where external SVG symbol references can be blocked. Original Section 6 symbols have now been embedded in index.html with `em-ui-` IDs; static references and the Section 6 JS icon factory use local fragment references. Original icon artwork was preserved. This loading fix also covers shared references in review navigation/stars. It has not yet had a final refreshed browser visual check. Verify the current page before making further icon changes; do not claim this explains every reported missing icon.

## Git status, checked read-only

Local branch: `main`.
Latest local commit: `e7c81f3` — 26 October 2026 — Lock approved Section 5 journey and footer.
Local `cloud-backup` branch: `a8f4ebd` — Back up approved website through Section 5.
Remote configured: https://github.com/euromilesofficial/EuroMiles-website.git . The initial restricted connection failed. A subsequent permitted connection confirmed GitHub main at a8f4ebd5b0332abbeadf4ded8eb99f2e8381ed3f before the newly requested backup.

There are 12 tracked modified files: AGENTS.md; index.html; Section 6/7/8 CSS; Section 6/7/8 JS and data; Section 6 SVG sprite. Untracked assets include the Section 6 image directory, Section 7 header PNG/WebP, and original PNG sources in mockups/Sections 3/4. These are local working files, not a new Git backup. Recheck status if needed; do not discard any changes.

No staging, commit, checkpoint, push, branch change, or cleanup is authorized. The user wants explicit control over Git. Future requested clean cloud snapshots use the separate cloud-backup workflow, not a push of full local history.

## Checks on this handover turn

No directly linked local assets missing, duplicate HTML IDs, or unresolved local SVG use targets. Section 6 and Section 8 JS syntax passed. Confirmed seven FAQ tabs and 35 questions. No design edits made during this handover. No new full responsive visual audit performed; previous audit results predate AntiGravity's latest changes.

## Efficient next-chat workflow

Read this handover and AGENTS.md once. Inspect only the files relevant to the next request. Do not reload old chat transcripts or delegate unless requested. Use a short plan, one focused edit, relevant verification, and a concise report. For visual checks prefer a local HTTP preview serving public website files; avoid serving private configuration. Preserve WebP images, editable text/CTAs, navy/gold palette, keyboard access and reduced-motion behavior. Never delete original reference images.

The referenced contributor-guide chat `01a17a44-4f3d-73c1-9e0c-90d1a7d8f9e8` failed with an endpoint error before producing a guide; it is not another website project.

## Sidebar cleanup and requested backup

Four redundant setup/audit chats were archived on 27 October; the ongoing website chat and sole project were kept. `agents.db` is a local SQLite index with one project row. It is not an instruction file or the Codex application database; use AGENTS.md and this handover in a new chat. The user has now explicitly requested a Git commit/backup. This authorizes the current backup only; inspect Git log for its final commit IDs.
