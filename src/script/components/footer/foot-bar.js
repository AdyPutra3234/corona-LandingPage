import './foot-bar.css';

class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="foot-bar1">
                        <ul class="menu">
                            <li><a href="#Tentang">Tentang</a></li>
                            <li><a href="#Gejala">Gejala</a></li>
                            <li><a href="#Penularan">Penularan</a></li>
                            <li><a href="#Pencegahan">Pencegahan</a></li>
                        </ul>
            
                        <ul class="use-link">
                            <li><a href="">Dribble</a></li>
                            <li><a href="">Freepik</a></li>
                            <li><a href="">Flat Icon</a></li>
                        </ul>
                </div>
                <div class="foot-bar2">
                    <p>Copyright</p>
                </div>
            </footer>`;
    }
}

customElements.define('foot-bar', FooterBar);