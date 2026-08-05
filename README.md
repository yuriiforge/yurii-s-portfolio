# Portfolio — Yurii S.

Single-page developer portfolio. React + Vite + Tailwind CSS v4, deployed on Vercel.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build locally
npm run lint
```

## Editing content

**All copy lives in [`src/data/content.js`](src/data/content.js).** Name, title,
social links, about text, projects, skills, experience, education, languages and
the contact blurb are all exported from that one file — you should never need to
open a component to change wording.

A few conventions in there:

| Field                | Effect                                                       |
| -------------------- | ------------------------------------------------------------ |
| `profile.available`  | `false` hides the "Available for work" dot                    |
| `profile.resume`     | `null` hides the "Download CV" button                         |
| `social.telegram`    | `null` hides that icon (same for any social key)              |
| `project.nda`        | `true` shows the NDA badge and suppresses the project links   |
| `project.featured`   | `true` shows the accent "featured" badge                      |
| `project.period`     | `null` hides the date next to the subtitle                    |
| `education[].period` | `null` hides the year range                                   |

Adding a nav entry is just another `{ id, label }` in `nav` — but the `id` must
match a section `id` rendered in [`src/App.jsx`](src/App.jsx) for the scroll-spy
highlight to track it.

## Assets

Files in `public/` are served from the site root:

- `public/profile.JPG` — sidebar photo (path set by `profile.photo`)
- `public/resume.pdf` — linked by the "Download CV" button
- `public/favicon.svg`

If the photo is missing or fails to load, the avatar falls back to your initials
rather than showing a broken image.

## Theming

Colours are CSS custom properties in [`src/index.css`](src/index.css) — light
values under `:root`, dark values under `.dark`. Changing `--accent`,
`--accent-dim` and `--accent-glow` in both blocks re-skins the entire site.

The theme toggle stores the choice in `localStorage` under `portfolio-theme`.
An inline script in [`index.html`](index.html) applies it before first paint, so
there is no flash of the wrong theme on load. With nothing stored, the site
follows the visitor's OS preference.

## Structure

```
src/
  data/content.js          ← all copy
  hooks/useScrollSpy.js    ← highlights the nav item for the current section
  components/
    Sidebar.jsx            ← fixed 280px desktop sidebar
    MobileNav.jsx          ← sticky header + slide-in drawer (<1024px)
    Section.jsx            ← `// heading` marker + fade-up on scroll
    Avatar.jsx             ← photo with initials fallback
    ThemeToggle.jsx
    SocialLinks.jsx
    BrandIcons.jsx         ← GitHub / LinkedIn / Telegram marks as inline SVG
    BackgroundOrbs.jsx
    sections/              ← About, Projects, Skills, Experience, Education, Contact
```

`BrandIcons.jsx` exists because `lucide-react` v1 removed brand logos — inlining
the three paths avoids pinning the icon library to an old major version.

## Deploying to Vercel

[`vercel.json`](vercel.json) already sets the framework, build command and output
directory, so no dashboard configuration is needed.

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) —
it will pick up `vercel.json` automatically and redeploy on every push.
