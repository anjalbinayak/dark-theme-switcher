import SwitcherOptions from './switcher.options';
import Theme from './theme';
import { basicStyle } from './styles';
import { Global, createElement } from './utils';

@Global
export default class ThemeSwitcher {
  private transition: number;

  /**
   * @param toggler {HTMLElement} Element that enables the user to
   * change the current theme by clicking on it
   * @param [callbackFunction] {(isDark: boolean) => void} Optional callback
   * function for every time the theme changes
   * @param [options] {SwitcherOptions} Object with configurations for the
   * switcher, such as the transition time
   */
  constructor(
    public toggler: HTMLElement,
    public callbackFunction?: (isDark: boolean) => void,
    options: SwitcherOptions = {},
  ) {
    this.transition = options.transition;
  }

  /**
   * Apply the proper theme and enable the toggler to toggle the theme
   * by clicking on it
   */
  init(): void {
    this.toggler.addEventListener('click', () => this.toggleTheme());
    this.applyStyle();
    this.applyTheme();
  }

  /**
   * Return styles needed for switching theme
   * @param transition {number} Transition time (in milliseconds) for every time
   * the current theme changes. Default is `150`
   */
  getStyle(): string {
    return basicStyle(this.transition);
  }

  /**
   * Append the necessary styles to the DOM
   * @param options {SwitcherOptions} Style options
   */
  protected applyStyle(): void {
    createElement('style', {
      content: this.getStyle(),
      childOf: document.querySelector('html'),
    });
  }

  /**
   * Return the current theme
   */
  getCurrentDisplayMode(): string {
    return localStorage.getItem('bin-theme-toggler-mode');
  }

  /**
   * Set a theme at the local storage
   * @param key {string} Theme key
   */
  private setTheme(key: string): void {
    localStorage.setItem('bin-theme-toggler-mode', key);
  }

  /**
   * Activate light theme
   */
  activateLightTheme(): void {
    const root = document.querySelector('html');
    const images = document.querySelectorAll('img');

    root.classList.remove('bin-dark-theme');
    images.forEach((img) => img.classList.remove('bin-dark-theme-image'));

    this.setTheme(Theme.Light);

    if (this.callbackFunction) this.callbackFunction(false);
  }

  /**
   * Activate dark theme
   */
  activateDarkTheme(): void {
    const root = document.querySelector('html');
    const images = document.querySelectorAll('img');

    root.classList.add('bin-dark-theme');
    images.forEach((img) => {
      if (!img.classList.contains('bin-image-toggler')) img.classList.add('bin-dark-theme-image');
    });

    this.setTheme(Theme.Dark);

    if (this.callbackFunction) this.callbackFunction(true);
  }

  /**
   * Toggle current theme
   */
  toggleTheme(): void {
    if (this.getCurrentDisplayMode() === Theme.Dark) this.activateLightTheme();
    else this.activateDarkTheme();
  }

  /**
   * Check which theme is saved in localStorage and apply it
   */
  protected applyTheme(): void {
    if (this.getCurrentDisplayMode() === Theme.Dark) this.activateDarkTheme();
    else this.activateLightTheme();
  }
}
