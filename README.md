# Premium Tape Catalogue

A lightweight, responsive HTML/CSS mini-website for a tape product catalogue. February 2026 edition.

## Features

- **Header**: Brand name, tagline, and PDF download button
- **Product Grid**: 27 product cards with image, name, description, size, and price
- **PDF Export**: Download the full catalogue as PDF using html2pdf.js
- **Footer**: Contact info and fast delivery note
- **Responsive**: Mobile-first layout, works on all screen sizes

## Setup

### 1. Add Product Images

Copy your 27 product images into the `images/` folder and rename them:

- `product-01.png` through `product-27.png`

**Source path** (if images are in Cursor project storage):
```
C:\Users\Hari\.cursor\projects\c-Users-Hari-OneDrive-Documents-catalogue\assets\
```

**Target path**:
```
catalogue/images/
```

**Suggested mapping** (from plan):
1. product-01.png – Yellow Double-Sided Tape  
2. product-02.png – Red Double-Sided Adhesive Tape  
3. product-03.png – Double-Sided Foam Tape (Grey)  
4. product-04.png – Red Double-Sided Mounting Tape  
5. product-05.png – Paper Tape  
6. product-06.png – Dark Green Transparent Tape  
7. product-07.png – Double Side Foam Tape (Yellow)  
8. product-08.png – Anti-Slip Hazard Tape  
9. product-09.png – Multi-Color Utility Tape  
10. product-10.png – Beige Fabric Tape  
11. product-11.png – Anti-Slip Safety Tape (Black)  
12. product-12.png – White Double-Sided Tape  
13. product-13.png – Brown Packing Tape  
14. product-14.png – Clear Packing Tape  
15. product-15.png – Yellow/Black Hazard Tape  
16. product-16.png – Custom Branded Tapes  
17. product-17.png – Bubble Wrap  
18–27. product-18.png through product-27.png – Additional tape variants  

### 2. Customize (Optional)

- **Brand/Logo**: Edit `<h1 class="brand">` in `index.html`
- **Contact**: Update email and address in the footer section
- **Products**: Edit product names, descriptions, sizes, and prices in `index.html`

## Local Preview

**Important:** Opening `index.html` directly (double-click) can cause images not to load due to browser security. Use a local server instead:

**Option 1 – Double-click `start-server.bat`** (Windows)  
Then open http://localhost:8080 in your browser.

**Option 2 – Command line:**
```bash
npx serve .
# Then visit http://localhost:3000
```

**Folder structure:** Ensure images are in the `images/` subfolder:
```
catalogue/
├── index.html
├── images/           <-- images go here
│   ├── product-01.png
│   ├── product-02.png
│   └── ...
```

## Deployment

### Netlify

1. Drag and drop the `catalogue` folder onto [app.netlify.com/drop](https://app.netlify.com/drop)
2. Or connect a Git repo and set publish directory to `catalogue` (or root if repo is the catalogue)

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the catalogue folder
3. Or import the project at [vercel.com](https://vercel.com)

### GitHub Pages

1. Push the catalogue to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main** branch, root folder
4. Save – site will be at `https://<username>.github.io/<repo>/`

## File Structure

```
catalogue/
├── index.html      # Main page
├── styles.css      # Responsive styles
├── script.js       # PDF export logic
├── images/         # Product images (product-01.png to product-27.png)
└── README.md       # This file
```

## Tech Stack

- Vanilla HTML5, CSS3, JavaScript
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) (CDN)
- Google Fonts (DM Sans)
