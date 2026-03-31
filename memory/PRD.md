# BlissCare Landing Page - Product Requirements Document

## Project Overview
**Created:** December 2024
**Type:** High-Converting Landing Page
**Purpose:** Care and support service for elderly parents in Pune whose children live away

## Original Problem Statement
Create a high-converting landing page for BlissCare, a Pune-based service providing care and support for parents whose children live away from them.

**Target Audience:** Working professionals, NRIs, and individuals living in other cities/countries whose parents stay alone in Pune

**Tone:** Emotional, trustworthy, premium, and reassuring with simple but impactful language

## User Personas
1. **Primary:** Adult children (25-50 years) living abroad or in other cities, concerned about elderly parents in Pune
2. **Secondary:** Elderly parents (60+ years) who need daily assistance and companionship
3. **Decision Makers:** Family members responsible for parent care arrangements

## Core Requirements (Static)

### Design Specifications
- **Style:** Modern & Clean
- **Colors:** Soft blue/green/white (emerald-500, teal-600)
- **Imagery:** High-quality stock images (elderly care, families, trust-building)
- **Typography:** Clean, readable fonts
- **UI Components:** Shadcn UI components
- **Icons:** Lucide-react library (no AI emojis)

### Technical Stack
- **Frontend:** React with Vite
- **Styling:** Tailwind CSS
- **Components:** Shadcn UI
- **State Management:** React Hooks
- **Routing:** React Router DOM

### Key Features Required
1. ✅ Sticky Header with Navigation
2. ✅ Emotional Hero Section
3. ✅ Problem Section (pain points)
4. ✅ Solution Section (introduce BlissCare)
5. ✅ Services Section (3 categories)
6. ✅ How It Works (3 steps)
7. ✅ Trust Section (why choose us)
8. ✅ Testimonials/Story Section
9. ✅ Pricing Section (3 plans)
10. ✅ FAQ Section (accordion)
11. ✅ Contact/CTA Section
12. ✅ Footer with contact info
13. ✅ Live Chat Widget

## What's Been Implemented ✅

### Phase 1: Frontend with Mock Data (December 2024)
**Status:** Completed

#### Components Created:
1. **Header.jsx**
   - Sticky navigation bar
   - Logo and menu items (Home, Services, How It Works, Pricing, Contact)
   - Call Now CTA button
   - Mobile-responsive menu
   - Smooth scroll navigation

2. **Hero.jsx**
   - Emotional headline: "Your Parents Deserve Care, Even When You're Not There"
   - Trust indicators (500+ families, 4.9/5 rating)
   - Dual CTAs (Book Free Consultation, WhatsApp Us)
   - Background image with overlay

3. **Problem.jsx**
   - 4 key pain points displayed in grid
   - Icons for each problem
   - Emotional hook quote

4. **Solution.jsx**
   - Introduction to BlissCare
   - "We care when you can't be there" tagline
   - 4 key features with icons
   - Stats display (500+ families, 24/7)

5. **Services.jsx**
   - 3 service categories:
     * Daily Assistance (groceries, bills, errands)
     * Medical Care (doctor visits, medication)
     * Emotional Support (companionship, visits)
   - Each with image and feature list
   - Alternating layout for visual interest

6. **HowItWorks.jsx**
   - 3-step process:
     * Connect With Us
     * Meet Your Care Manager
     * Stay Connected
   - Visual step indicators
   - Call-to-action at bottom

7. **Trust.jsx**
   - 4 trust factors (Verified Staff, Real-Time Updates, Local Presence, 24/7 Support)
   - Stats section with gradient background
   - Hover animations

8. **Testimonials.jsx**
   - Emotional story section
   - 3 customer testimonials with images
   - 5-star ratings

9. **Pricing.jsx**
   - 3 pricing tiers:
     * Essential Care (₹4,999/month)
     * Complete Care (₹9,999/month) - Most Popular
     * Premium Care (₹18,999/month)
   - Feature lists for each plan
   - "Most Popular" badge
   - Get Started CTAs

10. **FAQ.jsx**
    - 6 frequently asked questions
    - Accordion component (shadcn)
    - Smooth open/close animations
    - Contact CTA at bottom

