# @thorerikgildihub/ui

React + Tailwind-komponenter som bruker tokens fra `@thorerikgildihub/theme`.

## Install
```bash
npm i @thorerikgildihub/ui @thorerikgildihub/theme
```

Importer tokens i appens globale CSS (f.eks. `app/globals.css` eller `styles.css`):

```css
@import '@thorerikgildihub/theme/styles.css';
```

Konfigurer Tailwind til å scanne UI-pakken:

```js
// tailwind.config.js|ts
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@thorerikgildihub/ui/dist/**/*.{js,mjs}'
  ],
  theme: { extend: {} },
  plugins: []
}
```

Eksempel i app:
```tsx
import { Button, Card } from '@thorerikgildihub/ui'

export default function Example() {
  return (
    <Card padding="lg">
      <h3 className="mb-2">Hello Gildi</h3>
      <Button variant="primary">Lagre</Button>
    </Card>
  )
}
```

## Bygg & publiser
```bash
npm run build
npm version patch
git push --follow-tags
# GitHub Actions publiserer til GitHub Packages
```
