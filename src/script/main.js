import './components/sectionPage/section-page.js';
import contentsPage from '../script/content.js';

const main = () => {

// event click menu desktop
    const navMenu = document.querySelectorAll('nav ul li a');

    navMenu.forEach(menu => {

        menu.addEventListener('click', function() {

            navMenu.forEach(activeMenu => {
                activeMenu.classList.remove('menu-clicked');
            });
            
            menu.classList.add('menu-clicked');
        });

    });

// Load and render Content
    contentsPage.forEach( content => {
    
        const mainContentWrapper = document.querySelector('.content');
        const sectionElement = document.createElement('section-page');

        sectionElement.contents = content;
        mainContentWrapper.appendChild(sectionElement);
    });

// Make content strip style
    const section_wrapper = document.querySelectorAll('.section-wrapper');
    section_wrapper.forEach( (section, index) => {
        if (index % 2 !== 0) {
            section.style.background = 'white';
            section.style.flexDirection = 'row-reverse';
        }
    });

// Show responsive mobile-menu
    const mobile_menu = document.querySelector('.mobile-menu');
    const humberger_icon = document.querySelector('.humberger-icon');
    const stretch_top = document.querySelector('.stretch-top'); 
    const stretch_mid = document.querySelector('.stretch-mid'); 
    const stretch_bottom = document.querySelector('.stretch-bottom'); 

    humberger_icon.addEventListener('click', () => {

        mobile_menu.classList.toggle('show-mobile-menu');

        if (mobile_menu.classList.contains('show-mobile-menu')) {

            stretch_mid.style.width = '0';
            stretch_top.style.transform = 'rotate(45deg) translate(3px, 0)';
            stretch_bottom.style.transform = 'rotate(-45deg) translate(3px, 0)';

        } else {

            stretch_mid.style.width = '85%';
            stretch_top.style.transform = 'rotate(0deg)';
            stretch_bottom.style.transform = 'rotate(0deg)';
            
        }
    })
}

export default main;