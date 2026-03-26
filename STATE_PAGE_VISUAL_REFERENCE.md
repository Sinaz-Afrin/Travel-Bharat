# State Tourism Page - Visual Reference & Architecture

## 📐 Page Layout Architecture

```
┌─────────────────────────────────────────────────────────┐
│                       NAVBAR                            │
│  Logo                 Destinations    Regions  Contact  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                         │
│              HERO SECTION (Full Width)                 │
│           Hero Image + Gradient Overlay                │
│                                                         │
│  ╔═════════════════════════════════════════════════╗  │
│  ║         STATE NAME                              ║  │
│  ║    Experience the Magic and Heritage            ║  │
│  ╚═════════════════════════════════════════════════╝  │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│           ABOUT SECTION (2 Columns)                    │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐           │
│  │  About Title     │  │  Image Carousel  │           │
│  │                  │  │  With Category   │           │
│  │  Description     │  │  Badge           │           │
│  │                  │  │                  │           │
│  │  [View More ▼]   │  │  [  Image  ]     │           │
│  └──────────────────┘  └──────────────────┘           │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│        TOP ATTRACTIONS SECTION (4 Columns)             │
│                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌──┐ │
│  │   Card 1    │ │   Card 2    │ │   Card 3    │ │C4││
│  │  ┌─────┐    │ │  ┌─────┐    │ │  ┌─────┐    │ │┌─┤
│  │  │Img  │    │ │  │Img  │    │ │  │Img  │    │ ││I││
│  │  └─────┘    │ │  └─────┘    │ │  └─────┘    │ │└─┤
│  │  Title      │ │  Title      │ │  Title      │ │T││
│  │  Category   │ │  Category   │ │  Category   │ │C││
│  │  Desc...    │ │  Desc...    │ │  Desc...    │ │D││
│  │  [Explore]  │ │  [Explore]  │ │  [Explore]  │ │E││
│  └─────────────┘ └─────────────┘ └─────────────┘ └──┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│     BEST TIME TO VISIT SECTION (4 Columns)             │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ ┌──────┐ │ │ ┌──────┐ │ │ ┌──────┐ │ │ ┌──────┐ │  │
│  │ │  ☀️   │ │ │  🌧️   │ │ │  🍂   │ │ │  ❄️   │ │  │
│  │ └──────┘ │ │ └──────┘ │ │ └──────┘ │ │ └──────┘ │  │
│  │ Summer   │ │ Monsoon  │ │ Autumn   │ │ Winter   │  │
│  │ Mar-May  │ │ Jun-Sep  │ │ Oct-Nov  │ │ Dec-Feb  │  │
│  │ 28-35°C  │ │ 20-28°C  │ │ 22-30°C  │ │ 15-28°C  │  │
│  │ Desc...  │ │ Desc...  │ │ Desc...  │ │ Desc...  │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│        TRAVEL TIPS SECTION (2 Columns Grid)            │
│                                                         │
│  ┌──────────────────────────┐ ┌──────────────────────┐ │
│  │ 🎯 Tip 1                 │ │ 🗣️ Tip 2              │ │
│  └──────────────────────────┘ └──────────────────────┘ │
│  ┌──────────────────────────┐ ┌──────────────────────┐ │
│  │ 🍜 Tip 3                 │ │ 🗺️ Tip 4              │ │
│  └──────────────────────────┘ └──────────────────────┘ │
│  ┌──────────────────────────┐ ┌──────────────────────┐ │
│  │ 💵 Tip 5                 │ │ 📱 Tip 6              │ │
│  └──────────────────────────┘ └──────────────────────┘ │
│  ┌──────────────────────────┐ ┌──────────────────────┐ │
│  │ 🏨 Tip 7                 │ │ 👗 Tip 8              │ │
│  └──────────────────────────┘ └──────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│          GALLERY SECTION (Dark Background)             │
│                                                         │
│  ┌────────────────────────────────────────────────┐   │
│  │                                                │   │
│  │              [  Large Image  ]                │   │
│  │         ◄  (with overlay controls)  ►         │   │
│  │                  1 / 6                        │   │
│  │                                                │   │
│  └────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐  │
│  │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐           │  │
│  │ │ 1 │ │ 2 │ │ 3 │ │ 4 │ │ 5 │ │ 6 │    ☰      │  │
│  │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘           │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│      CALL TO ACTION SECTION (Orange Gradient)          │
│                                                         │
│              Ready to Explore [State]?                 │
│                                                         │
│   [Plan Your Trip]    [Contact Us]                     │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                       FOOTER                            │
│  Company  |  Destinations  |  Categories  |  Contact   │
└─────────────────────────────────────────────────────────┘
```

## 🎨 Component Hierarchy

```
StatePage (Main Component)
├── Navbar (imported)
├── HeroSection
│   ├── Image
│   └── Text Overlay
├── AboutSection
│   ├── Left Column
│   │   ├── SectionTitle
│   │   └── DescriptionBox
│   │       ├── Text
│   │       └── ViewMore/Less Button
│   └── Right Column
│       └── Image
├── AttractionsSection
│   ├── SectionTitle
│   └── Grid (4 columns)
│       └── AttractionCard × 4
│           ├── Image
│           ├── Category Badge
│           ├── Title
│           ├── Description
│           └── Explore Button
├── BestTimeSection
│   ├── SectionTitle
│   └── Grid (4 columns)
│       └── BestTimeCard × 4
│           ├── Emoji Icon
│           ├── Season Name
│           ├── Months
│           ├── Temperature
│           └── Description
├── TravelTipsSection
│   ├── SectionTitle
│   └── Grid (2 columns)
│       └── TravelTipCard × 8
│           ├── Emoji Icon
│           └── Tip Text
├── GallerySection
│   ├── SectionTitle
│   ├── Main Gallery
│   │   ├── Current Image
│   │   ├── Left Arrow Button
│   │   ├── Right Arrow Button
│   │   └── Image Counter
│   └── Thumbnail Strip
│       └── Thumbnail × 6+
├── CallToActionSection
│   ├── Heading
│   ├── Description
│   └── Action Buttons
├── Footer (imported)
```

