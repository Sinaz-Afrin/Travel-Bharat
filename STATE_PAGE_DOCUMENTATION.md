# State Tourism Page - Component Documentation

## Overview

The **StatePage** is a reusable React component that displays comprehensive information about Indian states, featuring modern UI design with Tailwind CSS and smooth animations.

## Features

✅ **Dynamic Routing** - Route: `/state/:stateName`
✅ **Responsive Design** - Works on all devices
✅ **Modern UI** - Gradient backgrounds, smooth transitions, and hover effects
✅ **Loading States** - Beautiful loading spinner
✅ **Expandable Content** - "View More/Less" toggle for descriptions
✅ **Interactive Gallery** - Image carousel with thumbnails
✅ **Reusable Components** - Modular, easy to maintain and extend
✅ **SEO Friendly** - Proper semantic HTML structure

## Components

### 1. **StatePage** (`src/pages/StatePage.jsx`)
Main page component with all sections integrated.

**Props:**
- Route parameter: `stateName` (from URL)

**Sections:**
- Hero Section - Full-width banner with state name
- About Section - Description with toggle + image carousel
- Top Attractions - Grid of attractions cards
- Best Time to Visit - 4 seasonal cards with details
- Travel Tips - Grid of helpful tips with icons
- Gallery - Image carousel with navigation
- Call to Action - Engagement section

### 2. **SectionTitle** (`src/components/SectionTitle.jsx`)
Reusable section header component.

```jsx
<SectionTitle 
  title="Title"
  subtitle="Optional subtitle"
  centered={true}
/>
```

**Props:**
- `title` (string) - Section heading
- `subtitle` (string) - Optional subtitle
- `centered` (boolean) - Center alignment (default: true)

### 3. **AttractionCard** (`src/components/AttractionCard.jsx`)
Card component for displaying attractions.

**Props:**
- `attraction` (object) - Attraction data
  - `id`: unique identifier
  - `name`: attraction name
  - `image`: image URL
  - `description`: short description
  - `category`: attraction category

### 4. **BestTimeCard** (`src/components/BestTimeCard.jsx`)
Card component for seasonal information.

**Props:**
- `season` (object) - Season data
  - `season`: season name
  - `months`: month range
  - `description`: visit description
  - `icon`: emoji icon
  - `temperature`: temperature range

### 5. **TravelTipCard** (`src/components/TravelTipCard.jsx`)
Card component for travel tips.

**Props:**
- `tip` (object) - Tip data
  - `name`: tip description
  - `icon`: emoji icon

## Data Structure

### State Data Format (`src/data/statesData.js`)

```javascript
{
  id: "state-name",
  state: "State Name",
  description: "Short description",
  fullDescription: "Detailed description",
  heroImage: "URL to hero image",
  attractions: [
    {
      id: 1,
      name: "Attraction Name",
      image: "image URL",
      description: "Short description",
      category: "Heritage|Nature|Adventure|Beach"
    }
  ],
  bestTime: [
    {
      season: "Summer",
      months: "March - May",
      description: "Description",
      icon: "☀️",
      temperature: "28-35°C"
    }
  ],
  tips: [
    {
      name: "Tip description",
      icon: "🎯"
    }
  ],
  gallery: ["image URL 1", "image URL 2", ...]
}
```

## API Functions

### `getStateData(stateName)`
Fetch state data by name.

```javascript
import { getStateData } from '../services/api';

try {
  const state = await getStateData('tamil-nadu');
  console.log(state);
} catch (error) {
  console.error(error);
}
```

### `getAllStates()`
Fetch all states data.

```javascript
import { getAllStates } from '../services/api';

try {
  const states = await getAllStates();
  console.log(states);
} catch (error) {
  console.error(error);
}
```

## Routes

Add to `App.tsx`:

```jsx
import StatePage from './pages/StatePage.jsx';

<Route path="/state/:stateName" element={<StatePage />} />
```

## Usage Examples

### Access State Page
```
http://localhost:5173/state/tamil-nadu
http://localhost:5173/state/rajasthan
http://localhost:5173/state/kerala
```

### Add New State

1. Edit `src/data/statesData.js`
2. Add new state object to `statesData` array
3. State automatically available at `/state/:stateName`

Example:
```javascript
{
  id: "maharashtra",
  state: "Maharashtra",
  description: "...",
  fullDescription: "...",
  heroImage: "...",
  attractions: [...],
  bestTime: [...],
  tips: [...],
  gallery: [...]
}
```

## Styling

### Tailwind CSS Classes Used
- `gradient-to-r`, `gradient-to-t`, `gradient-to-b` - Gradient backgrounds
- `hover:shadow-2xl`, `hover:-translate-y-2` - Hover effects
- `rounded-xl`, `rounded-lg` - Border radius
- `group`, `group-hover:` - Group hover effects
- `animate-spin` - Loading spinner

### Custom Animations
- `animate-fade-in` - Fade in animation
- `animate-slide-in-left` - Slide from left
- `animate-slide-in-right` - Slide from right
- `animate-pulse-glow` - Pulsing glow effect

## Responsive Design

- **Mobile** (< 768px) - Single column layouts
- **Tablet** (768px - 1024px) - 2 column layouts
- **Desktop** (> 1024px) - 3-4 column layouts

## Features to Extend

### Planned Enhancements
- [ ] Backend API integration for dynamic state data
- [ ] State-specific events and festivals section
- [ ] Booking integration for hotels/tours
- [ ] User reviews and ratings
- [ ] Map integration showing state location
- [ ] Weather API integration
- [ ] Multi-language support
- [ ] Interactive map of attractions
- [ ] Itinerary builder

### Backend Integration

Replace local data with API calls in `src/services/api.js`:

```javascript
export const getStateData = async (stateName) => {
  const response = await apiClient.get(`/states/${stateName}`);
  return response.data.data;
};
```

## Performance Optimization

- Image URLs should be optimized for web
- Consider lazy loading for gallery images
- Use React.memo for subcomponents if needed
- Implement image optimization service

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Troubleshooting

### State Not Found
- Check URL parameter matches state ID or name exactly
- Verify state exists in `statesData.js`
- Check console for errors

### Images Not Loading
- Verify image URLs are valid and accessible
- Check for CORS issues
- Use HTTPS URLs in production

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.js` and `postcss.config.js`
- Rebuild with `npm run build`

## Future Roadmap

1. **Q2 2026** - Backend state data API
2. **Q2 2026** - User reviews & ratings
3. **Q3 2026** - Booking integration
4. **Q3 2026** - Mobile app version
5. **Q4 2026** - Advanced search & filters

## Contributing

When adding new states:
1. Research accurate information
2. Use high-quality images
3. Follow existing data structure
4. Test all sections render correctly
5. Ensure responsive design works
6. Check for accessibility (alt text, etc.)

---

**Last Updated:** March 26, 2026
**Component Version:** 1.0.0
**Status:** Production Ready ✅
