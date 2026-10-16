# EuroMiles Project Design Rules

Apply these rules to new sections and future edits.

## Image assets

- Save newly created and optimized website images as WebP.
- Size raster images close to their actual display dimensions. Use roughly 2x display size for crisp high-density screens; avoid oversized source images when a smaller crop will do.
- Keep images visually crisp while minimizing file size. Preserve original reference/mockup assets and use optimized derivatives in the live page.
- Keep text and buttons editable in HTML/CSS when they are overlays on promotional images; use the image as the background only.

## Visual consistency

- Reuse the established EuroMiles palette: deep navy, Italian gold, white, and warm slate. Keep component hover treatments consistent, while preserving distinctions the user has made between components.
- Keep hover and focus colors and effects consistent across navigation, menu links, cards, and CTAs. Preserve the established CTA pendulum style and respect `prefers-reduced-motion`.
- Match new sections to the existing spacing, typography, menu sizing, and promotional-card proportions. Do not redesign existing approved elements as part of unrelated work.
- Promo cards use no broad image fade overlay. Keep headlines, descriptions, and badges editable and use a soft white text glow for readability; make the description glow stronger than the headline. Do not add a translucent text box or gradient wash over the photo unless the user asks for one.
- The Study in Italy, Universities, Programs, and Scholarships dropdowns share a 1250px desktop width and aligned edges/column rhythm. Use 330px as the baseline panel height; add height when extra rows need comfortable spacing rather than compressing the links (the current five-row Programs panel is 350px tall). Keep row-link titles at 13px across all mega menus.
- Use a full-bleed promo image in a near-square card about 312px wide and 300–320px tall for current menus. Do not reduce an approved promo-card width to make room for columns; widen the panel and let columns take the additional space. Keep promo-card text and buttons editable in HTML/CSS, with the approved white text-glow treatment and no broad gradient fade over the image.

## Current approved interaction details

- The six Why Italy benefit cards retain their original images, typography, alignment, dimensions, and curved/tilted image treatment (especially cards 3–6). Opening-header work must not change these cards or their closing guidance strip. Obtain explicit scope from the user before revising card styling.
- The complete top bar, navigation, and hero section are approved and locked as of 16 October 2026. Preserve their design, content, spacing, animations, and desktop/tablet/mobile behaviour unless the user explicitly requests a change.
- The corrected mobile carousel spacing is approved and locked: slides 1, 2, 3, and 5 use content-sized copy blocks with a 12px icon-row-to-photo gap and the approved short scenic-image fade. Preserve this during future edits.
- The hero left section is approved and locked, including its copy, typography, form, spacing, responsive layout, double-arrow journey, and looping gold-to-green arrival animation. Preserve it during right-carousel work unless the user explicitly requests a change.
- Hero carousel photographs use the new assets in `assets/images/hero-section-crousel`. Recreate the original mockup banners’ slogans, navy/gold typography, university logos, and feature-icon rows as editable HTML over those photographs; do not substitute the old flattened banner images for the new photos.
- The fifth graduation design, “Turn Your Dreams into a Global Future,” is the opening slide, followed by universities, student life, scholarships, and the Turin scene. Its supplied reference is preserved; use the final original graduation photograph with editable text and icons. Do not restore the decorative landmark buildings or Italian ribbon overlay.
- Hero university emblems use official assets in `assets/images/university-logos` with source provenance in `SOURCES.md`. Preserve their native colours, alpha transparency, and fine details; do not apply recolouring or background-removal filters.
- All hero-carousel feature icons and university emblems use a small localized ivory light halo, with a soft text glow on their labels. Keep the photographs visible; do not restore broad pale backdrops behind headings or entire icon rows.

- The Study in Italy menu trigger uses the warm gold active state (`#f7d18c`) with a matching dropdown pointer.
- Submenu link hover uses the dark bronze accent (`#805600`).
- Do not extend the dark bronze hover color to the main navigation; the user said it does not look good there. Its replacement treatment is not yet approved.
- Header CTAs use the subtle three-swing pendulum movement; the consultation button repeats on a 2.6-second cycle, with reduced-motion support.
- Preserve the current crest size, logo placement, and internal spacing unless asked to change them.

## Responsive implementation

- Every new section and edit must support desktop, tablet, and mobile. Verify readable content, usable touch controls, and no component overflow at each size, including narrow mobile screens.
- Review and improve the page one section at a time, starting with the top bar, then navigation, then the hero, and continuing to the footer.

## Cloud backup scope

- After each completed website change, synchronize the clean GitHub backup: commit and push modified HTML/CSS/JavaScript, new assets and dependencies, and deletions of replaced or unused files. Verify that removed files are no longer referenced before deleting them from the current backup. Keep earlier commits and restore tags intact so previous approved versions remain recoverable; do not rewrite history to remove ordinary superseded website files.
- The private GitHub repository `euromilesofficial/EuroMiles-website` is for clean website snapshots: include the current HTML, loaded styles/scripts, referenced assets (including dynamically loaded carousel assets), and required licenses. Exclude unused assets, alternate revisions, source mockups not used by the page, ZIPs, temporary files, and operating-system metadata.
- Preserve the full local working history and original reference files on this computer. Do not push that older history to the clean cloud repository, since it contains unused assets. Use the separate local `cloud-backup` branch for clean snapshots pushed to GitHub's `main` branch.
