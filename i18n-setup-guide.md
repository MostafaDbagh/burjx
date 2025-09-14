# i18n Setup Guide

This project is now configured for internationalization (i18n) with support for English (en) and Arabic (ar) languages.

## Features

- ✅ English and Arabic language support
- ✅ RTL (Right-to-Left) support for Arabic
- ✅ Language switcher component
- ✅ Automatic language detection
- ✅ Translation namespaces (home, common)
- ✅ Persistent language selection

## File Structure

```
public/locales/
├── en/
│   ├── home.json
│   └── common.json
└── ar/
    ├── home.json
    └── common.json

src/
├── i18n.js (main configuration)
├── hooks/useI18n.js (custom hook)
└── components/ui/LanguageSwitcher.jsx
```

## How to Use

### 1. Basic Translation

```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation('home'); // or 'common'
  
  return (
    <div>
      <h1>{t('home.title')}</h1>
      <button>{t('common.buttons.save')}</button>
    </div>
  );
};
```

### 2. Using the Custom Hook

```jsx
import { useI18n } from '../hooks/useI18n';

const MyComponent = () => {
  const { t, currentLanguage, isRTL } = useI18n('common');
  
  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <p>Current language: {currentLanguage}</p>
      <button>{t('buttons.save')}</button>
    </div>
  );
};
```

### 3. Language Switcher

The `LanguageSwitcher` component is already integrated in the header:

```jsx
import LanguageSwitcher from '../components/ui/LanguageSwitcher';

const Header = () => {
  return (
    <header>
      <LanguageSwitcher />
    </header>
  );
};
```

### 4. Adding New Translations

1. Add the key-value pair to both language files:

**public/locales/en/common.json:**
```json
{
  "common": {
    "new_section": {
      "new_key": "New English Text"
    }
  }
}
```

**public/locales/ar/common.json:**
```json
{
  "common": {
    "new_section": {
      "new_key": "نص عربي جديد"
    }
  }
}
```

2. Use in component:
```jsx
const { t } = useTranslation('common');
<p>{t('common.new_section.new_key')}</p>
```

## RTL Support

The setup automatically handles RTL for Arabic:
- Document direction changes automatically
- CSS includes RTL-specific styles
- Form elements align properly for both directions

## Language Detection

The system detects language in this order:
1. URL query parameter (?lng=ar)
2. Cookie
3. Local storage
4. Browser language

## Available Translation Keys

### Home Namespace
- `home.title` - Main title
- `home.subtitle` - Subtitle
- `home.cta` - Call to action button
- `home.lets` - "Let's" text
- `home.explore` - "Explore" text
- `home.toma` - "TOMA" text
- `home.boutique` - "BOUTIQUE" text

### Common Namespace
- `common.navigation.*` - Navigation items
- `common.buttons.*` - Button texts
- `common.forms.*` - Form labels and messages
- `common.messages.*` - General messages
- `common.language.*` - Language selection texts

## Testing

1. Start the development server: `npm run dev`
2. Use the language switcher in the header
3. Verify RTL layout for Arabic
4. Check that translations load correctly

## Production Deployment

1. Ensure all translation files are included in the build
2. Verify language detection works in production
3. Test RTL layout across different browsers
