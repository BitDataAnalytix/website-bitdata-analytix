# BitData Analytix & Technologies — Website v2.0

Saved 25 October 2026. Development version, not yet live (domain not reserved).

Slogan: **Analyzing every bit of data**

---

## 1. What is in this folder

| Path | What it is |
|---|---|
| `index.html` | The complete website in one file. Logos, translations and all pages are built in. Open it in any browser to view it. |
| `assets/logo/` | Brand-kit logo files used on the site (header wordmark for light and dark headers, footer logo with tagline). Copies of the files from the brand kit. |
| `assets/favicon/` | Full favicon and app-icon set from the brand kit, with its install instructions. |
| `assets/images/` | Stacks dashboard mockup images (light and dark), for the Stacks app redesign. |
| `assets/fonts/` | Montserrat font files and licence (SIL Open Font License), in case you self-host fonts later. |
| `README.md` | This file. |

The logos inside `index.html` are embedded, so the page works on its own. The `assets` folder holds the original files for reference, hosting and future edits.

---

## 2. Requirements to run and host

- **Browser:** any modern browser (Chrome, Edge, Firefox, Safari). No build step, no server code.
- **Internet connection:** needed for fonts. The page loads Montserrat, Noto Sans JP, Noto Sans SC and IBM Plex Mono from Google Fonts. Without internet it falls back to system fonts.
- **Hosting:** any static web host (e.g. Hostinger, GoDaddy, Netlify, GitHub Pages, AWS S3). Upload `index.html` to the site root.
- **Favicon:** upload every file from `assets/favicon/` to the site root, then paste the tags from `assets/favicon/HOW_TO_INSTALL_favicon.html.txt` into the page's `<head>`. (The page already has a built-in SVG favicon; the set adds PNG, ICO, Apple and Android icons.)
- **No external media files are needed.** The home banner uses a light CSS background plus the animated B, both built into the page.

---

## 3. Before going live (placeholders to fill)

Search `index.html` for square brackets `[` to find these:

- `bitdataanalytix.com` — your website domain (Privacy Policy, Terms, Cookie notice, contact emails).
- `info@bitdataanalytix.com`, `privacy@bitdataanalytix.com`, `grievance@bitdataanalytix.com`, `legal@bitdataanalytix.com` — email addresses.
- `+91 [phone number]` — business phone.
- `[Office address]`, `[Full office address]` — office address (Contact, About, Privacy Policy).
- `[Name]` — Grievance Officer name (Privacy Policy, section 11).
- `[City]` — city for arbitration and courts (Terms, section 15).
- `[40]%`, `[40]%`, `[20]%`, `[1.5]%`, `[60] days` — payment terms and warranty period (Terms).
- `[Add your founder profile …]` — founder photo and short bio (About page).
- Cookie notice partner list — update to the tools you actually install.

Also before launch:
- **Legal review:** have a lawyer review the Privacy Policy, Terms & Conditions and Behavioral Advertising notice.
- **Translation review:** German, Japanese and Chinese text was written by Claude. Have a native speaker check each, especially the legal pages.
- **Forms:** the Contact form and Blog email sign-up validate input but do not send anything yet. Connect them to an email service, CRM or form backend (e.g. Formspree, Netlify Forms, EmailJS) once hosted.
- **Website field on LinkedIn:** add the domain to the LinkedIn page once live.

---

## 4. Site structure (sitemap)

**Header:** Services ▾ · Industries ▾ · Products ▾ · About Us · Language switcher (EN / DE / JA / ZH) · Contact us

- **Home** — banner "Analyzing every bit of data." with animated dotted B; Who we are + figures (6 practice areas, 9 industries, 1 product); What we do; From raw signal to action; Industries; Our product (Stacks); Why BitData; "Let's transform your enterprise" (fixed-background band)
- **Services** (overview + 6 service pages): Digital · Software Development · Deep Learning · Data Analytics · Big Data · Data Science
- **Industries** (overview + 9 industry pages): Automotive · Energy · Financial Services · Healthcare · Insurance · Logistics · Manufacturing · Media · Education
- **Products**: Products overview · Stacks (library management)
- **About Us**
- **Contact us**
- **Footer only:** Innovation Lab · Blog · Careers (LinkedIn) · LinkedIn · Privacy Policy · Terms & Conditions · Behavioral Advertising · Cookie preferences

