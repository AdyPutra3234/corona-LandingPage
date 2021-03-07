import logo from '../../../assets/coronavirus.png';
import './navbar.css';

class Navbar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="navbar">
            <nav>
                <div class="logo">
                    <img src="${logo}">
                    <a href="">Corona</a>
                </div>
                <ul>
                    <li><a class="Kasus" href="#Kasus">Kasus</a></li>
                    <li><a class="Tentang" href="#Tentang">Tentang</a></li>
                    <li><a class="Gejala" href="#Gejala">Gejala</a></li>
                    <li><a class="Penularan" href="#Penularan">Penularan</a></li>
                    <li><a class="Pencegahan" href="#Pencegahan">Pencegahan</a></li>
                </ul>
                <button class="humberger-icon">
                    <span class="stretch-top"></span>
                    <span class="stretch-mid"></span>
                    <span class="stretch-bottom"></span>
                </button>
            </nav>
            <div class="mobile-menu">
                <ul>
                    <li><a class="Kasus" href="#Kasus">Kasus</a></li>
                    <li><a href="#Tentang">Tentang</a></li>
                    <li><a href="#Gejala">Gejala</a></li>
                    <li><a href="#Penularan">Penularan</a></li>
                    <li><a href="#Pencegahan">Pencegahan</a></li>
                </ul>
            </div>
        </div>`;
    }
}

customElements.define('nav-bar', Navbar);