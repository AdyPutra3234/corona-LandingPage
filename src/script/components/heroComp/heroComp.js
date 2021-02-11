import heroImg from '../../../assets/hero-img.jpg';
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
                <p>Penyakit COVID-19 adalah penyakit menular yang disebabkan oleh Coronavirus.</p>
                <button-comp title="Tentang"></button-comp>
            </div>
            <img src="${heroImg}"/>
        </div>`;
    }
}

customElements.define('hero-comp', HeroComp);