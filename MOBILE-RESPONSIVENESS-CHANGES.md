# Mobile Responsiveness – Tailwind Class Changes Summary

## Files Updated

### Global / shared
- **lib/constants.ts** – Section padding constant
- **components/AnimatedSection.tsx** – Section title typography and margin
- **components/FeatureGrid.tsx** – Card padding
- **components/StatsCounterSection.tsx** – Section title and stat number typography
- **components/Contact.tsx** – Heading, form card padding, submit button touch target
- **components/CaseStudySection.tsx** – Card padding
- **components/CertificationsSection.tsx** – Section padding, heading, expand button touch target
- **components/DownloadCatalogSection.tsx** – Heading typography, CTA link touch target
- **components/ClientLogosSection.tsx** – Heading margin, grid gap
- **components/CTASection.tsx** – Heading typography, CTA links touch targets
- **components/TestimonialSection.tsx** – Title margin, heading typography, blockquote padding
- **components/CorporateHeroSlider.tsx** – Hero container padding, H1/description typography, CTA/dots touch targets
- **components/Navbar.tsx** – Search and hamburger touch targets, desktop CTA touch target, mobile menu item padding and touch targets
- **components/SearchModal.tsx** – Close button touch target
- **components/PremiumHero.tsx** – H1 typography, CTA links touch targets

### Homepage
- **app/page.tsx** – Industries grid (explicit grid-cols-1), industry card padding

### Products
- **app/products/page.tsx** – Header padding and typography, section padding
- **app/products/DomainLayout.tsx** – Header padding and typography, section padding
- **app/products/[domain]/[child]/page.tsx** – Header typography, section padding, grid (grid-cols-1 + gap)
- **app/products/process-cooling/page.tsx** – Section padding, H1 typography

### Industries
- **app/industries/page.tsx** – Section padding and container padding, heading typography and margin, grid gap, card content padding
- **app/industries/IndustryContent.tsx** – Fallback header padding, all section padding (py-24 → responsive), hero H1 typography, CTA buttons touch targets

### Other
- **app/products/geophysical-research/proton-precession-systems/page.tsx** – All section padding (py-24 → responsive)

### Components with only section padding (via constant)
- **About.tsx**, **AdvancedMeasurement.tsx**, **WhyChooseUs.tsx**, **CTA.tsx**, **Products.tsx**, **CoreDomains.tsx**, **Industries.tsx**, **Certifications.tsx** – Replaced hardcoded `py-28` with `py-14 sm:py-16 md:py-24`.

---

## Exact Tailwind Class Changes

### 1. Vertical padding (excessive → mobile-first)
- **lib/constants.ts**: `SECTION_PADDING`: `py-24 md:py-28` → `py-14 sm:py-16 md:py-24`
- **Hardcoded sections**: `py-24` → `py-14 sm:py-16 md:py-24`; `py-28` → `py-14 sm:py-16 md:py-24`; `py-24 md:py-28` → `py-14 sm:py-16 md:py-24`; `py-24 md:py-32` → `py-14 sm:py-16 md:py-24 lg:py-32`; `py-20 md:py-24` → `py-14 sm:py-16 md:py-20 lg:py-24`
- **Header sections**: `pt-32 pb-16` / `pt-32 pb-20` → `pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16` or `pb-14 sm:pb-20`

### 2. Grids (mobile-first)
- **app/page.tsx**: `grid md:grid-cols-2 lg:grid-cols-3 gap-8` → `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **app/products/[domain]/[child]/page.tsx**: `grid lg:grid-cols-[...] gap-12` → `grid grid-cols-1 lg:grid-cols-[...] gap-8 sm:gap-12`
- **app/industries/page.tsx**: `gap-10` → `gap-8 sm:gap-10`

### 3. Card / container padding
- **FeatureGrid.tsx**: `p-10` → `p-6 sm:p-8 md:p-10`
- **Contact.tsx**: form container `p-10` → `p-6 sm:p-8 md:p-10`
- **CaseStudySection.tsx**: `p-8 md:p-12` → `p-6 sm:p-8 md:p-12`
- **app/page.tsx** (industry cards): `p-8` → `p-6 sm:p-8 md:p-8`
- **app/industries/page.tsx** (industry cards): `p-6` → `p-4 sm:p-6`
- **TestimonialSection.tsx**: blockquote `p-8` → `p-6 sm:p-8`
- **ClientLogosSection.tsx**: `gap-10` → `gap-6 sm:gap-8 md:gap-10`, `mb-12` → `mb-8 sm:mb-10 md:mb-12`

### 4. Typography (mobile-first)
- **Hero H1**: `text-5xl md:text-6xl` → `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` (CorporateHeroSlider)
- **Hero description**: `text-lg md:text-xl` → `text-base sm:text-lg md:text-xl`
- **Industry hero H1**: `text-4xl md:text-5xl lg:text-6xl` → `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` (IndustryContent)
- **Fallback industry H1**: `text-4xl md:text-5xl` → `text-2xl sm:text-3xl md:text-5xl`
- **Section titles**: `text-4xl md:text-5xl` → `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (products, DomainLayout, process-cooling); `text-3xl md:text-4xl` → `text-2xl sm:text-3xl md:text-4xl` (CertificationsSection, Contact, CTASection, TestimonialSection); `text-2xl md:text-3xl lg:text-4xl` → `text-xl sm:text-2xl md:text-3xl lg:text-4xl` (AnimatedSection)
- **Stats numbers**: `text-5xl` → `text-2xl sm:text-3xl md:text-5xl` (StatsCounterSection)
- **Stats section title**: `text-2xl md:text-3xl lg:text-4xl` → `text-xl sm:text-2xl md:text-3xl lg:text-4xl`
- **DownloadCatalogSection**: `text-2xl md:text-3xl` → `text-xl sm:text-2xl md:text-3xl`
- **PremiumHero**: `text-5xl md:text-7xl` → `text-3xl sm:text-4xl md:text-5xl lg:text-7xl`
- **industries page**: `text-4xl` → `text-3xl sm:text-4xl md:text-4xl`, `mb-16` → `mb-12 sm:mb-16`
- **AnimatedSection / TestimonialSection**: `mb-16` → `mb-10 sm:mb-12 md:mb-16`

