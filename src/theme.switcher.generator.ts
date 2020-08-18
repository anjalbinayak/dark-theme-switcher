import ThemeSwitcher from './theme.switcher';
import Theme from './theme';
import Icon from './icon';
import { createElement, Global } from './utils';
import { fullStyle } from './styles';
import { GeneratorInitOptions, GeneratorOptions } from './generator.options';

@Global
export default class ThemeSwitcherGenerator extends ThemeSwitcher {
  private options: GeneratorOptions;

  constructor(options: GeneratorInitOptions = { glow: false }) {
    // Create toggler
    const toggler = createElement('img', {
      classes: ['bin-image-toggler'],
      listeners: [['click', (e) => this.toggleTheme()]],
    });
    // Set toggler and callback function
    super(toggler, (isDark) =>
      this.toggler.setAttribute('src', isDark ? options.sunIconUrl || Icon.Sun : options.moonIconUrl || Icon.Moon),
    );
    // Save options
    this.options = {
      id: 'bin-theme-toggler',
      class: 'bin-theme-toggler',
      ...options,
    };
    // Use default icons when they are not provided in options
    if (!this.options.sunIconUrl) this.options.sunIconUrl = Icon.Sun;
    if (!this.options.moonIconUrl) this.options.moonIconUrl = Icon.Moon;
  }

  init(): void {
    this.createContextMenu();
    this.createToggler();
    this.applyStyle();
    this.applyTheme();
    this.makeDraggable();

    window.addEventListener('click', (e) => {
      if (!this.getContextMenu().contains(e.target as Node)) this.hideContextMenu();
    });

    window.addEventListener('contextmenu', (e) => {
      if (document.getElementById(this.options.id).contains(e.target as Node)) {
        this.showContextMenu();
        e.preventDefault();
      }

      if (this.isContextMenuVisible()) e.preventDefault();
    });
  }

  private getContextMenu(): HTMLElement {
    return document.querySelector('#bin-theme-context-menu');
  }

  private getTogglerPosition(): string {
    return localStorage.getItem('bin-theme-toggler-position');
  }

  private setTogglerPosition(position: 'fixed' | 'absolute'): void {
    localStorage.setItem('bin-theme-toggler-position', position);
  }

  private getTopPositionOfToggler(): string {
    return localStorage.getItem('bin-theme-toggler-top');
  }

  private setTopPositionOfToggler(topPosition: string): void {
    localStorage.setItem('bin-theme-toggler-top', topPosition);
  }

  private getLeftPositionOfToggler(): string {
    return localStorage.getItem('bin-theme-toggler-left');
  }

  private setLeftPositionOfToggler(leftPosition: string): void {
    localStorage.setItem('bin-theme-toggler-left', leftPosition);
  }

  private createContextMenu(): void {
    const div = document.createElement('div');
    div.setAttribute('id', 'bin-theme-context-menu');

    const input = document.createElement('input');
    input.type = 'checkbox';

    if (this.getTogglerPosition() === 'fixed') input.checked = true;

    input.addEventListener('change', (e) => {
      this.hideContextMenu();

      if (input.checked) {
        document.getElementById(this.options.id).style.position = 'fixed';
        this.setTogglerPosition('fixed');
      } else {
        document.getElementById(this.options.id).style.position = 'absolute';
        this.setTogglerPosition('absolute');
      }
    });

    div.innerHTML += '<small>Fixed Position</small>';
    div.appendChild(input);

    document.body.appendChild(div);
  }

  private showContextMenu(): void {
    const contextMenu = this.getContextMenu();

    if (contextMenu) {
      contextMenu.style.display = 'block';
      contextMenu.style.top = this.getTopPositionOfToggler() || `${20}%`;
      contextMenu.style.left = this.getLeftPositionOfToggler() || `${90}%`;
      contextMenu.style.position = this.getTogglerPosition();
    }
  }

  private hideContextMenu(): void {
    const contextMenu = this.getContextMenu();

    if (contextMenu) contextMenu.style.display = 'none';
  }

  private isContextMenuVisible(): boolean {
    const contextMenu = this.getContextMenu();

    return contextMenu ? contextMenu.style.display === 'block' : false;
  }

  private createToggler(): void {
    const div = document.createElement('div');
    div.classList.add(this.options.class);
    div.setAttribute('id', this.options.id);

    if (this.options.glow) div.classList.add('glow');

    div.style.top = this.getTopPositionOfToggler() || 20 + '%';
    div.style.left = this.getLeftPositionOfToggler() || 90 + '%';
    div.style.position = this.getTogglerPosition() || 'absolute';
    div.style.zIndex = '5050';

    const icon = this.getCurrentDisplayMode() === Theme.Dark ? this.options.sunIconUrl : this.options.moonIconUrl;

    this.createIcon(icon, div);

    document.body.appendChild(div);
  }

  private createIcon(icon: string, div: HTMLElement): void {
    this.toggler.setAttribute('src', icon);
    div.appendChild(this.toggler);
  }

  /**
   * Enable the toggler element to be draggable
   */
  private makeDraggable(): void {
    const element = document.getElementById(this.options.id);

    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;

    const elementDrag = (e: MouseEvent): void => {
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

    const closeDragElement = (): void => {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    };

    const dragMouseDown = (e: MouseEvent): void => {
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

  getStyle(): string {
    return fullStyle(this.options);
  }
}
