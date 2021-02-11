import logo from '../../../assets/coronavirus.png';
import './navbar.css';

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
                <li><a href="#Tentang">Tentang</a></li>
                <li><a href="#Gejala">Gejala</a></li>
                <li><a href="#Penularan">Penularan</a></li>
                <li><a href="#Pencegahan">Pencegahan</a></li>
            </ul>
        </nav>`;
    }
}

customElements.define('nav-bar', Navbar);