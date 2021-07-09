import './detail.css';

class Detail extends HTMLElement {

    set dataDetail(data) {
        this._data = data[0];
        this.render();
    }
    
    render() {

        this.innerHTML = `
            <div class="detail" >
                <p style="font-size:1.2rem;">${this._data.Country}</p>
                <div class="detail-case">
                    <div style="color:yellow;">${this._data.TotalConfirmed}</div>
                    <div style="color:red;">${this._data.TotalDeaths}</div>
                    <div style="color:limegreen;">${this._data.TotalRecovered}</div>
                </div>
                <div><button id="close_detail">close</button></div>
            </div>`;

        document.getElementById('close_detail').addEventListener('click', function() {
            const detail_wrapper = document.getElementById('detail_wrapper');
            detail_wrapper.style.height = '0';
            
        })
    }
}

customElements.define('box-detail', Detail);
