import ThemeSwitcher from './theme.switcher';
import Icon from './icon';

export default function Sample() {
  const toggler = document.getElementById('toggler');

  new ThemeSwitcher(toggler, isDark => {
    isDark ?
      toggler.setAttribute('src', Icon.Sun) :
      toggler.setAttribute('src', Icon.Moon);
  });
}