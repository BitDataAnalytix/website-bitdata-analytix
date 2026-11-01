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
| `robots.txt`, `sitemap.xml` | Search engine files (see section 7). |
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

## 3. Before going live (still to fill)

Contact details now match the brand kit: contact@bitdataanalytix.com (all site and legal emails), +91 77700 66911, and 1511B, Sadashiv Peth, Tilak Road, Pune 411030. Grievance Officer: shown by role and business name only (no personal name on the site for now). Courts and arbitration: Pune.

Still open:
- `[40]%`, `[40]%`, `[20]%`, `[1.5]%`, `[60] days` — payment terms and warranty period (Terms, "Payment terms" and "Warranty and support").
- Founder photo and bio (About page) — `assets/images/ajinkya-yelai.jpg`.
- Cookie notice partner list — update to the tools you actually install.
- The "Items in [square brackets] … have a lawyer review" note at the top of each legal page — remove it after the legal review.
- **Legal review** of Privacy Policy, Terms & Conditions and Behavioral Advertising notice. Until the Terms are reviewed, the Terms link is hidden from the footer and `/terms` is left out of `sitemap.xml`; to show it again add `<a href="/terms">Terms &amp; Conditions</a>` back to the footer's Legal column and the URL back to the sitemap.
- **Translation review** of German, Japanese and Chinese text by native speakers.

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

## 7. Search engine optimisation (SEO)

Added 1 November 2026.

- **Real page addresses.** Every page has its own URL (`/services`, `/service-data-analytics`, `/industry-healthcare`, `/stacks`, `/contact` …) instead of `#hash` links, so Google can index each page separately. Old `#contact`-style links still work and are redirected. Opened straight from disk (file://) the site falls back to `#` links. Cloudflare serves `index.html` for every path (`not_found_handling: single-page-application` in `wrangler.jsonc`).
- **Titles and descriptions per page.** Search for `var SEO = {` in `index.html`. Each entry is `[title, description]`; keep titles under ~60 characters and descriptions under ~155. Industry pages are generated from `IND`, blog posts from `POSTS`.
- **Canonical URL, Open Graph and X/Twitter tags** update on every page, so links shared on LinkedIn or WhatsApp show the right title and the brand image `assets/images/og-image.png` (1200 × 630, from the brand kit).
- **Structured data (schema.org JSON-LD).** In `<head>`: the business (ProfessionalService) with address, phone, email, hours, founder and LinkedIn, plus WebSite. Per page: WebPage, BreadcrumbList, and Service (service pages) or SoftwareApplication (Stacks). Check with https://search.google.com/test/rich-results once live.
- **`sitemap.xml`** (27 pages; `/terms` left out until the legal review) and **`robots.txt`** in the site root. Add new pages to `sitemap.xml` when you publish them.
- **Favicon set** linked in `<head>`; `assets/favicon/site.webmanifest` icon paths fixed to `/assets/favicon/…`.
- **Domain:** all URLs use `https://www.bitdataanalytix.com`. In Cloudflare, redirect `bitdataanalytix.com` to `www.bitdataanalytix.com` so there is only one version of each page.

After launch:
1. Verify the domain in Google Search Console and submit `https://www.bitdataanalytix.com/sitemap.xml` (also Bing Webmaster Tools).
2. Create the Google Business Profile with exactly the same name, address and phone as the site.
3. Add Google Analytics only after the cookie banner is wired to it.
4. Upload `email-signature-logo@2x.png` from the brand kit to `/email/` so the email signature logo loads.

## 8. Version history

- **v1.0 (23 Oct 2026):** first full site — home, 7 services, industries, Stacks, Innovation Lab, About, Careers, Contact, legal pages; Industries and Products drop-downs; Blog section.
- **v2.0 (24–25 Oct 2026):** everything in section 5 above.
- **v2.1 (1 Nov 2026):** SEO (section 7), real page addresses, contact details and footer matched to the brand kit (contact@ email, phone, Pune address). No personal name on the site for now; Terms link hidden from the footer until the legal review.

Published previews (private links on claude.ai):
- v1.0: https://claude.ai/artifact/XiQWiB9xEGbZrgz4TNtoH4
- v2.0: https://claude.ai/artifact/9VnUQ3uJVzvzF5c6k7MWLA
