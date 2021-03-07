import './components/sectionPage/section-page.js';
import contentsPage from '../script/content.js';

const main = () => {

// Load and render Content
    contentsPage.forEach( content => {
    
        const mainContentWrapper = document.querySelector('.content');
        const sectionElement = document.createElement('section-page');

        sectionElement.contents = content;
        mainContentWrapper.appendChild(sectionElement);
    });


// nav highlight by click nav menu or scroling page
const navMenu = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    
    let curent = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {

            curent = section.getAttribute('id');

        }

    });

    navMenu.forEach(menu => {

        menu.classList.remove('active-menu');

        if (menu.classList.contains(curent)) {

            menu.classList.add('active-menu');

        }
    });

});


// Make content strip style
   
const stripStyle = () => {

    const section_wrapper = document.querySelectorAll('.section-wrapper');

    section_wrapper.forEach( (section, index) => {

        if (index % 2 !== 0) {
            const smallMedia = window.matchMedia('(max-width: 576px)');

            section.style.background = 'white';

            if (!smallMedia.matches) {

                section.style.flexDirection = 'row-reverse';

            } else {
                section.style.flexDirection = 'column';
            }
        }
                
    });

}

stripStyle();

    window.matchMedia('(min-width: 578px)').addEventListener('change', function() {

        stripStyle();

    })


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