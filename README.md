# Samuel Burke - CV Website

This is a simple, lightweight static HTML/CSS website hosting my professional CV online. 

It is designed with **zero client-side JavaScript** and styled using Tailwind CSS (compiled during the build phase) to deliver a fast, responsive, and print-ready reading experience. Hosting this online allows recruiters and hiring managers to quickly view my background without needing to keep a PDF file handy.

## Local Development

1. Install development dependencies:
   ```bash
   npm install
   ```
2. Start the development server (compiles Tailwind in watch mode and runs a live-reload server):
   ```bash
   npm run dev
   ```

## Production Build

To compile and minify the Tailwind CSS stylesheet for hosting:
```bash
npm run build
```
