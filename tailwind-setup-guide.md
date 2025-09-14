# Tailwind CSS Setup Guide

Tailwind CSS has been successfully integrated into your project with custom theme configuration and RTL support.

## What's Been Set Up

### 1. **Dependencies Installed**
- `tailwindcss` - Core Tailwind CSS framework
- `postcss` - CSS processing
- `autoprefixer` - Automatic vendor prefixing

### 2. **Configuration Files**

#### `tailwind.config.js`
- Custom color palette matching your existing theme
- Custom font families (Lufga fonts)
- Extended spacing and animations
- Content paths for all JS/JSX files

#### `postcss.config.js`
- PostCSS configuration for Tailwind processing
- Autoprefixer integration

#### `src/tailwind.css`
- Tailwind directives (@tailwind base, components, utilities)
- Custom component classes
- RTL support utilities
- Custom animations

### 3. **Custom Theme Configuration**

```javascript
// Your existing colors are now available as Tailwind classes
colors: {
  primary: '#E80f88',      // bg-primary, text-primary, border-primary
  'down-color': '#ff3440', // bg-down-color, text-down-color
  'up-color': '#0f0',      // bg-up-color, text-up-color
  'danger-color': '#f73131', // bg-danger-color, text-danger-color
  'white-color': '#fff',   // bg-white-color, text-white-color
  'card-color': '#2b2b2b', // bg-card-color, text-card-color
  'gray-color': '#808089', // bg-gray-color, text-gray-color
}

// Your custom fonts
fontFamily: {
  'lufga-bold': ['LufgaBold', 'sans-serif'],     // font-lufga-bold
  'lufga-light': ['LufgaLight', 'sans-serif'],   // font-lufga-light
  'lufga-medium': ['LufgaMedium', 'sans-serif'], // font-lufga-medium
  'lufga-regular': ['LufgaRegular', 'sans-serif'], // font-lufga-regular
}
```

## How to Use

### 1. **Basic Utility Classes**
```jsx
<div className="bg-primary text-white p-4 rounded-lg shadow-md">
  <h1 className="text-2xl font-lufga-bold mb-2">Title</h1>
  <p className="text-gray-600">Description</p>
</div>
```

### 2. **Custom Component Classes**
```jsx
// Pre-built component classes
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<input className="input-field" placeholder="Enter text" />
<div className="card">Card content</div>
<a className="nav-link">Navigation Link</a>
```

### 3. **RTL Support**
```jsx
// Automatic RTL with rtl: prefix
<div className="flex gap-4 rtl:flex-row-reverse">
  <span>1</span>
  <span>2</span>
  <span>3</span>
</div>

// Manual RTL classes
<div className="rtl">RTL content</div>
<div className="ltr">LTR content</div>
```

### 4. **Responsive Design**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="col-span-1 md:col-span-2">Content</div>
</div>
```

### 5. **Animations**
```jsx
<div className="animate-fade-in">Fade in animation</div>
<div className="animate-slide-in">Slide in animation</div>
<div className="hover:scale-105 transition-transform duration-200">Hover effect</div>
```

## Available Custom Classes

### **Button Classes**
- `.btn-primary` - Primary button with your brand color
- `.btn-secondary` - Secondary button with gray styling

### **Form Classes**
- `.input-field` - Styled input field with focus states

### **Layout Classes**
- `.card` - Card container with shadow and border
- `.nav-link` - Navigation link styling
- `.nav-link-active` - Active navigation link

### **RTL Utilities**
- `.rtl` - Right-to-left direction
- `.ltr` - Left-to-right direction
- `.rtl:flex-row-reverse` - Reverse flex direction in RTL

### **Font Classes**
- `.font-lufga-bold` - Bold Lufga font
- `.font-lufga-light` - Light Lufga font
- `.font-lufga-medium` - Medium Lufga font
- `.font-lufga-regular` - Regular Lufga font

## Integration with i18n

Tailwind works seamlessly with your i18n setup:

```jsx
import { useI18n } from '../hooks/useI18n';

const MyComponent = () => {
  const { t, isRTL } = useI18n('common');
  
  return (
    <div className={`flex gap-4 ${isRTL ? 'rtl:flex-row-reverse' : ''}`}>
      <button className="btn-primary">
        {t('common.buttons.save')}
      </button>
    </div>
  );
};
```

## Testing

1. **Test Component**: Use `TailwindTest.jsx` to verify all features
2. **Language Switcher**: Updated to use Tailwind classes
3. **RTL Support**: Test with Arabic language switching

## Best Practices

1. **Use Custom Classes**: Leverage the pre-built component classes
2. **Responsive Design**: Always consider mobile-first approach
3. **RTL Support**: Use rtl: prefix for RTL-specific styles
4. **Performance**: Tailwind automatically purges unused styles in production
5. **Consistency**: Use your custom color palette consistently

## Development vs Production

- **Development**: All Tailwind classes are available
- **Production**: Only used classes are included in the final CSS (automatic purging)

## Next Steps

1. Start using Tailwind classes in your existing components
2. Gradually migrate from Bootstrap to Tailwind
3. Create more custom component classes as needed
4. Use the responsive utilities for mobile optimization

Your project now has a powerful, customizable CSS framework that works perfectly with your existing i18n setup and RTL support!
