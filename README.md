# dark-theme-switcher

## The idea

This package allows you to easily add a theme switcher in your application. Depending on your needs, this can be done with just one line of code!

## Installation

There are two ways to install this package:

1. using it directly in the browser or
2. installing it via npm

You decide! ;)

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

If you want to enable any element to be the toggler, use `ThemeSwitcher`.

Its `constructor` has three parameters:

- `toggler: HTMLElement`
  - The element that will toggle the theme when clicking on it
- `callbackFunction?: (isDark: boolean) => void`
  - Optional function that runs every time the theme is changed. The parameter `isDark` is a `boolean` that indicates if the current theme is dark
- `options?: SwitcherOptions`
  - Optional object with parameters for styling the animation

**Simple usage**

```js
// Target element
const toggler = document.getElementById('button');
// Switcher
new ThemeSwitcher(toggler).init();
```

**Advanced usage**

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