(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  var Icon;
  (function (Icon) {
      Icon["Moon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFVklEQVR4Xu1Zf4gVVRg9351V11pR09yYuXdWl6fEYpoFSQkWhboWFf1j/xQoYQUJWmSoFUFmYT8QEoPMiAIhkSCoFKOEtSgS14JoLUrYN3ferBtpJeiu7pv7xZTPnX3uW9d9b2dfuzP/vbn3ft85557v3jv3Ecb4Q2OcP1IBUgeMcQXSEhjjBkgXwbQE0hIY4wqkJTDGDZDuAmkJpCWQjALkOM4dQuAeAL9pnXsHQJhM6oGzDHcJkFL2fQBvBsQNBSjM/ILvBy+OagFmzZpRn8+Pi2b63kuJ8gGtg+ZRK0BDg70gnzefCmHZ/ZEc1Q5wHGc+wC1C0ORSM2wMbsvlct+OOgc4jiMBHBEC9QORO38+X9fZ2XlmtAlgKWUfBGhxEbH3AKzqXQDptO/7Jd2RtCgV2wWklKuJeGdfAmabMWKLEPij9705pXXHtKSJlspXEQFmzpxZ29PT0x63PjN97vv+8kwmM+7cua7uGIBQ69yEUXUOkNJ+hIh2xUieDUO+PggCHb2T0ukkwoxC+4W2X6rBBRVxgFJ2S9/ap9e19tcXCErpfEGEuwq/ifCY5+WKymVk5ChbANd1pzKHJ4H4l6XIaK2PFygp5TwHYHPsJHjQ94OLgowM9f+yli2AlHI5Ee+LLXI/at0xL07Kda9rYrZ+ir8Tgm/KZoPvR5J8RQRwXWcdM7b12pt3eV6wupiYUs7XABbF3rdonbsTgBlJEcp2gOvKrcz8TIzEs1rnXi4mJaW8m4g/i78nog2e52/9XwuglNwO8JpeB9Baz/Pf7IdU9GW4H6BlsTZmpod93989UiKU7QCl5GsAPx0ToOSs2rbtEvEPQoipcRGIaJPn+a+ORDmULYCU9noiisAXnre0zj1RakaVspcCFC2aVrwPM30lRPik53W0JumGsgVQyr4foI9ju8BhrTsWDkTCdZ0VzIhsX3NpPz4EYA9RTUtdXd2vbW1t56PdynXdKcaY+US8hMjcCliHPM+PttaybpbKFuDCxceJGBEjRI3MZrMdA4tgLwlD3lNUDv0NOWOMsYQQtcWNlThQlS1ABEpK5ygRFsQAPq917qXLWdm2bWVZ9DaA5ZfrW6L9Fa1zm4Y49t9hFRFAKecpAG/EgJwksmZ7nvfnIMCRUmopYDYCuH0Q/S92EYIXZbPBN1cy5hIXlTO4MLaxsXFyPn9OM2NSLN77WudWXkl8x3HmWBY9AISLmTEPEE6pSQpDPhIEwS0A+EpyDIsAUVClnMiKW/om4DVaBzvKACgymWvqurom7hQCD/aNI5q11gfKiF25EogiZTKZCd3d3UeJuCkGKjrorPV9f/sQgdZI6ewgwqPx8czY6/u5FUOM2WdYRdaAQkSl1FzAfAfgqngWIt6dz2NdEASxm6GB4UspZxNxdJ0W/36AMWgnopt93z9VdQJEgKSUzUT8SfEebwz/LQRtt6zw3fb2E+0lwFNDg31jGNLjzLxKCBpX1O8kUbjY8060VYJ8FKOiDog5YRlgPgJwdX9AjcExy0IrM6Iboy4iqjMmbCQS0QFKlSDnCWGas9mOY5UiP2wCRIEv3AHsATC3AoD3jx+fX3n8eOfvFYg1fGtAMbimpqbxp0//tY6ZNwohpgwBvAfwBq2DD8vd7krlHpYSKE42ffr0SbW1tSuJwocAEe3dAz15gL9kFh/U19fvbW1t7RmCcIMekogAcTSO40wjooVC8BxmXAuYicaIs0IgZwx+zufzh5P81yhxAQY9NQl1TAVISOiqTZM6oGqnJiFgqQMSErpq06QOqNqpSQhY6oCEhK7aNKkDqnZqEgKWOiAhoas2zZh3wD8mT8pQGdeXaQAAAABJRU5ErkJggg==";
      Icon["Sun"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE7klEQVR4Xu2aT2wUdRTHv+83M9sGW+2/aRtEgcSoITG2qXKSROBA5CCerB6MITHeTIxCUWm3Y1v/RDHE4MkDclDReNHEBI2xNQZNPAmaWgEl2hBsd5YqEUq7M/uemZYNWwqd2e1vWupOr7/39zPv/fbN6xAq/I8qPH8kAJIKqHACSQtUeAEkl2DSAkkLVDiBpAUqvACSX4FlbwE77X0DRqNrmvfCIV7qilx2AI3p6QsK6iYos9Z16EICYIkJJBWwxMDnuftftUBL2t8hzJ1kWs+OO5SJArepJ/eVELWcU2ZblEvQdqSGJX9ACX/r9qXei+JjIRmtLWD35g5D6DES/EKGuTkqhKhJBMkL+0cIeIBEBjP9qa1Rda8npxVAiyPNkveHhLBBN4Q5ybOMksmbx53q0zcUgCCYYggCDGfHzHa8S14h0DpH6lLsPS6ghwBpA6R15oyVK8Q/AfSlYVgfXl09dk9uCEQPksbkA7daK6CQZAAhz/4gON+SMqvWnnVo8o5npOqfev8FAj8PqNqFnhwzT5Gh3iEyXy7MBk1p/3RAyVC8RceTL/iPBcCM8afFWr0aVpB8w165zTD8zwC0l1SygpMi+YezA9Un1jlSHej+4dBUSTZChOMDcNlxgyNrFHtHCbS2nMCF81kxadM5p+rXcvTDdOIF4EjKZv97AB1hgYScn5IpsyP7Bv27SDvz1GMFYPd4L4Hwio6gCdif6bOe02Gr2EZsAJq6pJZSuVEoVacjaAZPk59an32V/tJhL/ZL0E7ndgJ0UHOwXZk+603NNnWau2LL7s19DKFH9VqXIbcvtUWnzdhawO7xRkC4W2uwzBOZgapGrTbLNWanc4MM2Visbwj9UJjP7fT0BKDqy7V/PT13zEwFk2Vzd+79vJJH5lxorH6vO29u/O0ATUf1W3YFNPd4w8HMX+wozzg2MWDNDDtxA2hMT3+hoLbNSZRxpuqieeeZ/XQpdgBwRNnAqmJHLjBZeKWNvwWEWnZhFddcGefdYVzCJ5SPmnwgV3YFhDmxu3MfQVFnmFwp57pegZdkDrDT/pOAHColwTBZEuzO9Fv7wuRKOY+vAhypAedGdV2EwRuiMlPrXYfGSkkwTDY2ALMXobcHwOthQUQ5J+CtTJ+1K4psKTKxAgheie1W/zsA95cS1DVkT6hJs2N8H11cpJ156vECANC4V24FvKPKoHXlBM8sGTJ5U9apPlmOfphOzACEAJIAgjL8TwHcFxbQVecj4PwOd6D6VIl6kcVjARAsMMH+5wK6vUYZG2a2OLO7gd1g7oJSNy8UITNPKqXetpQ5EGyUAtmGtHfMANjwzG1jr5EbOcMQQe0Aire3Avmz7m/rruLRtH6P3GKkvE4ES1GSdoG0GgwSqAwUHw+WopayDp91KFsce0O396Oh0MbAz5ZnbtUFQSuAuFbXAYjWF8X2LP9rBdyjE4JWAI3d/kGlZKfu1XWhEoohAHzE7avavthW0ApgdgmCJ5Tip6Kurpt7cx8wS0O2P7U9uDDDEgog5M3cIYIa0jEVagUQFvy1zgv/HFWTZk0cv/NhMd0wAJIPJJIvRCr0E5nLA06TO2KuLXWZEdbfUc6X/Q4IJsQ152GUssaKklhUmeUHEDXSmOQSADGBXTFmkwpYMY8qpkCTCogJ7Ioxm1TAinlUMQWaVEBMYFeM2f8A3cMDX3M64z4AAAAASUVORK5CYII=";
  })(Icon || (Icon = {}));
  exports.default = Icon;
  
  },{}],2:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  const theme_switcher_1 = require("./theme.switcher");
  const theme_switcher_generator_1 = require("./theme.switcher.generator");
  theme_switcher_1.default;
  theme_switcher_generator_1.default;
  
  },{"./theme.switcher":6,"./theme.switcher.generator":5}],3:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fullStyle = exports.basicStyle = void 0;
  /**
   * Return the basic style needed to make the switcher works fine
   * @param transition {number} Time in milliseconds for the transition between changing themes
   * @returns {string} The basic style needed to make the switcher works fine
   */
  exports.basicStyle = (transition) => `
    html {
      transition: ${transition}ms;
    }
  
    .bin-dark-theme {
      filter: invert(1) hue-rotate(180deg);
    }
  
    .bin-dark-theme-image {
      filter: invert(1) hue-rotate(180deg);
    }
  `;
  /**
   * Return all the style needed to make the switcher works fine
   * @param options {GeneratorInitOptions} Object with options for the styles
   * @returns {string} All the style needed to make the toggler button works fine
   */
  exports.fullStyle = (options) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
      return `
    .bin-image-toggler {
      width: ${(_a = options.size) !== null && _a !== void 0 ? _a : 30}px;
      height: auto;
      cursor: pointer;
    }
  
    html {
      transition: ${(_b = options.transition) !== null && _b !== void 0 ? _b : 150}ms;
    }
  
    .bin-dark-theme {
      filter: invert(1) hue-rotate(180deg);
    }
  
    .bin-dark-theme-image {
      filter: invert(1) hue-rotate(180deg);
    }
  
    #bin-theme-toggler {
      position: absolute;
      top: 10;
      right: 20;
      padding: 5px;
      cursor: move;
      background-color: ${options.backgroundColor || '#f0f0f0'};
      border-radius: 50%;
      text-align: center;
      box-shadow: ${options.boxShadow || '2px 2px 6px -2px rgba(0, 0, 0, .5)'};
      z-index: 5050 !important;
    }
  
    #bin-theme-context-menu {
      background: ${((_c = options.contextMenuOptions) === null || _c === void 0 ? void 0 : _c.background) || '#e3e3e3'};
      color: ${((_d = options.contextMenuOptions) === null || _d === void 0 ? void 0 : _d.textColor) || 'black'};
      height: ${((_e = options.contextMenuOptions) === null || _e === void 0 ? void 0 : _e.height) || 'auto'};
      width: ${((_f = options.contextMenuOptions) === null || _f === void 0 ? void 0 : _f.width) || 'auto'};
      position: absolute;
      top: 30%;
      left: 40%;
      z-index: 100000;
      display: block;
      border-radius: ${((_g = options.contextMenuOptions) === null || _g === void 0 ? void 0 : _g.borderRadius) || '5px'};
      padding: ${((_h = options.contextMenuOptions) === null || _h === void 0 ? void 0 : _h.padding) || '5px'};
      -webkit-box-shadow: ${((_j = options.contextMenuOptions) === null || _j === void 0 ? void 0 : _j.boxShadow) || '1px 2px 3px rgba(0,0,0,0.5)'};
      -moz-box-shadow: ${((_k = options.contextMenuOptions) === null || _k === void 0 ? void 0 : _k.boxShadow) || '1px 2px 3px rgba(0,0,0,0.5)'};
      box-shadow: ${((_l = options.contextMenuOptions) === null || _l === void 0 ? void 0 : _l.boxShadow) || '1px 2px 3px rgba(0,0,0,0.5)'};
      display: none;
    }
  
    #bin-theme-context-menu small {
      margin-right: 7px;
    }
  
    #bin-theme-context-menu input[type=checkbox] {
      width: 12px;
      height: 12px;
      border-radius: 2px;
      background-color: #fff;
      border-color: #d0d0d0;
    }
  
    .glow {
      background-color: #ccc;
      animation: glow 1s infinite alternate;
    }
  
    @keyframes glow {
      from {
        box-shadow: 0 0 10px -10px ${options.glowColor || '#aef4af'};
      }
      to {
        box-shadow: 0 0 10px 10px ${options.glowColor || '#aef4af'};
      }
    }
  `;
  };
  
  },{}],4:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  /**
   * Enumerable list of the available themes
   */
  var Theme;
  (function (Theme) {
      Theme["Light"] = "BIN_LIGHT_THEME";
      Theme["Dark"] = "BIN_DARK_THEME";
  })(Theme || (Theme = {}));
  exports.default = Theme;
  
  },{}],5:[function(require,module,exports){
  "use strict";
  var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  const theme_switcher_1 = require("./theme.switcher");
  const theme_1 = require("./theme");
  const icon_1 = require("./icon");
  const utils_1 = require("./utils");
  const styles_1 = require("./styles");
  let ThemeSwitcherGenerator = class ThemeSwitcherGenerator extends theme_switcher_1.default {
      constructor(options = {}) {
          // Create toggler
          const toggler = utils_1.createElement('img', {
              classes: ['bin-image-toggler'],
              listeners: [['click', (e) => this.toggleTheme()]],
          });
          // Set toggler and callback function
          super(toggler, (isDark) => this.toggler.setAttribute('src', isDark ? options.sunIconUrl || icon_1.default.Sun : options.moonIconUrl || icon_1.default.Moon));
          // Save options
          this.options = {
              id: 'bin-theme-toggler',
              class: 'bin-theme-toggler',
              ...options,
          };
          // Use default icons when they are not provided in options
          if (!this.options.sunIconUrl)
              this.options.sunIconUrl = icon_1.default.Sun;
          if (!this.options.moonIconUrl)
              this.options.moonIconUrl = icon_1.default.Moon;
      }
      init() {
          // Create custom context menu
          if (!this.options.useDefaultContextMenu) {
              this.createContextMenu();
              window.addEventListener('click', (e) => {
                  if (!this.getContextMenu().contains(e.target))
                      this.hideContextMenu();
              });
              window.addEventListener('contextmenu', (e) => {
                  if (document.getElementById(this.options.id).contains(e.target)) {
                      this.showContextMenu();
                      e.preventDefault();
                  }
                  if (this.isContextMenuVisible())
                      e.preventDefault();
              });
          }
          // Create the toggler, make it draggable, set styles and apply theme
          this.createToggler();
          this.makeDraggable();
          this.applyStyle();
          this.applyTheme();
      }
      getContextMenu() {
          return document.querySelector('#bin-theme-context-menu');
      }
      getTogglerPosition() {
          return localStorage.getItem('bin-theme-toggler-position');
      }
      setTogglerPosition(position) {
          localStorage.setItem('bin-theme-toggler-position', position);
      }
      getTopPositionOfToggler() {
          return localStorage.getItem('bin-theme-toggler-top');
      }
      setTopPositionOfToggler(topPosition) {
          localStorage.setItem('bin-theme-toggler-top', topPosition);
      }
      getLeftPositionOfToggler() {
          return localStorage.getItem('bin-theme-toggler-left');
      }
      setLeftPositionOfToggler(leftPosition) {
          localStorage.setItem('bin-theme-toggler-left', leftPosition);
      }
      createContextMenu() {
          const div = document.createElement('div');
          div.setAttribute('id', 'bin-theme-context-menu');
          const input = document.createElement('input');
          input.type = 'checkbox';
          if (this.getTogglerPosition() === 'fixed')
              input.checked = true;
          input.addEventListener('change', (e) => {
              this.hideContextMenu();
              if (input.checked) {
                  document.getElementById(this.options.id).style.position = 'fixed';
                  this.setTogglerPosition('fixed');
              }
              else {
                  document.getElementById(this.options.id).style.position = 'absolute';
                  this.setTogglerPosition('absolute');
              }
          });
          div.innerHTML += '<small>Fixed Position</small>';
          div.appendChild(input);
          document.body.appendChild(div);
      }
      showContextMenu() {
          const contextMenu = this.getContextMenu();
          if (contextMenu) {
              contextMenu.style.display = 'block';
              contextMenu.style.top = this.getTopPositionOfToggler() || `${20}%`;
              contextMenu.style.left = this.getLeftPositionOfToggler() || `${90}%`;
              contextMenu.style.position = this.getTogglerPosition();
          }
      }
      hideContextMenu() {
          const contextMenu = this.getContextMenu();
          if (contextMenu)
              contextMenu.style.display = 'none';
      }
      isContextMenuVisible() {
          const contextMenu = this.getContextMenu();
          return contextMenu ? contextMenu.style.display === 'block' : false;
      }
      createToggler() {
          const div = document.createElement('div');
          div.classList.add(this.options.class);
          div.setAttribute('id', this.options.id);
          if (this.options.glow)
              div.classList.add('glow');
          div.style.top = this.getTopPositionOfToggler() || 20 + '%';
          div.style.left = this.getLeftPositionOfToggler() || 90 + '%';
          div.style.position = this.getTogglerPosition() || 'absolute';
          div.style.zIndex = '5050';
          const icon = this.getCurrentDisplayMode() === theme_1.default.Dark ? this.options.sunIconUrl : this.options.moonIconUrl;
          this.createIcon(icon, div);
          document.body.appendChild(div);
      }
      createIcon(icon, div) {
          this.toggler.setAttribute('src', icon);
          div.appendChild(this.toggler);
      }
      /**
       * Enable the toggler element to be draggable
       */
      makeDraggable() {
          const element = document.getElementById(this.options.id);
          let pos1 = 0;
          let pos2 = 0;
          let pos3 = 0;
          let pos4 = 0;
          const elementDrag = (e) => {
              e.preventDefault();
              // calculate the new cursor position:
              pos1 = pos3 - e.clientX;
              pos2 = pos4 - e.clientY;
              pos3 = e.clientX;
              pos4 = e.clientY;
              // set the element's new position:
              element.style.top = element.offsetTop - pos2 + 'px';
              element.style.left = element.offsetLeft - pos1 + 'px';
              this.setTopPositionOfToggler(element.style.top);
              this.setLeftPositionOfToggler(element.style.left);
          };
          const closeDragElement = () => {
              // stop moving when mouse button is released:
              document.onmouseup = null;
              document.onmousemove = null;
          };
          const dragMouseDown = (e) => {
              e.preventDefault();
              // get the mouse cursor position at startup:
              pos3 = e.clientX;
              pos4 = e.clientY;
              document.onmouseup = closeDragElement;
              // call a function whenever the cursor moves:
              document.onmousemove = elementDrag;
          };
          element.onmousedown = dragMouseDown;
      }
      getStyle() {
          return styles_1.fullStyle(this.options);
      }
  };
  ThemeSwitcherGenerator = __decorate([
      utils_1.Global
  ], ThemeSwitcherGenerator);
  exports.default = ThemeSwitcherGenerator;
  
  },{"./icon":1,"./styles":3,"./theme":4,"./theme.switcher":6,"./utils":7}],6:[function(require,module,exports){
  "use strict";
  var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  const theme_1 = require("./theme");
  const styles_1 = require("./styles");
  const utils_1 = require("./utils");
  let ThemeSwitcher = class ThemeSwitcher {
      /**
       * @param toggler {HTMLElement} Element that enables the user to
       * change the current theme by clicking on it
       * @param [callbackFunction] {(isDark: boolean) => void} Optional callback
       * function for every time the theme changes
       * @param [options] {SwitcherOptions} Object with configurations for the
       * switcher, such as the transition time
       */
      constructor(toggler, callbackFunction, options = {}) {
          this.toggler = toggler;
          this.callbackFunction = callbackFunction;
          this.transition = options.transition;
      }
      /**
       * Apply the proper theme and enable the toggler to toggle the theme
       * by clicking on it
       */
      init() {
          this.toggler.addEventListener('click', () => this.toggleTheme());
          this.applyStyle();
          this.applyTheme();
      }
      /**
       * Return styles needed for switching theme
       * @param transition {number} Transition time (in milliseconds) for every time
       * the current theme changes. Default is `150`
       */
      getStyle() {
          return styles_1.basicStyle(this.transition);
      }
      /**
       * Append the necessary styles to the DOM
       * @param options {SwitcherOptions} Style options
       */
      applyStyle() {
          utils_1.createElement('style', {
              content: this.getStyle(),
              childOf: document.querySelector('html'),
          });
      }
      /**
       * Return the current theme
       */
      getCurrentDisplayMode() {
          return localStorage.getItem('bin-theme-toggler-mode');
      }
      /**
       * Set a theme at the local storage
       * @param key {string} Theme key
       */
      setTheme(key) {
          localStorage.setItem('bin-theme-toggler-mode', key);
      }
      /**
       * Activate light theme
       */
      activateLightTheme() {
          const root = document.querySelector('html');
          const images = document.querySelectorAll('img');
          root.classList.remove('bin-dark-theme');
          images.forEach((img) => img.classList.remove('bin-dark-theme-image'));
          this.setTheme(theme_1.default.Light);
          if (this.callbackFunction)
              this.callbackFunction(false);
      }
      /**
       * Activate dark theme
       */
      activateDarkTheme() {
          const root = document.querySelector('html');
          const images = document.querySelectorAll('img');
          root.classList.add('bin-dark-theme');
          images.forEach((img) => {
              if (!img.classList.contains('bin-image-toggler'))
                  img.classList.add('bin-dark-theme-image');
          });
          this.setTheme(theme_1.default.Dark);
          if (this.callbackFunction)
              this.callbackFunction(true);
      }
      /**
       * Toggle current theme
       */
      toggleTheme() {
          if (this.getCurrentDisplayMode() === theme_1.default.Dark)
              this.activateLightTheme();
          else
              this.activateDarkTheme();
      }
      /**
       * Check which theme is saved in localStorage and apply it
       */
      applyTheme() {
          if (this.getCurrentDisplayMode() === theme_1.default.Dark)
              this.activateDarkTheme();
          else
              this.activateLightTheme();
      }
  };
  ThemeSwitcher = __decorate([
      utils_1.Global
  ], ThemeSwitcher);
  exports.default = ThemeSwitcher;
  
  },{"./styles":3,"./theme":4,"./utils":7}],7:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Global = exports.makeGlobal = exports.createElement = void 0;
  /**
   * Create a new element with custom options and return it
   * @param tag {keyof HTMLElementTagNameMap} Element tag
   * @param options {NewElementOptions} Options for the new element, such as id, classes and event listeners
   * @returns New HTMLElement
   */
  exports.createElement = (tag, options) => {
      var _a;
      const element = document.createElement(tag);
      const { id, classes, content, listeners } = options;
      if (id)
          element.id = id;
      if (classes)
          element.classList.add(...classes);
      if (content)
          element.innerHTML = content;
      if (listeners)
          listeners.forEach((listener) => element.addEventListener(...listener));
      (_a = options.childOf) === null || _a === void 0 ? void 0 : _a.appendChild(element);
      return element;
  };
  /**
   * Receive an object and add its properties to `globalThis`
   * @param set {object} Object with properties that will be added to `globalThis`
   */
  exports.makeGlobal = (set) => Object.entries(set).forEach((entry) => (globalThis[entry[0]] = entry[1]));
  /**
   * Decorator function that add the given class to `globalThis`
   * @param type {Type} Class that will be added to `globalThis`
   */
  exports.Global = (type) => (globalThis[type.name] = type);
  
  },{}]},{},[2]);
  