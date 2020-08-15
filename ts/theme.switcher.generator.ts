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

}