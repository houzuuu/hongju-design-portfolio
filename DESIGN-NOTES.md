# HONGJU — Text-led portfolio

The first screen is the work itself: five selected projects presented as a sparse text index, followed by all 19 projects and About. The museum doors, intro-film area, and 3D frame carousel were removed at the owner's request. Existing project detail imagery and video remain available.

## Reference and movement

The owner-provided 11.mov was analyzed at precise frame timestamps. Its defining behavior is character-by-character text revelation with overlapping start times across separate text blocks, rather than a block slide or horizontal mask.

Each field reserves its complete width and line wrapping before animation. Unicode graphemes become visible individually; words remain intact for natural wrapping. Project number, discipline, title, year, short description, and scope start at different delays. Contribution is omitted from the interaction. Scrolling starts each row once. There is no caret, scrolling interception, automatic carousel, or text translation.

## Layout and interaction

The desktop layout uses an index column and two aligned content columns, red project titles, black supporting text, and generous white space. Mobile reorganizes these into a narrow index and a readable content column. The whole entry opens its original project detail; all 19 entries remain in the full index.

Keyboard focus reveals text immediately. Screen readers receive the full string once, independently of visual glyphs. Reduced motion, missing IntersectionObserver support, and printing show complete text. No new libraries, images, or 3D assets are loaded on the homepage.

Validation: `node tests/text-reveal.test.cjs`, desktop/mobile UI review, unchanged row geometry before/after reveal, and project navigation.

## Typography and timing refinement

The homepage is now in English, with Helvetica Neue / Helvetica / Arial at regular weight. At a 1440px viewport, selected titles are approximately 34px and descriptions 17px. Fields follow a shared grid. Selected rows start 750ms apart, with title at +180ms, description at +620ms and scope at +900ms so successive projects overlap. A shared scheduling clock preserves order even when viewport entries arrive in separate observer callbacks. The original contribution information remains available in the project details.

Selected rows now scale with viewport height (130–180px on desktop), fitting four complete entries and the fifth title on typical laptop screens. Year sits beside the title. Mobile uses a compact title/category/description layout; scope remains in project details.

## Supplied bilingual reference

The latest owner-provided layout supersedes the compact four-to-five-row density. Selected work now matches its wide left discipline column, central English title/year/description, offset scope below, and right Korean title/summary. Typography and row spacing scale proportionally to the reference at desktop widths. The five actual projects and their 750ms reveal order remain. Narrow screens stack the same bilingual information without overlap.

Experience & recognition is permanently visible. All projects renders plain, immediately visible text without reveal or hover effects; its links still open case studies. The numbered All projects/About eyebrow labels are removed. Selected work swaps black/red on hover or keyboard focus, while gray descriptions and years retain their colors.

## Project detail structure

Inspired by http://chrishamamoto.com/projects/around-seoul: a centered opening image/video precedes a compact title, date, left-aligned description and credits, then the remaining original media form a centered vertical sequence. White background and existing type are retained. Desktop has fixed previous/next arrows; mobile uses the bottom project navigation. Image links open their full-size assets, videos keep native playback controls, and every existing image/caption and project fact is preserved.

Project details share the homepage header without any page-specific styling. The same logo, designer/location note, text navigation, background, spacing and sticky behavior apply. Mobile detail top padding accounts for the shared header remaining in normal flow.

Media captions use 16px type (previously 13px) with 1.7 line height. Site-wide keep-all word wrapping prevents mid-word breaks, including Korean text, while animated words remain intact on mobile. Existing authored paragraph breaks are preserved.

## Latest supplied references

The header uses an original lowercase hongju SVG wordmark with thin continuous curves and extended g/j descenders. Project details start with a ruled serif information strip: title, specifications/credits, then description. This supersedes the former image-first introduction; all original project media follows in order. Mobile stacks the three columns. The same logo/header remains shared across the website.

