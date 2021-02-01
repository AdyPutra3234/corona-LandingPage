import './navbar.css';
import logo from '../../assets/coronavirus.png';

class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav>
            <div class="logo">
                <img width="30px" height="30px" src="${logo}">
                <a href="">Corona</a>
            </div>
            <ul>
                <li>About</li>
                <li>Contagion</li>
                <li>Symptoms</li>
                <li>Prevention</li>
            </ul>
        </nav>`;
    }
}

customElements.define('nav-bar', Navbar);