11. **CTA.jsx**
    - Contact form (name, phone, email, message)
    - Form submission with mock data
    - Success message display
    - Direct contact options (Phone, WhatsApp, Email)
    - Office information
    - Gradient background

12. **Footer.jsx**
    - Company info and tagline
    - Social media links
    - Quick navigation links
    - Contact information
    - Copyright notice

13. **LiveChat.jsx**
    - Floating chat button (bottom right)
    - Chat window with bot responses
    - Quick reply buttons
    - Context-aware responses
    - Animated entrance

14. **mock.js**
    - All mock data centralized
    - Company information
    - Services data
    - Testimonials
    - Pricing plans
    - FAQ content

#### Design Features Implemented:
- ✅ Modern gradient buttons (emerald-to-teal)
- ✅ Hover animations and micro-interactions
- ✅ Smooth scrolling navigation
- ✅ Responsive grid layouts
- ✅ Image overlays with gradients
- ✅ Trust indicators and social proof
- ✅ Clear visual hierarchy
- ✅ Generous whitespace
- ✅ Consistent color scheme
- ✅ Glass-morphism effects in chat widget
- ✅ Custom scrollbar styling

#### Images Integrated:
- Hero: Elderly care (hands holding)
- Services: Medical care, daily assistance, companionship
- Trust: Peaceful elderly imagery
- Testimonials: Customer photos

### User Interactions (Frontend Only):
- ✅ Smooth scroll navigation
- ✅ Mobile menu toggle
- ✅ Contact form submission (mock)
- ✅ Live chat interactions
- ✅ FAQ accordion expand/collapse
- ✅ CTA button clicks (WhatsApp, Phone)
- ✅ Form validation (required fields)
- ✅ Success message display

## Next Tasks (Prioritized Backlog)

### P0 - Critical (Backend Development)
1. **Database Setup**
   - Create MongoDB schemas for:
     * Contact inquiries
     * Newsletter subscriptions
     * Chat messages
     * User analytics

2. **API Development**
   - POST /api/contact - Save contact form submissions
   - POST /api/chat - Handle live chat messages
   - GET /api/testimonials - Fetch real testimonials
   - POST /api/newsletter - Newsletter subscription

3. **Email Integration**
   - Send email notifications for new contact inquiries
   - Auto-reply emails to users
   - Integration with email service (SendGrid/Nodemailer)

4. **WhatsApp Integration (Optional)**
   - Direct API integration for automated responses
   - Message templates

### P1 - High Priority (Enhancements)
1. **Analytics Integration**
   - Google Analytics
   - Track conversions
   - User behavior tracking
   - CTA click tracking

2. **Admin Dashboard**
   - View contact inquiries
   - Manage testimonials
   - Update pricing
   - Analytics dashboard

3. **SEO Optimization**
   - Meta tags
   - Open Graph tags
   - Structured data (JSON-LD)
   - Sitemap generation

### P2 - Medium Priority (Nice to Have)
1. **Blog Section**
   - Elderly care tips
   - Health articles
   - Customer success stories

2. **Video Testimonials**
   - Video player integration
   - Customer video uploads

3. **Multi-language Support**
   - Marathi language option
   - Language switcher

4. **Booking Calendar**
   - Schedule consultation calls
   - Calendar integration

## Technical Notes

### Environment Variables
- Frontend: `REACT_APP_BACKEND_URL` (configured)
- Backend: Will need email service credentials

### Mock Data Location
- `/app/frontend/src/mock.js` - Contains all static content

### Component Architecture
- Modular component design
- Named exports for components
- Default export for pages
- Centralized mock data
- Reusable shadcn UI components

## Success Metrics (To Be Tracked)
- Form submission rate
- WhatsApp click-through rate
- Time on page
- Scroll depth
- CTA conversion rate
- Chat widget engagement

## Notes
- Frontend is fully functional with mock data
- All interactive elements working (buttons, forms, chat, navigation)
- Responsive design for mobile, tablet, desktop
- No backend implementation yet - data is stored in browser only
- Images are from Unsplash/Pexels (royalty-free)
