import ThemeSwitcher from './theme.switcher';

// Test
const button = document.querySelector('button');

new ThemeSwitcher(button, isDark => {
  console.log(isDark ? 'Dark theme' : 'Light theme');
});

export default ThemeSwitcher;