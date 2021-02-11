import './components/sectionPage/section-page.js';
import contentsPage from '../script/content.js';

const main = () => {

    const navMenu = document.querySelectorAll('nav ul li a');

    navMenu.forEach(menu => {

        menu.addEventListener('click', function() {

            navMenu.forEach(activeMenu => {
                activeMenu.classList.remove('menu-clicked');
            });
            
            menu.classList.add('menu-clicked');
        });

    });

    contentsPage.forEach( content => {
    
        const mainContentWrapper = document.querySelector('.content');
        const sectionElement = document.createElement('section-page');

        sectionElement.contents = content;
        mainContentWrapper.appendChild(sectionElement);
    });

    const section_wrapper = document.querySelectorAll('.section-wrapper');
    section_wrapper.forEach( (section, index) => {
        if (index % 2 !== 0) {
            section.style.background = 'white';
            section.style.flexDirection = 'row-reverse';
        }
    });
}

export default main;