(function (window) {
  const ThemeSwitcher = (
    options = {
      id: "bin-theme-toggler",
      class: "bin_theme_toggler",
    }
  ) => {
    let _themeSwitcher = {
      options,
    };

    const DARK_THEME = "BIN_DARK_THEME";
    const LIGHT_THEME = "BIN_LIGHT_THEME";


    const MOON_SVG = "https://raw.githubusercontent.com/anjalbinayak/dark-theme-switcher/master/assets/svgs/moon.svg";
    const SUN_SVG = "https://raw.githubusercontent.com/anjalbinayak/dark-theme-switcher/master/assets/svgs/sun.svg";

    _themeSwitcher.Init = (initOptions = { glow: false }) => {
      _themeSwitcher.TOGGLER_IMAGE = document.createElement("img");
      _themeSwitcher.TOGGLER_IMAGE.classList.add("bin-image-toggler");
      _themeSwitcher.TOGGLER_IMAGE.addEventListener(
        "click",
        _themeSwitcher.toggleTheme
      );
      _themeSwitcher.options.glow = initOptions.glow;

      _themeSwitcher.createContextMenu();
      _themeSwitcher.createToggler();
      _themeSwitcher.applyTheme();
      _themeSwitcher.draggable();

      window.addEventListener("click", function (e) {
        if (!_themeSwitcher.getContextMenu().contains(e.target)) _themeSwitcher.hideContextMenu();
      });

      window.addEventListener("contextmenu", function (e) {
        if (document.getElementById(options.id).contains(e.target)) {
          _themeSwitcher.showContextMenu();
          e.preventDefault();
        }

        if(_themeSwitcher.isContextMenuVisible())  e.preventDefault();

      });

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

    _themeSwitcher.getContextMenu = () => {
      return document.querySelector("#bin-theme-context-menu");
    }

    _themeSwitcher.getCurrentDisplayMode = () => {
      return localStorage.getItem("bin-theme-toggler-mode");
    };

    _themeSwitcher.getTogglerPosition = () => {
      return localStorage.getItem('bin-theme-toggler-position');
    }

    _themeSwitcher.setTogglerPosition = (position) => {
      position  = position == 'fixed'? 'fixed' : 'absolute';
      localStorage.setItem('bin-theme-toggler-position',position);
    }

    _themeSwitcher.getTopPositionOfToggler = () =>{
       return localStorage.getItem('bin-theme-toggler-top');
    }

    _themeSwitcher.setTopPositionOfToggler = (topPosition) => {
      localStorage.setItem('bin-theme-toggler-top', `${topPosition}px`);
    }

    _themeSwitcher.getLeftPositionOfToggler = () =>{
      return localStorage.getItem('bin-theme-toggler-left');
   }

   _themeSwitcher.setLeftPositionOfToggler = (leftPosition) => {
    localStorage.setItem('bin-theme-toggler-left', `${leftPosition}px`);
  }

  _themeSwitcher.setTheme = (KEY) => {
    localStorage.setItem("bin-theme-toggler-mode", KEY);
  };



    _themeSwitcher.createContextMenu = () => {
      let div = document.createElement("div");
      div.setAttribute("id", "bin-theme-context-menu");
      let input = document.createElement("input");
      input.type = "checkbox";
      if(localStorage.getItem('bin-theme-toggler-position') == 'fixed') input.checked = true;
      input.addEventListener("change", function () {
        _themeSwitcher.hideContextMenu();
        let isChecked = input.checked;
        if (isChecked) {
          document.getElementById(options.id).style.position = "fixed";
          _themeSwitcher.setTogglerPosition('fixed');
        } else {
          document.getElementById(options.id).style.position = "absolute";
          _themeSwitcher.setTogglerPosition('absolute');
        }

       
      });
      div.innerHTML +=" <small> Fixed Position </small>";
      div.appendChild(input);
     
      document.body.appendChild(div);
    };

    _themeSwitcher.showContextMenu = () => {
      let contextMenu =  _themeSwitcher.getContextMenu();
      if (contextMenu) {
        contextMenu.style.display = "block";
        contextMenu.style.top = localStorage.getItem("bin-theme-toggler-top") || `${20}%`;
        contextMenu.style.left = localStorage.getItem("bin-theme-toggler-left") || `${90}%`;
        contextMenu.style.position =  _themeSwitcher.getTogglerPosition();
      }
    };

    _themeSwitcher.isContextMenuVisible = () => {
       let contextMenu = _themeSwitcher.getContextMenu();
       if(contextMenu) return contextMenu.style.display == "block";
       return false;
    }

    _themeSwitcher.hideContextMenu = () => {
      let contextMenu = _themeSwitcher.getContextMenu();
      if (contextMenu) contextMenu.style.display = "none";
    };

    _themeSwitcher.createToggler = () => {
      let div = document.createElement("div");
      div.classList.add(_themeSwitcher.options.class);
      div.setAttribute("id", _themeSwitcher.options.id);
      if (_themeSwitcher.options.glow) div.classList.add("glow");

      div.style.top = localStorage.getItem("bin-theme-toggler-top") || 20 + "%";
      div.style.left =
        localStorage.getItem("bin-theme-toggler-left") || 90 + "%";
      div.style.position = _themeSwitcher.getTogglerPosition() || "absolute";
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
        MOON_SVG
      );
      div.appendChild(_themeSwitcher.TOGGLER_IMAGE);
    };

    _themeSwitcher.createSun = (div) => {
      _themeSwitcher.TOGGLER_IMAGE.setAttribute(
        "src",
        SUN_SVG
        );
      div.appendChild(_themeSwitcher.TOGGLER_IMAGE);
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
        MOON_SVG
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
        SUN_SVG
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
