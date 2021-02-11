import './section-page.css';
import ceklistImg from '../../../assets/ceklist.png';

class SectionPage extends HTMLElement {

    set contents(content) {
        this._contents = content;
        this.render();
    }
    set backgroundColor(color) {
        this._color = color;
        this.render();
    }

    render() {

            let list = '';
            if (this._contents.list) {
                list = `
                <div class="list">
                    <ul>
                        ${this._contents.list.map(listContent => {
                            return`<li><img src="${ceklistImg}" /> <p>${listContent}</p></li>`;
                        }).join('')}
                    </ul>
                </div>`;
            }

            this.innerHTML = `
            <div id="${this._contents.section_menu}" class="section-wrapper">
                <img src="${this._contents.image}" />
                <div class="description-wrapper">
                    <p class="menu">${this._contents.section_menu}</p>
                    <h2 class="title">${this._contents.title}</h2>
                    <p class="description">${this._contents.description}</p>
                    ${list}
                    ${this._contents.next_section? `<button-comp title="${this._contents.next_section}"></button-comp>`: ''}
                </div>    
            </div>`;
    }
}

customElements.define('section-page', SectionPage);