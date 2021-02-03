import './section-page.css';

class SectionPage extends HTMLElement {

    set contents(content) {
        this._contents = content;
        this.render();
    }

    render() {
    
            this.innerHTML = `
            <div id="${this._contents.section_menu}" class="section-wrapper">
                <img src="${this._contents.image}" />
                <div class="description-wrapper">
                    <p class="menu">${this._contents.section_menu}</p>
                    <h2 class="title">${this._contents.title}</h2>
                    <p class="description">${this._contents.description}</p>
                    <button-comp title="${this._contents.next_section}" ></button-comp>
                </div>    
            </div>`;
    }
}

customElements.define('section-page', SectionPage);