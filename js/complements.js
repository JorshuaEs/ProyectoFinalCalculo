/* Progress bar */
                    //Source: https://alligator.io/js/progress-bar-javascript-css-variables/
                    var h = document.documentElement,
                        b = document.body,
                        st = 'scrollTop',
                        sh = 'scrollHeight',
                        progress = document.querySelector('#progress'),
                        scroll;
                    var scrollpos = window.scrollY;
                    var header = document.getElementById("header");
                    var title = document.getElementById("title");
                    var inicio = document.getElementById("inicio");
                    var contenido = document.getElementById("contenido");
                    var contenido2 = document.getElementById("contenido2");
                    var contenido3 = document.getElementById("contenido3")
                    var navcontent = document.getElementById("nav-content");
                    
            
                    document.addEventListener('scroll', function() {
            
                        /*Refresh scroll % width*/
                        scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
                        progress.style.setProperty('--scroll', scroll + '%');
            
                        /*Apply classes for slide in bar*/
                        scrollpos = window.scrollY;
            
                        if (scrollpos > 10) {
                            header.classList.add("bg-[#0D4373]");
                            header.classList.add("shadow");
                            title.classList.add("text-white");
                            inicio.classList.add("text-white");
                            contenido.classList.add("text-gray-300");
                            contenido2.classList.add("text-gray-300");
                            contenido3.classList.add("text-gray-300");
                            //navcontent.classList.remove("bg-gray-100");
                            navcontent.classList.add("bg-[#0D4373]");
                        } else {
                            header.classList.remove("bg-[#0D4373]");
                            header.classList.remove("shadow");
                            title.classList.remove("text-white");
                            inicio.classList.remove("text-white");
                            contenido.classList.remove("text-gray-300");
                            contenido2.classList.remove("text-gray-300");
                            contenido3.classList.remove("text-gray-300");
                            navcontent.classList.remove("bg-[#0D4373]");
                            //navcontent.classList.add("bg-gray-100");
            
                        }
            
                    });
            
            
                    //Javascript to toggle the menu
                    document.getElementById('nav-toggle').onclick = function() {
                        document.getElementById("nav-content").classList.toggle("hidden");
                    }