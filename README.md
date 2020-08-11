# Dark Theme Switcher

Forked from [anjalbinayak/dark-theme-switcher](https://github.com/anjalbinayak/dark-theme-switcher)

## Changes made

- [x] Remove sample files
- [x] Initialize npm
- [x] Start using TypeScript
- [x] Update code according to ES2020
- [x] Remove default floating icon
- [x] Enable any element to be the toggler
- [x] Handle styles from JavaScript (with options)

## Development

1. `npm i`
2. `npm run build`

## Usage

### Import

```ts
import { ThemeSwitcher } from 'dark-theme-switcher';
```

### Initialization

**Simple**

```ts
// Target element
const toggler = document.getElementById('button');
// Switcher
new ThemeSwitcher(toggler).init();
```

**Advanced**

```ts
const toggler = document.getElementById('toggler');
const options = { transition: 200 } // default is 150
    
const themeSwitcher = new ThemeSwitcher(toggler, isDark => {
  isDark ?
    toggler.setAttribute('src', '/path/to/sun-icon.png') :
    toggler.setAttribute('src', '/path/to/moon-icon.png');
}, options);
    
themeSwitcher.init();
```