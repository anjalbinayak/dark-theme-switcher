import ThemeSwitcher from './theme.switcher';
import Theme from './theme';
import Icon from './icon';
import { createElement } from './utils';
import { fullStyle } from './styles';

export default class ThemeSwitcherGenerator extends ThemeSwitcher {

  constructor() {
    // Create toggler
    const toggler = createElement('img', {
      classes: ['bin-image-toggler'],
      listeners: [
        ['click', e => this.toggleTheme()]
      ]
    });
    // Use the generated image element as toggler
    super(toggler);
  }

  init(): void {
    this.createContextMenu();
    this.createToggler();
    this.applyTheme();
    this.makeDraggable();

    window.addEventListener('click', e => {
      if (!this.getContextMenu().contains(e.target as Node)) this.hideContextMenu();
    });

    window.addEventListener('contextmenu', e => {
      if (document.getElementById(options.id).contains(e.target as Node)) {
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

  private setTopPositionOfToggler(topPosition: number): void {
    localStorage.setItem('bin-theme-toggler-top', `${topPosition}px`);
  }

  private getLeftPositionOfToggler(): string {
    return localStorage.getItem('bin-theme-toggler-left');
  }

  private setLeftPositionOfToggler(leftPosition: number): void {
    localStorage.setItem('bin-theme-toggler-left', `${leftPosition}px`);
  }

  private createContextMenu(): void {
    const div = document.createElement('div');
    div.setAttribute('id', 'bin-theme-context-menu');

    const input = document.createElement('input');
    input.type = 'checkbox';

    if(this.getTogglerPosition() == 'fixed') input.checked = true;

    input.addEventListener('change', e => {
      this.hideContextMenu();
      
      if (input.checked) {
        document.getElementById(options.id).style.position = 'fixed';
        this.setTogglerPosition('fixed');
      } else {
        document.getElementById(options.id).style.position = 'absolute';
        this.setTogglerPosition('absolute');
      }
    });

    div.innerHTML +='<small>Fixed Position</small>';
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

    return contextMenu ?
      contextMenu.style.display == 'block' : false;
  }

  private createToggler(): void {
    const div = document.createElement('div');
    div.classList.add(this.options.class);
    div.setAttribute('id', this.options.id);

    if (this.options.glow) div.classList.add('glow');

    div.style.top =  this.getTopPositionOfToggler() || 20 + '%';
    div.style.left = this.getLeftPositionOfToggler() || 90 + '%';
    div.style.position = this.getTogglerPosition() || 'absolute';
    div.style.zIndex = '5050';

    const icon = this.getCurrentDisplayMode() === Theme.Dark ? Icon.Sun : Icon.Moon;
    this.createIcon(icon, div);
    
    document.body.appendChild(div);
  }

  private createIcon(icon: Icon, div: HTMLElement): void {
    this.toggler.setAttribute('src', icon);
    div.appendChild(this.toggler);
  }

  /**
   * Enable the toggler element to be draggable
   */
  private makeDraggable(): void {
    let
      pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    
    const
      elementDrag = (e: MouseEvent) => {
        e.preventDefault();
        // calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position
        this.toggler.style.top = this.toggler.offsetTop - pos2 + 'px';
        this.toggler.style.left = this.toggler.offsetLeft - pos1 + 'px';
        // save position in localStorage
        localStorage.setItem('bin-theme-toggler-top', this.toggler.style.top);
        localStorage.setItem('bin-theme-toggler-left', this.toggler.style.left);
      },

      closeDragElement = () => {
        // stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
      },

      dragMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        // get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.addEventListener('mouseup', closeDragElement);
        // call a function whenever the cursor moves
        document.addEventListener('mousemove', elementDrag);
      };

    this.toggler.addEventListener('mousedown', dragMouseDown);
  }

  getStyle(transition: number = 150): string {
    return fullStyle(transition);
  }

}