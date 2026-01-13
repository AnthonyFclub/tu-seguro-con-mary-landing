# Tú Seguro con Mary - Professional Landing Page

This is a professional, bilingual (English/Spanish) landing page built for Mary Carmen Chamorro's insurance agency.

## Tech Stack
- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **I18n**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Tailwind CSS transitions and `framer-motion` (optional integration)

## Features
- ✅ Fully Bilingual (English / Spanish)
- ✅ Modern, Professional Design (Blue & Cream palette)
- ✅ Responsive Design (Mobile-first)
- ✅ Sticky Navigation with Language Switcher
- ✅ High-Trust Testimonials (Blue stars)
- ✅ Direct WhatsApp/Email Contact Integration
- ✅ SEO Optimized Metadata

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open the application**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Placeholders to Update
- **Hero Image**: Replace the placeholder in `components/Hero.tsx` with a professional 600x800px portrait of Mary Carmen.
- **Video**: Provide the YouTube/Vimeo embed code in `messages/en.json` and `messages/es.json`.
- **Contact Details**: Update phone, address, and license number in `messages/en.json` and `messages/es.json`.
- **Social Links**: Update social media URLs in `components/Contact.tsx`.

## Project Structure
```
/app/[locale]     - Root layout and main page
/components        - Reusable UI sections
/messages          - Translation dictionaries
/lib/utils.ts      - Tailwind utility functions
i18n.ts            - next-intl configuration
middleware.ts      - Locale routing middleware
```

## Important Note
⚠️ **DO NOT USE YELLOW/GOLD** in any UI element as per client requirement. All accents should use the professional blue palette or specified success colors (Green/Pink).
