export interface GeneratorInitOptions {
  /**
   * If `true`, enables a glow animation on the button
   */
  glow: boolean;
  /**
   * Color used in glow animation when it is enabled
   */
  glowColor?: string;
  /**
   * Background color when light theme is active. The reversed color
   * is automacally used when dark theme is active
   */
  backgroundColor?: string;
  /**
   * Custom box shadow
   */
  boxShadow?: string;
  /**
   * Icon displayed when dark theme is active
   */
  sunIconUrl?: string;
  /**
   * Icon displayed when light theme is active
   */
  moonIconUrl?: string;
  /**
   * Number that represents the toggler's size in pixels.
   * It is applied in the height and width properties.
   */
  size?: number;
  /**
   * Duration in milliseconds for transition between themes
   */
  transition?: number;
}

export interface GeneratorOptions extends GeneratorInitOptions {
  id?: string;
  class?: string;
}