Latest refinement: the three-column project information follows the first image/video and inherits the homepage sans-serif font. Images render without links or drag behavior, so clicking them does not open/download an asset. Selected work preserves its original colors on hover; a fine underline grows across the row and a directional arrow appears. Captions remain 16px and word-based wrapping is retained.

Latest editorial cleanup: the standalone AI-assisted moving image note is removed; project descriptions have no top rule. All projects heading omits its count, row numbers are larger, and whole archive rows turn red on hover. About uses the supplied Experience Beyond Design introduction and omits the location label. Credentials have no bottom border. Header labels underline only on hover, with counts excluded.


## 2026-10-25 — All projects image index
- Reference: https://m3m.works/ — contiguous 16:9 image tiles, three equal columns.
- Reused all 19 existing project covers, including animated GIFs; links retain their project destinations.
- Red project labels appear on hover and keyboard focus; touch devices show captions below images. Two columns on tablets and one on phones.
- Header, selected work, archive, About and footer now share symmetric page gutters at all viewport widths.


## 2026-10-25 — M3M typography and page reference
- Removed header location/discipline and nav counts, plus the repeated number over each Korean project name.
- Korean selected-work typography reduced by 1pt with tracking from -.045em to -.025em.
- Archive hover follows m3m.works: 40% black full-card overlay, white 18px title at top left, immediate appearance, title only. Touch thumbnails remain clear.
- Project pages follow Kakaobank Illustration: compact title/date/13px narrative in the right half above full-width media; credits follow the gallery. All project content and media retained.
- About follows the reference's 25% text inset, restrained 13–15px sans serif typography and vertically spaced introduction, experience and recognition. Existing personal copy retained.


## 2026-10-25 — Navigation and index refinements
- Navigation increased to 15px minimum desktop / 14px mobile and weight 500.
- Removed visible archive heading and date range, retaining a screen-reader heading.
- Korean summaries track the second English description line using measured line height, font loading and resize updates; mobile retains stacked text.
- Long overlay titles split at balanced word boundaries; STARFIELD season titles break after STARFIELD.


## 2026-10-25 — EYEV color image and captions
- Replaced EYEV color-system board with a built-in Imagegen optical gradient image, using the original black/white and six-color palette as reference. File: dist/images/eyev-color-system-generated.png.
- Extracted the original Color System explanation into a real figcaption below the new artwork.
- All project captions now use black text and a 600-weight first-line heading; body copy remains regular.
- Removed the shared bottom footer containing copyright, email and Back to top. About contact remains available.

### Image generation prompt
Built-in image_gen, reference: dist/images/eyev-03-frame.webp.
Use case: stylized-concept. Asset type: final portfolio image replacing an EYEV eyecare brand color-system presentation. Reference image role: palette and concept reference ONLY, not a layout to preserve. Generate a refined, striking, ultra-minimal art-directed brand color-system image, landscape 16:9, high resolution. Show an elegantly structured composition of two large matte planes in near-black #1D1D1B and pure white #FFFFFF, contrasted with a broad, luminous translucent glass-like gradient ribbon/sheet that smoothly connects six colors: coral #EE857B, mustard yellow #DEC25D, teal #64A9AD, peach #FBD0AC, pale mint #C3E2DC, lavender #9E95C8. The six colors should all be visible and blend as light, reflecting the concept of extending visual experience. White studio background, frontal slightly elevated viewpoint, rigorous Swiss editorial spacing, crisp geometry, very subtle physical shadows and fine optical refraction, premium contemporary graphic design portfolio aesthetic. The color structure must be the primary subject; avoid excessive decorative objects. Make the gradient feel optical and luminous, not a generic rainbow or neon. Main black and white fields plus one broad flowing spectrum element, balanced negative space, edge-to-edge finished artwork with modest white margins. Absolutely NO text, NO letters, NO numbers, NO logos, NO color codes, NO captions, NO labels, NO watermark. The descriptive copy will be rendered separately on the website.


