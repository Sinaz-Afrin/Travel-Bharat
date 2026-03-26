# State Tourism Page - Quick Start Guide

## 🚀 Getting Started

### 1. View Existing States
Navigate to any of these URLs:
- `http://localhost:5173/state/tamil-nadu`
- `http://localhost:5173/state/rajasthan`
- `http://localhost:5173/state/kerala`

### 2. Add a New State

**Step 1:** Edit `src/data/statesData.js`

```javascript
export const statesData = [
  // ... existing states ...
  
  {
    id: "maharashtra",                    // URL-friendly ID (lowercase with hyphens)
    state: "Maharashtra",                 // Display name
    description: "Short one-liner",       // 1-2 sentence description
    fullDescription: "Detailed...",       // 3-5 sentence detailed description
    heroImage: "https://...",             // Hero banner image URL
    attractions: [
      {
        id: 1,
        name: "Attraction Name",
        image: "https://...",
        description: "Short description",
        category: "Heritage"              // Heritage, Nature, Adventure, Beach
      },
      // Add 4 attractions
    ],
    bestTime: [
      {
        season: "Summer",
        months: "March - May",
        description: "...",
        icon: "☀️",
        temperature: "30-40°C"
      },
      // Add 4 seasons: Summer, Monsoon, Autumn, Winter
    ],
    tips: [
      { name: "Tip text", icon: "🎯" },
      // Add 8 tips
    ],
    gallery: [
      "https://image1.jpg",
      "https://image2.jpg",
      // Add 6+ images
    ]
  }
];
```

**Step 2:** Access via URL
```
http://localhost:5173/state/maharashtra
```

## 📊 Data Structure Details

### Attractions
```javascript
{
  id: 1,
  name: "Name",
  image: "URL",
  description: "Short (1-2 lines)",
  category: "Heritage" | "Nature" | "Adventure" | "Beach"
}
```

### Best Time Cards
```javascript
{
  season: "Summer",
  months: "March - May",
  description: "Why visit during this season",
  icon: "☀️",
  temperature: "28-35°C"
}
```

### Travel Tips
```javascript
{
  name: "Tip text",
  icon: "🎯"
}
```

## 🎨 Customization

### Change Primary Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#D97706',      // Orange
      secondary: '#1F2937',    // Dark gray
      accent: '#F59E0B'        // Yellow
    }
  }
}
```

### Add More Sections
Edit `src/pages/StatePage.jsx` and add new sections within the main component.

### Modify Component Styling
Each component (AttractionCard, BestTimeCard, etc.) uses Tailwind classes. 
Edit directly in the component files under `src/components/`.

## 🖼️ Image URLs

Use these sources for images:
- **Unsplash:** `https://images.unsplash.com/photo-[ID]?w=400&h=300&fit=crop`
- **Pexels:** `https://images.pexels.com/photos/[ID]/pexels-photo-[ID].jpeg`
- **Pixabay:** High-resolution free images
- **Local:** Upload to `src/images/` and import

Image Recommendations:
- Hero images: 1200x600px minimum
- Card images: 400x300px
- Gallery images: 400x400px
- All in WebP or optimized JPEG

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (single column)
- **Tablet:** 768px - 1024px (2 columns)
- **Desktop:** > 1024px (3-4 columns)

All components automatically adapt. Test using browser DevTools.

## 🔧 Component Props

### SectionTitle
```jsx
<SectionTitle 
  title="Main Title"
  subtitle="Optional subtitle"
  centered={true}  // or false
/>
```

### AttractionCard
```jsx
<AttractionCard attraction={attractionObject} />
```

### BestTimeCard
```jsx
<BestTimeCard season={seasonObject} />
```

### TravelTipCard
```jsx
<TravelTipCard tip={tipObject} />
```

## ⚡ Performance Tips

1. **Image Optimization**
   - Use HTTPS URLs
   - Compress images before uploading
   - Use WebP format when possible

2. **Code Splitting**
   - Components are automatically code-split
   - No additional configuration needed

3. **Lazy Loading**
   - Gallery images load on demand
   - Thumbnails load after main image

## 🧪 Testing

### Check Build
```bash
npm run build
```

### Check for Errors
```bash
npm run lint
```

### Dev Mode
```bash
npm run dev
```

## 🐛 Common Issues

### State Not Found
- Check URL parameter matches state ID exactly
- State IDs are lowercase with hyphens (e.g., tamil-nadu)
- Verify state exists in statesData.js

### Images Not Showing
- Verify URLs are complete and valid
- Check browser console for CORS errors
- Use HTTPS URLs only in production

### Styling Issues
- Rebuild CSS: `npm run build`
- Check Tailwind is in content paths in `tailwind.config.js`
- No custom CSS needed - use Tailwind utilities

### Page Not Routing
- Verify route in `App.tsx`: `/state/:stateName`
- Check StatePage is imported
- Clear browser cache

## 📚 File Structure

```
src/
├── pages/
│   └── StatePage.jsx           # Main page component
├── components/
│   ├── SectionTitle.jsx        # Section header
│   ├── AttractionCard.jsx      # Attraction display
│   ├── BestTimeCard.jsx        # Season card
│   └── TravelTipCard.jsx       # Tip card
├── data/
│   └── statesData.js           # All state data
└── services/
    └── api.js                  # API functions (includes state functions)
```

## 🔄 Updating Existing States

Simply edit the state object in `src/data/statesData.js` and save. 
Changes reflect immediately in dev mode.

```javascript
{
  id: "tamil-nadu",
  state: "Tamil Nadu",
  description: "Updated...",  // ← Edit any field
  // ...
}
```

## 🌐 Backend Integration (Future)

Replace local data with API calls:

```javascript
// In src/services/api.js
export const getStateData = async (stateName) => {
  const response = await apiClient.get(`/states/${stateName}`);
  return response.data.data;
};
```

## 📋 Checklist for New States

- [ ] State ID is lowercase with hyphens
- [ ] High-quality hero image (1200x600px)
- [ ] 4 attractions with images and descriptions
- [ ] 4 seasonal recommendations with icons
- [ ] 8 travel tips with emoji icons
- [ ] 6+ gallery images (400x400px)
- [ ] Description under 300 characters
- [ ] Full description under 500 characters
- [ ] Test URL: `/state/{state-id}`
- [ ] All images load correctly
- [ ] Responsive design looks good on mobile

## ❓ FAQ

**Q: Can I add more than 4 attractions?**
A: Yes, modify the grid in StatePage.jsx: `lg:grid-cols-4` → `lg:grid-cols-5`

**Q: How do I change card colors?**
A: Edit colors in `tailwind.config.js` theme section

**Q: Can I add animations?**
A: Yes, add Tailwind animation classes to components or custom animations in `src/index.css`

**Q: How do I deploy?**
A: Run `npm run build` and deploy the `dist/` folder

---

**Version:** 1.0.0
**Last Updated:** March 26, 2026
