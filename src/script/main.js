import './components/sectionPage/section-page.js';
import contentsPage from '../script/content.js';

const main = () => {
    
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