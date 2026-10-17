<div align="center">

# Abhay's Portfolio

A fast, responsive personal portfolio built with React, Vite and Tailwind CSS.

**[Live site](https://abhay-portfolio-kappa-nine.vercel.app)** &nbsp;·&nbsp; **[Source code](https://github.com/AbhayCodes-dev/abhay-portfolio)**

<br />

<img src="docs/screenshots/desktop-full.jpg" alt="Desktop view, light theme" width="720" />

</div>

---

## Contents

1. [About](#about)
2. [Features](#features)
3. [Screenshots](#screenshots)
4. [Tech stack](#tech-stack)
5. [Getting started](#getting-started)
6. [Editing the content](#editing-the-content)
7. [Development process](#development-process)
8. [Performance](#performance)
9. [Production build](#production-build)
10. [Deployment](#deployment)
11. [Testing](#testing)
12. [Challenges and solutions](#challenges-and-solutions)

---

## About

A personal portfolio that shows who I am, what I can do and what I have built. It is designed to load quickly and look good on any screen, from a small phone to a wide desktop.

**Sections:** Home, About, Skills, Projects, Resume and Contact, plus a footer with social links.

## Features

- Clean, flat design with a warm paper-and-ink palette, one accent colour and a matching dark theme
- Fully responsive layout with a hamburger menu on small screens
- Resume section with a downloadable PDF, plus experience and education
- Contact form with validation that sends email through EmailJS
- Lazy-loaded images and components for a fast first load
- Keyboard friendly: skip link, visible focus outlines, labelled buttons and form fields
- Theme toggle that follows the system setting until the visitor chooses one

## Screenshots

**Dark theme**

<img src="docs/screenshots/desktop-dark-full.jpg" alt="Desktop view, dark theme" width="720" />

**Tablet and mobile**

<table>
  <tr>
    <td align="center" valign="top"><img src="docs/screenshots/tablet-full.jpg" alt="Tablet view" width="360" /><br /><sub>Tablet (768px)</sub></td>
    <td align="center" valign="top"><img src="docs/screenshots/mobile-full.jpg" alt="Mobile view" width="220" /><br /><sub>Mobile (375px)</sub></td>
    <td align="center" valign="top"><img src="docs/screenshots/mobile-menu.jpg" alt="Mobile menu" width="220" /><br /><sub>Mobile menu</sub></td>
  </tr>
</table>

## Tech stack

| Area            | Tools                                         |
| --------------- | --------------------------------------------- |
| Framework       | React 19                                      |
| Build tool      | Vite 6                                        |
| Styling         | Tailwind CSS 4                                |
| Forms and email | React Hook Form, EmailJS                      |
| Icons and fonts | react-icons, Inter and Fraunces (self-hosted) |

---

## Getting started

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/AbhayCodes-dev/abhay-portfolio.git
cd abhay-portfolio
npm install
npm run dev
```

Then open http://localhost:5173.

The contact form works out of the box. To use your own EmailJS account, copy `.env.example` to `.env` and fill in `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY`.

## Editing the content

All the text and links live in a few small files, so the components rarely need to change.

| What to change                           | File                                                |
| ---------------------------------------- | --------------------------------------------------- |
| Email, phone, resume file name           | `src/assets/data/site.js`                           |
| Social links (GitHub, LinkedIn, email)   | `src/assets/data/social.js`                         |
| Project cards                            | `src/assets/data/projects.js`                       |
| Skills and icons                         | `src/assets/data/skills.js`                         |
| Resume highlights, experience, education | `src/assets/data/resume.js`                         |
| Resume PDF                               | `public/Abhay_Resume.pdf` (keep the same file name) |
| Colours                                  | CSS variables at the top of `src/index.css`         |

<details>
<summary>Project structure</summary>

```
src/
├── App.jsx              Layout, theme handling, lazy-loaded sections
├── index.css            Colour palette and base styles
├── components/
│   ├── Navbar.jsx       Sticky header, active link, theme toggle, mobile menu
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Section.jsx      Shared section heading and spacing
│   ├── Reveal.jsx       Fade-in on first scroll into view
│   └── LazyImage.jsx    Image that loads only when near the viewport
└── assets/
    ├── data/            Content files listed above
    └── images/          Optimised WebP images
public/                  Resume PDF and favicon
```

</details>

---

## Development process

1. **Set up** a React app with Vite and Tailwind CSS.
2. **Built the sections as React components**: Hero, About, Skills, Projects, Resume and Contact, with all content kept in separate data files.
3. **Made it responsive** with mobile-first Tailwind breakpoints, and checked it from 320px to 1440px wide.
4. **Optimised for production**: lazy-loaded images and components, WebP images and minified JavaScript and CSS (see [Performance](#performance)).
5. **Created the production build** with `npm run build` and **verified it locally** with `npm run preview`.
6. **Deployed** the repository to a hosting provider and tested the live site (see [Deployment](#deployment) and [Testing](#testing)).

## Performance

**Lazy loading**

- **Images:** an `IntersectionObserver` gives each image its `src` only when it is within 300px of the screen, so on first load only the hero photo is fetched (1 of 15 images). Width and height are set so the page does not jump as images appear.
- **Components:** `React.lazy` and `Suspense` split About, Skills, Projects, Resume, Contact and Footer into their own JavaScript chunks, so the first bundle stays small and the hero appears quickly.

**Minification and size**

- Vite minifies the JavaScript and CSS and removes unused code.
- All images are resized and converted to WebP: about 1.8 MB of originals became about 130 KB.
- There is no animation or scroll library. Smooth scrolling and fade-ins use plain CSS and browser APIs.
- Fonts are bundled with the site and split by language, so visitors only download the Latin files.
- React is in its own chunk and every file name includes a hash, so browsers and hosts can cache files for a long time.

**Build size (gzipped):** main JavaScript about 7 kB, React about 59 kB, CSS about 5 kB. The section chunks are between 1 and 11 kB each. The contact form is the largest because of the form and email libraries.

## Production build

```bash
npm run lint       # check the code
npm run build      # create the optimised build in dist/
npm run preview    # serve the build at http://localhost:4173
```

Check the site with `npm run preview` before deploying. It serves the same files the host will serve.

---

## Deployment

The project is deployed from GitHub. Config files for Vercel, Netlify and GitHub Pages are included.

### Vercel

1. Go to https://vercel.com/new and import the GitHub repository.
2. Vercel detects Vite automatically (build command `npm run build`, output folder `dist`).
3. Click **Deploy**. The site goes live at a `https://<project>.vercel.app` address with HTTPS.
4. Every push to the `main` branch redeploys the site automatically.

**Custom domain and SSL (optional):** open the project, go to **Settings → Domains**, add the domain and create the DNS record Vercel shows (an A record or CNAME). The SSL certificate is issued and renewed automatically.

<details>
<summary>Other hosts: Netlify and GitHub Pages</summary>

**Netlify**

1. Go to https://app.netlify.com and choose **Add new site → Import from Git**, then pick the repository. Settings are read from `netlify.toml`.
2. Click **Deploy**. For a custom domain, use **Domain management → Add domain**. HTTPS is enabled automatically.

**GitHub Pages**

1. In the repository, go to **Settings → Pages** and set the source to **GitHub Actions**.
2. Open the **Actions** tab, choose **Deploy to GitHub Pages** and click **Run workflow**. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it to `https://<username>.github.io/abhay-portfolio/`.
3. For a custom domain, set it under **Settings → Pages → Custom domain** and tick **Enforce HTTPS**.

</details>

---

## Testing

### Automated checks

Run against the production build in headless Chromium (Playwright):

- All sections render, with no broken images and no console errors
- No sideways scrolling at 320, 375, 768, 1280 and 1440 px
- Lazy loading: only 1 of 15 images loads on first paint, and all 15 load while scrolling
- Navigation links scroll to the right section, the active link highlights, and the mobile menu closes after a tap
- The contact form shows validation messages for empty fields
- The theme toggle works and the choice is remembered after a reload

### Browser and device testing

Results from testing the deployed site:

| Browser or device | Works? | Notes      |
| ----------------- | :----: | ---------- |
| Chrome (desktop)  |   ✅   |            |
| Edge              |   ✅   |            |
| Firefox           |   ✅   |            |
| Safari            |        | Not tested |
| Android phone     |   ✅   |            |
| iPhone            |        | Not tested |

Also checked: the contact form sends a real email, the resume downloads, and every project link opens.

---

## Challenges and solutions

**Images worked in development but not in the production build.**
They were referenced as plain text paths such as `/src/assets/...`, which Vite does not bundle. Switching every image to an `import` lets Vite include and fingerprint it.

**Some files were missing.**
The social icons and one project image did not exist. The icons now come from `react-icons`, and the unfinished "Weather Dashboard" card, which had placeholder links and no image, was removed.

**File names would have broken on a Linux host.**
`Express.png` and `express.png` are the same file on Windows and macOS but not on Linux. All file names are now lowercase.

**The images were too heavy.**
About 1.8 MB of PNG and JPG files (the profile "jpg" was actually a PNG). They were resized and converted to WebP, bringing the total to about 130 KB.

**Small icons were being embedded into the JavaScript.**
Vite inlines small files as base64 by default, which defeats lazy loading. Setting `assetsInlineLimit: 0` keeps each image as its own file.

**Browser lazy loading was not lazy enough.**
With only `loading="lazy"`, 12 of 15 images were requested before any scrolling on a tall phone page, because each browser decides how far ahead to load. An `IntersectionObserver` in `LazyImage` now means only 1 of 15 loads up front.

**The first design looked generic.**
It leaned on gradients, glows and blur. The interface was rebuilt with a solid colour palette stored as CSS variables, and the animation library was replaced with a small fade-in component.

**Side-sliding animations caused sideways scrolling on phones.**
The fade-ins now move only vertically, so nothing sits outside the screen.

**Dark-mode visitors saw a white flash while the page loaded.**
A tiny script in `index.html` applies the saved or system theme before the first paint.

**Tailwind v4 ignored the old config file.**
Tailwind v4 does not read `tailwind.config.js` and ties `dark:` to the system setting. The unused file was removed and a `@custom-variant dark` rule added so the theme toggle works.

---

## Author

Built by [Abhay](https://github.com/AbhayCodes-dev).
