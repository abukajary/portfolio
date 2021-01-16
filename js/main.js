window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.header_tab__link');
    let info = document.querySelectorAll('.header_tab');
    let tabContent = document.querySelectorAll('.block');

    let hideTabContent = elNum => {
        for(let i = elNum; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].style.borderBottom = "2px solid black";
        }
    };

    hideTabContent(1);
    tab[0].style.borderBottom = "2px solid white";

    let showTabContent = el => {
        if(tabContent[el].classList.contains('hide')) {
            tabContent[el].classList.remove('hide');
            tabContent[el].classList.add('show');
            tab[el].style.borderBottom = "2px solid white";
        }
    };
    info[0].addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('header_tab__link')) {
            for(let i = 0; i < tab.length; i++) {
                if(target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // dark mode
    let dark_mode = document.querySelector('#nightMode');
    let links = document.querySelectorAll("a");
    let dMode = 0;

    dark_mode.addEventListener('click', function() {
        if (dMode) {
            dMode = 0;
            document.body.classList.remove('dark');
            links.forEach((item)=> {
                item.style.color = "black";
            })
            dark_mode.textContent = "Light mode";
        }
        else {
            dMode = 1;
            document.body.classList.add('dark');
            links.forEach((item)=> {
                item.style.color = "white";
            })
            dark_mode.textContent = "Dark mode";
        }
    });

});