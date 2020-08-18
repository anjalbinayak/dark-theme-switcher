# dark-theme-switcher

## Installation

You can use the script directly in browser or install it via npm. Choose one of the following options:

### 1. HTML

Add the following script before `body`'s closing tag :

```html
<script src="https://cdn.jsdelivr.net/npm/dark-theme-switcher@latest/js/dark-theme-switcher.min.js"></script>
```

### 2. npm

Inside your project, run:

`npm i dark-theme-switcher`

**Import**

CommonJS

```js
const { ThemeSwitcher, ThemeSwitcherGenerator } = require('dark-theme-switcher');
```

ES6

```js
import { ThemeSwitcher, ThemeSwitcherGenerator } from 'dark-theme-switcher';
```

## Usage

### `ThemeSwitcher`

If you want to use any element as toggler, use `ThemeSwitcher`.

**Simple**

```js
// Target element
const toggler = document.getElementById('button');
// Switcher
new ThemeSwitcher(toggler).init();
```

**Advanced**

```js
const toggler = document.getElementById('toggler');
const options = { transition: 200 }; // default is 150
    
const themeSwitcher = new ThemeSwitcher(toggler, isDark => {
  isDark ?
    toggler.setAttribute('src', '/path/to/sun-icon.png') :
    toggler.setAttribute('src', '/path/to/moon-icon.png');
}, options);
    
themeSwitcher.init();
```
