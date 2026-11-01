# BitData website — to-do list

Last updated: 1 November 2026. Tick items off (`[x]`) as you finish them.

## Now (this week)

- [ ] **Push and deploy** the `feature/dev` commits (`git push origin feature/dev`), then deploy to Cloudflare the way you normally do.
- [ ] **Google Search Console — verify:** after deploying, open https://bitdataanalytix.com/googlee8d94a406f665bff.html (it must show the one-line Google text), then click **Verify** in Search Console.
- [ ] **Google Search Console — sitemap:** Search Console › Indexing › Sitemaps › enter `sitemap.xml` › Submit. Status should become "Success" within a day or two.
- [ ] **Check the live files:** https://bitdataanalytix.com/robots.txt and https://bitdataanalytix.com/sitemap.xml must show text/XML, not the home page or an error.
- [ ] **www address:** in Cloudflare DNS add `www` (proxied), then a Redirect Rule: `www.bitdataanalytix.com/*` → `https://bitdataanalytix.com/${1}` (301). The brand kit prints www.bitdataanalytix.com, so it must work.
- [ ] **Mailboxes:** create contact@bitdataanalytix.com and ajinkya.yelai@bitdataanalytix.com (alias ajinkya.y@). The contact form sends to contact@.

## Soon (next 2–4 weeks)

- [ ] **Google Business Profile** (business.google.com): same name, address and phone as the website — BitData Analytix & Technologies, 1511B, Sadashiv Peth, Tilak Road, Pune 411030, +91 77700 66911.
- [ ] **Bing Webmaster Tools:** import the site from Google Search Console (one click) and submit the same sitemap.
- [ ] **LinkedIn company page:** add https://bitdataanalytix.com as the website.
- [ ] **Email signature logo:** upload `email-signature-logo@2x.png` from the brand kit (06_Stationery/Email_Signature) to `/email/` on the site, so the logo shows in emails.
- [ ] **Directory listings** with exactly the same name, address and phone: JustDial, IndiaMART, Sulekha, Clutch, GoodFirms.
- [ ] **First Google reviews** from clients or partners.

## Before showing the Terms page again

- [ ] **Lawyer review** of Terms & Conditions, Privacy Policy and Behavioral Advertising notice.
- [ ] **Fill the Terms placeholders:** payment split `[40]% / [40]% / [20]%`, late interest `[1.5]%`, warranty `[60] days`.
- [ ] Then remove the review note on the Terms page (`function legal(` in `index.html` — it only shows for "Terms & Conditions"), put `<a href="/terms">Terms &amp; Conditions</a>` back in the footer's Legal column, and add `/terms` back to `sitemap.xml`.

## Content and growth

- [ ] **Founder section** on the About page (photo and bio) — only when you are ready to show your name on the site. The Grievance Officer in the Privacy Policy is currently shown by role only; add a name later if your lawyer advises it.
- [ ] **Cookie banner partners:** update the list to the tools you actually install (e.g. Google Analytics) and connect the banner to them before adding any tracking.
- [ ] **Google Analytics** (GA4) — after the cookie banner is wired up.
- [ ] **Blog:** one useful article or case study a month (add to `var POSTS=[` in `index.html`, and its `/blog-<slug>` URL to `sitemap.xml`).
- [ ] **Translations:** native-speaker review of German, Japanese and Chinese text, especially legal pages.
- [ ] **GSTIN / company registration:** when available, add to the letterhead (brand kit) and the website footer/legal pages.
- [ ] **Trademark and copyright filings** — see the "BitData Logo – Copyright & Trademark Filing Pack" doc.

## Check every month

- [ ] Search Console: Pages (indexed / not indexed), Performance (search terms, clicks), any errors.
- [ ] Keep `sitemap.xml` up to date when pages are added or removed.