### 5. Buttons / links (touch targets)
- **CorporateHeroSlider**: Primary and secondary CTAs: added `min-h-[44px]`; dots: wrapper `min-h-[44px] min-w-[44px] flex items-center justify-center`, inner span for visual
- **Navbar**: Search button `min-h-[44px] min-w-[44px] flex items-center justify-center`; desktop “Get in Touch” `min-h-[44px] px-5 py-3`; hamburger `min-h-[44px] min-w-[44px] flex items-center justify-center`; mobile menu links `flex items-center min-h-[44px] py-4 px-1`; mobile “Get in Touch” `min-h-[44px] px-5 py-3`
- **Contact.tsx**: Submit button `min-h-[44px]`
- **CertificationsSection.tsx**: “View Certification” button `min-h-[44px] px-5 py-3`
- **DownloadCatalogSection.tsx**: Catalog link `min-h-[44px]`
- **CTASection.tsx**: Primary and secondary CTAs `min-h-[44px] px-6 sm:px-8 py-3 sm:py-4`
- **PremiumHero.tsx**: Both CTAs `min-h-[44px] px-6 sm:px-8 py-3 sm:py-4`
- **IndustryContent.tsx**: All hero CTAs (green-600, emerald-600, border white) `min-h-[44px]`
- **SearchModal.tsx**: Close button `min-h-[44px] min-w-[44px] flex items-center justify-center`

### 6. Hero section spacing
- **CorporateHeroSlider.tsx**: Content container `px-8 md:px-16 lg:px-24` → `px-4 sm:px-6 md:px-12`

### 7. Navbar mobile
- Mobile menu list: `gap-2` → `gap-0`; link items: `block py-3` → `flex items-center min-h-[44px] py-4 px-1`; mobile CTA: `px-5 py-2.5` → `min-h-[44px] px-5 py-3` (see touch targets above).

### 8. Containers
- **CONTAINER_CLASS** in constants already `px-4 sm:px-6 lg:px-8` – unchanged.
- **app/industries/page.tsx**: Section container `px-6 py-24` → `px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-24`.

### 9. Other
- **CertificationsSection**: Section `py-24` → `py-14 sm:py-16 md:py-24` (not using constant).
- **geophysical-research/proton-precession-systems/page.tsx**: All six section classes `py-24` → `py-14 sm:py-16 md:py-24`.
- **IndustryContent**: Fallback header `pt-32 pb-20` → `pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20`; all section `py-24` → `py-14 sm:py-16 md:py-24`.
- **Products page**: Intro text `text-lg` → `text-base sm:text-lg`; **DomainLayout** and **[domain]/[child]**: intro `text-lg` → `text-base sm:text-lg` where applicable.

---

## Summary of Mobile Improvements

1. **Reduced vertical padding on small screens** – Sections use `py-14 sm:py-16 md:py-24` (or equivalent) so mobile has less vertical bulk while keeping desktop rhythm.
2. **Mobile-first grids** – Explicit `grid-cols-1` where needed; product/industry grids stack on mobile and add columns at `md`/`lg`.
3. **Smaller card padding on mobile** – Cards and forms use `p-6 sm:p-8 md:p-10` (or similar) so content doesn’t feel cramped on narrow viewports.
4. **Scaled typography** – Headlines and stats use multi-step scales (e.g. `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`) so they’re readable on phones without dominating the screen.
5. **44px touch targets** – CTAs, nav links, hero buttons, slider dots, search close, and certification toggle meet a minimum ~44px height/width for touch.
6. **Hero spacing** – Hero content uses `px-4 sm:px-6 md:px-12` and responsive type so layout and text wrap correctly on mobile.
7. **Navbar mobile** – Mobile menu links and “Get in Touch” have increased padding and min height for tap targets; hamburger and search icons sit in 44×44px hit areas.
8. **Consistent container padding** – Industries and other pages use `px-4 sm:px-6 lg:px-8` (or the shared constant) for consistent mobile margins.
9. **No animation logic changed** – Only Tailwind classes were updated; Framer Motion and other behavior are unchanged.

No logic, functionality, images, or routing were modified. All changes are Tailwind-only for spacing, layout, typography, and responsive behavior.
