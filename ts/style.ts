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