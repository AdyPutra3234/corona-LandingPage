import heroImg from '../../assets/hero-img.jpg';
import './heroComp.css';

class HeroComp extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="hero">
            <div class="text-banner">
                <h1>Save <b>yourself</b> </br> Save the <b>world</b></h1>
                <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
                <a href="#about"><p>About Covid-19</p></a>
            </div>
            <img src="${heroImg}"/>
        </div>`;
    }
}

customElements.define('hero-comp', HeroComp);