---

## 5. Requirements implemented in v2.0

**Brand**
- Logos from `BitData_BrandKit_Logo2_Navy_VividOrange`: wordmark-only logo in the header (larger, moved right), full logo with tagline in the footer, brand-kit favicon.
- Brand colours: navy #1B3B6F, vivid orange #FE7005, deep background #0E2242. Font: Montserrat.
- Light and dark mode supported.

**Header and navigation**
- Services, Industries and Products open on hover (like ascentt.com); tap to open on phones.
- Products drop-down lists Stacks as the only product for now.
- Innovation Lab, Blog and Careers removed from the header (kept in the footer). "About" renamed "About Us".
- Language switcher left of "Contact us": English, Deutsch, 日本語, 中文（简体）. The whole site, including legal pages, forms and messages, switches language. The choice is remembered.

**Home page**
- Banner: light, translucent background (soft brand glows and faint dot grid) with the animated dotted B. No video or photo.
- "BitData Analytix & Technologies" line above the headline removed.
- Figures moved below the banner into "Who we are" (like ascentt.com's intro).
- "Let's transform your enterprise" band with a background that stays fixed while scrolling; "Get in touch" style band ends every page.
- Our products: data-driven list; with two or more products the cards scroll right to left automatically.

**Content**
- Wording describes what BitData can and could do ("we can build…"), not past or current projects.
- Founder-led wording; no claims of a team.
- Internet of Things removed from the whole site.
- Industries hidden for now: Banking, Hi-tech, Retail, Telecom.
- Careers: no email or form; openings are posted on LinkedIn — https://www.linkedin.com/company/bitdata-analytix-and-technologies/
- Blog: "Coming soon" page with topics and email sign-up, ready for future technical posts.
- Legal pages modelled on the reference sites (PubMatic privacy, xdenx project terms, vegrecipesofindia behavioral advertising), written fresh for BitData under Indian law (DPDP Act 2023, IT Act 2000).

---

## 6. How to make common changes in `index.html`

Open the file in a text editor (e.g. VS Code) and search for these names:

| To change | Search for | Notes |
|---|---|---|
| Add a product | `var PRODUCTS=[` | Add an entry. With 2+ products the home page scroller switches on automatically. |
| Show a hidden industry again | `var HIDDEN_IND=` | Remove the industry name from the list. |
| Hide a service from "What we do" | `var HIDDEN_TILES=` | Add the service id, e.g. `"big-data"`. |
| Publish a blog post | `var POSTS=[` | Add `{slug, title, date, author, category, read, summary, body}`. It gets a card and its own page. |
| LinkedIn link | `var LINKEDIN_URL=` | Already set to the company page. |
| Translations | `var TR={` | Each English text maps to `[German, Japanese, Chinese]`. New or edited English text shows in English until its translations are added here. |
| Services content | `var S=[` | Each service: name, short text, overview, capabilities, technologies, industries. |
| Industries content | `var IND=[` and `var INDX={` | Short descriptions, use cases and matching services. |

---

## 7. Version history

- **v1.0 (23 Oct 2026):** first full site — home, 7 services, industries, Stacks, Innovation Lab, About, Careers, Contact, legal pages; Industries and Products drop-downs; Blog section.
- **v2.0 (24–25 Oct 2026):** everything in section 5 above.

Published previews (private links on claude.ai):
- v1.0: https://claude.ai/artifact/XiQWiB9xEGbZrgz4TNtoH4
- v2.0: https://claude.ai/artifact/9VnUQ3uJVzvzF5c6k7MWLA
