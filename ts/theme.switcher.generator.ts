import ThemeSwitcher from './theme.switcher';
import { createElement } from './utils';

export default class ThemeSwitcherGenerator extends ThemeSwitcher {

  constructor() {
    const toggler = createElement('img', {
      listeners: [
        ['click', e => this.toggleTheme()]
      ]
    });

    super(toggler);
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

}