## 🎨 Responsive Grid Breakpoints

### Mobile (< 768px)
```
Attractions:      1 column
Best Time:        1 column
Travel Tips:      1 column
Gallery:          Full width
```

### Tablet (768px - 1024px)
```
Attractions:      2 columns
Best Time:        2 columns
Travel Tips:      2 columns
Gallery:          Full width
```

### Desktop (> 1024px)
```
Attractions:      4 columns
Best Time:        4 columns
Travel Tips:      2 columns (max width)
Gallery:          Full width
```

## 🎨 Color & Typography System

### Colors
```
Primary:          #D97706 (Orange)
Secondary:        #1F2937 (Dark Gray)
Accent:           #F59E0B (Yellow/Gold)
Background:       #FFFFFF (White)
Alt Background:   #F9FAFB (Light Gray)
Dark Theme:       #111827 (Charcoal)
```

### Typography
```
Hero Title:       5xl bold (48px)
Section Title:    4xl bold (36px)
Card Title:       xl bold (20px)
Subtitle:         lg (18px)
Body Text:        base (16px)
Small Text:       sm (14px)
Tiny Text:        xs (12px)
```

### Spacing System
```
Extra Small:      4px (0.25rem)
Small:            8px (0.5rem)
Medium:           16px (1rem)
Large:            32px (2rem)
Extra Large:      48px (3rem)
Section Padding:  16-24px horizontal, 16-24px vertical
```

## 🎭 Hover Effects

### AttractionCard
```
Default:    Box shadow, normal scale
Hover:      
- Image scales 110%
- Cards lifts up (-2px)
- Shadow deepens
- Gradient overlay appears
- Text color changes to primary
```

### SectionTitle
```
Default:    Static underline bar
Hover:      Gradient animation (optional)
```

### BestTimeCard
```
Default:    Subtle shadow
Hover:
- Lifts up (-8px)
- Shadow increases
- Icon scales 120%
- Background color shifts
```

### TravelTipCard
```
Default:    Light gradient background
Hover:
- Background gradient deepens
- Icon scales 125%
- Border highlights
- Shadow increases
```

## ⚙️ Component Props Reference

```jsx
// SectionTitle
<SectionTitle 
  title="Main Title"           // string (required)
  subtitle="Subtitle"           // string (optional)
  centered={true}              // boolean (default: true)
/>

// AttractionCard
<AttractionCard 
  attraction={{
    id: 1,
    name: "Name",
    image: "URL",
    description: "Text",
    category: "Type"
  }}
/>

// BestTimeCard
<BestTimeCard 
  season={{
    season: "Summer",
    months: "Mar-May",
    description: "Text",
    icon: "☀️",
    temperature: "28-35°C"
  }}
/>

// TravelTipCard
<TravelTipCard 
  tip={{
    name: "Tip text",
    icon: "🎯"
  }}
/>
```

## 📊 Data Flow

```
App.tsx
  ↓
  StatePage (/state/:stateName)
  ├── Read URL param (stateName)
  ├── Call getStateByName(stateName) from statesData.js
  ├── If state found: Render all sections
  ├── If state not found: Show error message
  └── Uses: {state.attractions, state.bestTime, state.tips, state.gallery}
```

## 🔄 State Management

```
StatePage State:
├── isExpanded: boolean     (About section expand/collapse)
├── galleryIndex: number    (Current gallery image index)
├── loading: boolean        (Loading state)
└── state: object          (From statesData)
```

## 🎬 Animation Timeline

```javascript
// Page Load
Page Entry
├── Hero Fade In: 0.8s
├── Content Fade In: 0.6s-1.2s (staggered)
└── Cards Pop In: 0.3s per card

// Hover
Gallery Fade: 0.3s
Scale Effects: 0.3s-0.5s
Shadow Smooth: 0.3s

// Gallery Navigation
Image Fade: 0.5s
Slide Transition: 0.3s
Counter Update: Instant
```

## 🖼️ Image Specifications

| Image Type | Dimensions | Format | Size |
|-----------|-----------|--------|------|
| Hero Image | 1200×600px | WebP/JPEG | < 200KB |
| Attraction Card | 400×300px | WebP/JPEG | < 50KB |
| Best Time Icon | Emoji | Text | - |
| Gallery Image | 400×400px | WebP/JPEG | < 75KB |
| Thumbnail | 100×100px | WebP/JPEG | < 20KB |

## 📱 Mobile Optimization

```
Stack Order:
1. Navbar (sticky)
2. Hero (full viewport height)
3. About (stacked vertically)
4. Attractions (single column, scrollable)
5. Best Time (single column)
6. Travel Tips (single column)
7. Gallery (full width)
8. CTA (stacked)
9. Footer
```

## ♿ Accessibility Features

```
✓ Semantic HTML (nav, section, article)
✓ Alt text on all images
✓ Proper heading hierarchy (h1, h2, h3)
✓ Button focus states
✓ Keyboard navigation support
✓ Color contrast WCAG AA compliant
✓ Responsive text sizes
✓ Touch-friendly button sizes (44px minimum)
```

---

**Reference Document:** March 26, 2026
**Version:** 1.0.0
