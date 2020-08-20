import { GeneratorInitOptions } from './generator.options';

/**
 * Return the basic style needed to make the switcher works fine
 * @param transition {number} Time in milliseconds for the transition between changing themes
 * @returns {string} The basic style needed to make the switcher works fine
 */
export const basicStyle = (transition: number) => `
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
export const fullStyle = (options: GeneratorInitOptions) => `
  .bin-image-toggler {
    width: ${options.size ?? 30}px;
    height: auto;
    cursor: pointer;
  }

  html {
    transition: ${options.transition ?? 150}ms;
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
    background: ${options.contextMenuOptions?.background || '#e3e3e3'};
    color: ${options.contextMenuOptions?.textColor || 'black'};
    height: ${options.contextMenuOptions?.height || 'auto'};
    width: ${options.contextMenuOptions?.width || 'auto'};
    position: absolute;
    top: 30%;
    left: 40%;
    z-index: 100000;
    display: block;
    border-radius: ${options.contextMenuOptions?.borderRadius || '5px'};
    padding: ${options.contextMenuOptions?.padding || '5px'};
    -webkit-box-shadow: ${options.contextMenuOptions?.boxShadow || '1px 2px 3px rgba(0,0,0,0.5)'};
    -moz-box-shadow: ${options.contextMenuOptions?.boxShadow || '1px 2px 3px rgba(0,0,0,0.5)'};
    box-shadow: ${options.contextMenuOptions?.boxShadow || '1px 2px 3px rgba(0,0,0,0.5)'};
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
