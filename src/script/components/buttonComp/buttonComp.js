import './buttonComp.css';

class ButtonComponent extends HTMLElement {

    connectedCallback() {
        this.title = this.getAttribute('title');
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="button-wrapper">
            <a href="#${this.title}"><p>${this.title}</p></a>
        </div>
        `;
    }
}

customElements.define('button-comp', ButtonComponent);