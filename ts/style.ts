/**
 * Return the proper styles for enabling dark theme
 * @param transition {number} Transition time (in milliseconds) for every time
 * the current theme changes. Default is `150`
 */
const Style = (transition: number = 150) => {
  return `
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
};

export default Style;