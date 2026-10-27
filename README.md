# Raju Electrical Works website

Responsive React + Vite company website based on the supplied Raju Electrical Works brochure.

## Project structure

- `src/pages/` contains one component for each route.
- `src/components/` contains shared navigation, footer and page elements.
- `src/data/siteContent.js` contains shared service and company content.
- `src/App.jsx` maps routes to their page components.

## Run locally

1. Install Node.js LTS.
2. In this folder, run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the local URL shown by Vite.
4. Check production build with `npm run build`.

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify, import the repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy, then open the deployed site and submit the contact form to test it.

The contact form uses Netlify Forms attributes. After the first deploy, check Netlify's Forms area and enable form detection if prompted, then trigger a new deploy if required. Test actual submission and notifications before handing the site over. If form detection isn't working on the selected plan, use a managed form endpoint such as Formspree and configure it before launch.

## Before going live

- Replace stock Unsplash images with the client's own approved project photos. Images currently load from the internet.
- Confirm all phone numbers, email, address, company history, project count and ISO certification details with the client.
- Add the client's domain, favicon and final SEO titles/descriptions.
- Create and verify Google Search Console, submit a sitemap and check indexing.
- Test the website on phones, desktop and multiple browsers.
- Confirm WhatsApp link and contact form from the live domain.

## Notes

- No backend or database is needed for this brochure-style website.
- Project page intentionally describes sectors, not named client projects, because no verified case studies were supplied.
- The form displays a success state after a successful Netlify submission; locally, form submission will not work unless connected to a form provider.
"# rajuelec-sample" 
