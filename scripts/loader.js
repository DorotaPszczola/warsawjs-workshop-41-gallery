const loader = {
    show: function() {
        // 1. Get reference to DOM el
        const $loaderPicWrapper = document.querySelector("#photos");

        // 2. Create HTMLImageElement
        const $loader = document.createElement('img');
        $loader.classList.add("loader")

        // 3. Set "src" attr
            $loader.src = "images/810.svg";
        // const loaderPicSRC = "images/810.svg";
        // $loader.setAttribute('src', loaderPicSRC)


        // 4. Render HTMLImageElement into element from 1.are-large
        $loaderPicWrapper.append($loader);

    },
    hide() {    // object method shorthand definition
        // 1. Get reference to DOM container
        const $loaderPicWrapper = document.querySelector("#photos");

        // 2. Get reference to DOM el
        const $loader = $loaderPicWrapper.querySelector('.loader')

        // 3. Remove HTMLImageElement
        $loader.remove();
    }

};