## 2026-10-25 — Explanatory color system and caption alignment
- Replaced the decorative ribbon with a flat diagram: RGB additive overlap yields white; CMY subtractive overlap yields black; a continuous six-color EYEV gradient sits below. Built-in Imagegen output: dist/images/eyev-color-system-v2.png.
- All detail captions begin at the same 50% horizontal position as the project introduction; mobile captions use the full content width.
- Added a GitHub-ready README with the existing homepage URL and local preview instructions.

### Color-system v2 generation prompt (built-in Imagegen)
Use case: infographic-diagram. Asset type: EYEV brand Color System image for a graphic designer portfolio. Create a precise, elegant flat editorial color-system plate, wide landscape 16:9, high resolution. This is an explanatory design diagram, NOT a decorative 3D render. White background with disciplined negative space. Top two thirds: two equal rectangular panels horizontally aligned, separated by a narrow white gutter. Left panel near-black #1D1D1B, containing exactly three identical overlapping light circles in RGB: red at upper center, green lower left, blue lower right. Correct ADDITIVE light mixing: red+green=yellow, red+blue=magenta, green+blue=cyan, all three overlap in a clearly WHITE central region. Right panel white #FFFFFF with a very subtle light-gray boundary, containing exactly three identical overlapping flat translucent pigment circles in CMY: cyan upper center, magenta lower left, yellow lower right. Correct SUBTRACTIVE pigment mixing: cyan+magenta=blue, cyan+yellow=green, magenta+yellow=red, all three overlap in a clearly BLACK central region. Both diagrams same scale and aligned. Bottom third: a wide continuous, refined soft gradient color band below the two panels, smoothly traveling through SIX brand colors in order coral #EE857B, golden yellow #DEC25D, teal #64A9AD, peach #FBD0AC, pale mint #C3E2DC, lavender #9E95C8. The band should clearly represent one six-color family and have clean straight edges. Swiss graphic design precision, flat vector-like raster image, pure color, crisp edges, excellent balance. No perspective, no 3D, no glass, no ribbons, no blocks, no shadows. Absolutely NO text, NO letters, NO numbers, NO symbols, NO labels, NO watermark; the website caption explains the diagram. Keep all diagram elements away from canvas edges with consistent white margins.


## 2026-10-25 — Selected EYEV color board
- User selected the flat brand-color board and requested removal of the large top-left Color System heading only.
- Built-in Imagegen edit preserves all remaining swatches, labels and hex codes. Final asset: dist/images/eyev-color-system-board.png.
- Replaced the existing EYEV color-system media reference; the right-aligned web caption remains unchanged.

### Edit prompt
Edit this exact image with ONE change only: remove the large black 'Color System' heading at the very top left, replacing just its letters with the same clean white background. Preserve the entire original canvas dimensions, layout, all other text, all swatches, exact colors and every hex code, margins, and the bottom gradient unchanged. Do not move or resize any other element. Keep the small 'Main Color', 'Sub Color', and 'Gradient' labels and all EYEV BLACK / EYEV PURE WHITE labels. The vacated heading space should simply remain white, with no replacement text. No other edits.


## 2026-10-25 — Selected work reduced to four
- Removed Village Culture Day from the selected-work sequence at the user's request.
- Updated selected count and documentation to four; retained the project in All projects and its detail page.


## 2026-10-25 — Website links and mobile refinements
- Moved project website links from bottom credits to the introduction above the first image.
- Mobile archive uses one column through the 700px mobile breakpoint.
- Selected-work Korean type increased from 14.67px to 16px, with description line height reduced to 1.2.


## 2026-10-25 — Summer ISP gallery cleanup
- Removed the second key-visual image and its caption from STARFIELD 2025 Summer ISP and STARFIELD 2024 Summer ISP.
- The first images and remaining gallery sequence are retained.


## 2026-10-25 — Editorial wordmark selected
- Applied option 01 Editorial as an outlined, font-independent SVG in the shared header.
- Navigation weight reduced from 500 to 400 on desktop and mobile.


## 2026-10-27 — Smaller header logo
- Reduced shared wordmark width by about 10%: 134 to 120px desktop, 80 to 72px mobile, 68 to 61px on narrow phones.
