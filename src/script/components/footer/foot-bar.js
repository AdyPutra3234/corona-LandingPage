import './foot-bar.css';

class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="foot-bar1">
                        <ul>
                            <li>Data Powered By : <a href="https://covid19api.com/">Covid Api</a></li>
                            <li>DataVisualization : <a href="https://developers.google.com/chart/interactive/docs/gallery/geochart">Google Chart</a></li>
                        </ul>

                        <div class="useLinks">
                            <p style = "color:white; font-weight:bold;">Use Link's</p>
                            <ul>
                                <li><a href="https://dribbble.com">Dribble</a></li>
                                <li><a href="https://www.freepik.com">Freepik</a></li>
                                <li><a href="https://www.flaticon.com">Flat Icon</a></li>
                            </ul>
                        </div>
                </div>
                <div class="foot-bar2">
                    <p>Copyright &copy; 2021 Corona</p>
                </div>
            </footer>`;
    }
}

customElements.define('foot-bar', FooterBar);