import Theme from './theme';
import Style from './style';
import SwitcherOptions from './switcher.options';

export default class ThemeSwitcher {

  constructor(public toggler: HTMLElement, public callbackFunction?: (isDark: boolean) => void, private options: SwitcherOptions = {}) {
    this.applyStyle(options);
  }

  init(): void {
    this.toggler.addEventListener('click', () => this.toggleTheme());
    this.applyTheme();
  }

  private applyStyle(options: SwitcherOptions): void {
    const { transition } = options;

    const sheet = document.createElement('style');
    sheet.innerHTML = Style(transition);
    document.querySelector('html').appendChild(sheet);
  }

  getCurrentDisplayMode(): string {
    return localStorage.getItem('bin-theme-toggler-mode');
  };

  private setTheme(key: string): void {
    localStorage.setItem('bin-theme-toggler-mode', key);
  }

  activateLightTheme(): void {
    let root = document.querySelector('html'),
        images = document.querySelectorAll('img');

    root.classList.remove('bin-dark-theme');
    images.forEach(img => img.classList.remove('bin-dark-theme-image'));

    this.setTheme(Theme.Light);

    if (this.callbackFunction) this.callbackFunction(false);
  }

  activateDarkTheme(): void {
    let root = document.querySelector('html'),
        images = document.querySelectorAll('img');

    root.classList.add('bin-dark-theme');
    images.forEach(img => {
      if (!img.classList.contains('bin-image-toggler'))
        img.classList.add('bin-dark-theme-image');
    });

    this.setTheme(Theme.Dark);

    if (this.callbackFunction) this.callbackFunction(true);
  }

  toggleTheme(): void {
    if (this.getCurrentDisplayMode() === Theme.Dark)
      this.activateLightTheme();
    else
      this.activateDarkTheme();
  }

  private applyTheme(): void {
    if (this.getCurrentDisplayMode() === Theme.Dark)
      this.activateDarkTheme();
    else
      this.activateLightTheme();
  }
}