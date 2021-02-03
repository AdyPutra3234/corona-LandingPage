import './components/sectionPage/section-page.js';
import contentsPage from '../script/content.js';

const main = () => {
    
    contentsPage.forEach(content => {
    
        const mainContentWrapper = document.querySelector('.content');
        const sectionElement = document.createElement('section-page');
        
        sectionElement.contents = content;
        mainContentWrapper.appendChild(sectionElement);
    
    });
}

export default main;