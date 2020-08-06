(function(window){
    const ThemeSwitcher =  (options = {
        id:"bin-theme-toggler",
        class:"bin_theme_toggler"
    }) => {
        
        let _themeSwitcher = {
            options
        };

        const DARK_THEME = "BIN_DARK_THEME";
        const LIGHT_THEME = "BIN_LIGHT_THEME";

        

        _themeSwitcher.Init = (initOptions = {}) => {
            _themeSwitcher.TOGGLER_IMAGE = document.createElement('img');
            _themeSwitcher.TOGGLER_IMAGE.classList.add('bin-image-toggler');
            _themeSwitcher.TOGGLER_IMAGE.addEventListener('click', _themeSwitcher.toggleTheme);
            
            _themeSwitcher.createToggler();
            _themeSwitcher.applyTheme();

            return initOptions;
        }

        _themeSwitcher.getCurrentDisplayMode = () =>{
            return localStorage.getItem('bin-theme-toggler-mode');
        }


        _themeSwitcher.createToggler = () =>{
            let div = document.createElement('div');
            div.setAttribute('class', _themeSwitcher.options.class);
            div.setAttribute('id', _themeSwitcher.options.id);
           
            if(_themeSwitcher.getCurrentDisplayMode() === DARK_THEME)
            {
                _themeSwitcher.createSun(div);
            }else{
                _themeSwitcher.createMoon(div);
            }
            document.body.appendChild(div);

        }


        _themeSwitcher.createMoon = (div) =>
        {
            _themeSwitcher.TOGGLER_IMAGE.setAttribute('src','assets/svgs/moon.svg');
            div.appendChild(_themeSwitcher.TOGGLER_IMAGE);


        }

        _themeSwitcher.createSun = (div) => {
            _themeSwitcher.TOGGLER_IMAGE.setAttribute('src','assets/svgs/sun.svg');
            div.appendChild(_themeSwitcher.TOGGLER_IMAGE);

        }

        _themeSwitcher.setTheme = (KEY) => {
            localStorage.setItem('bin-theme-toggler-mode',KEY);
        }

        _themeSwitcher.activateLightTheme = () =>{
            let root = document.getElementsByTagName('html')[0];
            root.classList.remove('bin-dark-theme');
            let images = document.querySelectorAll('img');
            images.forEach(function(img){
                img.classList.remove('bin-dark-theme-image');
            });
        

            _themeSwitcher.setTheme(LIGHT_THEME);     
            _themeSwitcher.TOGGLER_IMAGE.setAttribute('src','assets/svgs/moon.svg');
        }

        _themeSwitcher.activateDarkTheme = () => {
            let root = document.getElementsByTagName('html')[0];
            root.classList.add('bin-dark-theme');
            let images = document.querySelectorAll('img');
            images.forEach(function(img){
                img.classList.add('bin-dark-theme-image');
            });

            _themeSwitcher.setTheme(DARK_THEME);
            _themeSwitcher.TOGGLER_IMAGE.setAttribute('src','assets/svgs/sun.svg');
        }

        _themeSwitcher.toggleTheme = () => {
            if(_themeSwitcher.getCurrentDisplayMode() === DARK_THEME){
               _themeSwitcher.activateLightTheme();
            }else{
                _themeSwitcher.activateDarkTheme();   
            }

        }

        _themeSwitcher.applyTheme = () => {
            if(_themeSwitcher.getCurrentDisplayMode() === DARK_THEME){
                _themeSwitcher.activateDarkTheme();   
            }else{
                _themeSwitcher.activateLightTheme();
            }

        }

        return _themeSwitcher;
    }


    if(typeof(window.ThemeSwitcher === 'undefined')){
        window.ThemeSwitcher = ThemeSwitcher;
    }

})(window);