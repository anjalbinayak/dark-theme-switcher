(function (window) {
  const ThemeSwitcher = (
    options = {
      id: "bin-theme-toggler",
      class: "bin_theme_toggler"
    }
  ) => {
    let _themeSwitcher = {
      options,
    };

    const DARK_THEME = "BIN_DARK_THEME";
    const LIGHT_THEME = "BIN_LIGHT_THEME";

    _themeSwitcher.Init = (initOptions = {glow:false}) => {
      _themeSwitcher.TOGGLER_IMAGE = document.createElement("img");
      _themeSwitcher.TOGGLER_IMAGE.classList.add("bin-image-toggler");
      _themeSwitcher.TOGGLER_IMAGE.addEventListener(
        "click",
        _themeSwitcher.toggleTheme
      );
      _themeSwitcher.options.glow = initOptions.glow;

      _themeSwitcher.createToggler();
      _themeSwitcher.applyTheme();
      _themeSwitcher.draggable();

      return initOptions;
    };

    _themeSwitcher.draggable = () => {
      dragElement(document.getElementById(options.id));

      function dragElement(elmnt) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;

        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + "px";
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px";

          localStorage.setItem("bin-theme-toggler-top", elmnt.style.top);
          localStorage.setItem("bin-theme-toggler-left", elmnt.style.left);
        }

        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
    };

    _themeSwitcher.getCurrentDisplayMode = () => {
      return localStorage.getItem("bin-theme-toggler-mode");
    };

    _themeSwitcher.createToggler = () => {
      let div = document.createElement("div");
      div.classList.add(_themeSwitcher.options.class);
      div.setAttribute("id", _themeSwitcher.options.id);
      if(_themeSwitcher.options.glow)
        div.classList.add('glow');
      div.style.top = localStorage.getItem("bin-theme-toggler-top") || 20 + "%";
      div.style.left = localStorage.getItem("bin-theme-toggler-left") || 90 + "%";
      div.style.zIndex = "5050";

      if (_themeSwitcher.getCurrentDisplayMode() === DARK_THEME) {
        _themeSwitcher.createSun(div);
      } else {
        _themeSwitcher.createMoon(div);
      }
      document.body.appendChild(div);
    };

    _themeSwitcher.createMoon = (div) => {
      _themeSwitcher.TOGGLER_IMAGE.setAttribute(
        "src",
        "https://raw.githubusercontent.com/anjalbinayak/dark-theme-switcher/master/assets/svgs/moon.svg"
      );
      div.appendChild(_themeSwitcher.TOGGLER_IMAGE);
    };

    _themeSwitcher.createSun = (div) => {
      _themeSwitcher.TOGGLER_IMAGE.setAttribute(
        "src",
        "https://raw.githubusercontent.com/anjalbinayak/dark-theme-switcher/master/assets/svgs/sun.svg"
      );
      div.appendChild(_themeSwitcher.TOGGLER_IMAGE);
    };

    _themeSwitcher.setTheme = (KEY) => {
      localStorage.setItem("bin-theme-toggler-mode", KEY);
    };

    _themeSwitcher.activateLightTheme = () => {
      let root = document.getElementsByTagName("html")[0];
      root.classList.remove("bin-dark-theme");
      let images = document.querySelectorAll("img");
      images.forEach(function (img) {
        img.classList.remove("bin-dark-theme-image");
      });

      _themeSwitcher.setTheme(LIGHT_THEME);
      _themeSwitcher.TOGGLER_IMAGE.setAttribute(
        "src",
        "https://raw.githubusercontent.com/anjalbinayak/dark-theme-switcher/master/assets/svgs/moon.svg"
      );
    };

    _themeSwitcher.activateDarkTheme = () => {
      let root = document.getElementsByTagName("html")[0];
      root.classList.add("bin-dark-theme");
      let images = document.querySelectorAll("img");
      images.forEach(function (img) {
        if (!img.classList.contains("bin-image-toggler")) {
          img.classList.add("bin-dark-theme-image");
        }
      });

      _themeSwitcher.setTheme(DARK_THEME);
      _themeSwitcher.TOGGLER_IMAGE.setAttribute(
        "src",
        "https://raw.githubusercontent.com/anjalbinayak/dark-theme-switcher/master/assets/svgs/sun.svg"
      );
    };

    _themeSwitcher.toggleTheme = () => {
      if (_themeSwitcher.getCurrentDisplayMode() === DARK_THEME) {
        _themeSwitcher.activateLightTheme();
      } else {
        _themeSwitcher.activateDarkTheme();
      }
    };

    _themeSwitcher.applyTheme = () => {
      if (_themeSwitcher.getCurrentDisplayMode() === DARK_THEME) {
        _themeSwitcher.activateDarkTheme();
      } else {
        _themeSwitcher.activateLightTheme();
      }
    };

    return _themeSwitcher;
  };

  if (typeof (window.ThemeSwitcher === "undefined")) {
    window.ThemeSwitcher = ThemeSwitcher;
  }
})(window);
