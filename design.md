# Portfolio Design Guide

This portfolio uses a dark green editorial style led by the About page. New pages, project entries, writing, links, and resume updates should reuse the existing tokens and components before adding new styles.

## Visual Direction

- Primary mood: quiet, editorial, dark green, personal, and legible.
- The About experience is the reference point for the whole site.
- Use `bg-night` with `text-paper` for primary page headers, footer, and immersive sections.
- Use `bg-paper` with `text-ink` for long reading sections and dense lists.
- Use the red-orange accent sparingly for active nav dots, small marks, hover states, and primary actions.

## Color Tokens

Tokens live in `src/styles/global.css` under Tailwind `@theme`.

- `paper` `#f5f1e8`: warm page background and dark-section text.
- `ink` `#10130d`: primary text on light backgrounds.
- `muted` `#737a62`: secondary text on light backgrounds.
- `line` `#d7d0bf`: light-theme borders.
- `soft` `#ece5d6`: subtle light surfaces and code backgrounds.
- `night` `#061004`: primary dark green-black.
- `moss` `#70865d`: secondary green accent inside gradients.
- `accent` `#ff5546`: active mark, hover accent, and small calls to action.

Avoid introducing one-off colors. If a new color is necessary, add it as a named token and document why.

## Typography

- Font stack: `Inter`, `Helvetica Neue`, `Segoe UI`, sans-serif.
- Body text uses relaxed line height for readability.
- `.page-title`: large page-level heading.
- `.section-title`: section heading.
- `.body-large`: larger intro/body copy.
- `.editorial-label`: small uppercase label for section names, dates, and metadata.
- `.meta-list`: compact uppercase tag lists.
- Do not scale font size directly with viewport width outside the established clamp-based title utilities.
- Keep letter spacing at `0` or the existing positive tracking values; do not add negative letter spacing to compact UI labels.

## Shared Effects and Components

- `.dark-section`: full dark section using `night` and `paper`.
- `.page-hero`: dark page header used by Projects, Writing, Links, Resume, and detail pages.
- `.visual-treatment`: dark image treatment with the red/moss gradient overlay and screen-blended imagery.
- `.prose-editorial`: MDX/article content styling for writing and project notes.
- `Container.astro`: use for page width and responsive gutters.
- `ProjectRow.astro`: use for project lists instead of inventing project cards.
- `BlogList.astro`: use for writing lists.
- `PostLayout.astro`: use for writing detail pages.

## Navigation

- Primary nav order: About, Projects, Writing, Links, Resume.
- About links to `/`; `/about` remains available and should render the same experience.
- Resume links to `/resume`; the PDF is linked from that page.
- Desktop nav uses a flush-left rail with left-aligned labels and a fixed dot column so active dots sit beside labels without overlapping text.
- The active indicator is the `accent` dot. Do not add another active style that competes with it.

## Page Patterns

- Root `/` and `/about`: use the shared About experience with the Vitruvian image, sticky intro, and dark narrative section.
- Listing pages: begin with `.page-hero`, then use light-background list content.
- Detail pages: begin with `.page-hero`; keep long prose on the light background for readability.
- Footer: dark, minimal, and aligned with the page hero/footer theme.

## Adding Content

- Projects: add MDX entries under `src/content/projects`; include image, description, tags, tech stack, overview, problem, approach, gallery, and learnings using the existing schema.
- Writing: add MDX entries under `src/content/blog`; the `/writing` route is the public writing index.
- Links: add entries to `referenceLinks` in `src/data/site.ts`; keep categories short and useful.
- Resume: update `resumeExperience` and `resumeEducation` in `src/data/site.ts`; replace the PDF in `public/files` only when the linked file name remains valid or the link is updated everywhere.

## Reuse Rules

- Prefer existing tokens and classes in `global.css`.
- Prefer full-width sections and constrained inner content over floating cards.
- Do not nest cards inside cards.
- Keep borders subtle: `line` on light backgrounds, `paper/10` on dark backgrounds.
- Use `accent` as punctuation, not as a large background.
- New reusable styling belongs in `global.css` only when it removes repeated theme logic across pages.
