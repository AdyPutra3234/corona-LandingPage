import dataSource from '../../data-source';
import './geoChart.css';

class GeoChart extends HTMLElement {

    constructor() {

        super();
        this.isModalOpen = false;
        this.render();
        this.getData();
        
    }

    // data all country
    get dataCountries() {
        return this._dataCountries;
    }

    set dataCountries(data) {
        this._dataCountries = data;
    }

    // data country
    get dataCountry() {
        return this._dataCountry;
    }

    set dataCountry(data) {
        this._dataCountry = data;
    }

    // data global
    get dataGlobal() {
        return this._dataGlobal;
    }

    set dataGlobal(data) {
        this._dataGlobal = data;
    }

    
    getData() {

        // get data from API
        dataSource.getData('https://api.covid19api.com/summary', {
            header : {
                "X-Access-Token" : process.env.TOKEN,
                "Content-Type" : "application/json"
            }
        })        
            .then(({Global, Countries}) => {

                this.dataCountries = Countries; //set data all country
                this.dataGlobal = Global;
                this.loadDataVisualization();
            })

    }

    loadDataVisualization() {

        const dataTable = [['Code', 'Negara', 'Meninggal']];

        this.dataCountries.forEach( data => {
                
            const code = data.CountryCode;
            const country = data.Country;
            const deathCases = data.TotalDeaths;
            
            dataTable.push([code, country , deathCases]); //add data (per country) region and deathCases to dataTable
            
        });

        //  render data global
                document.querySelector('.data_global').innerHTML = `
                    <div><p style="color : yellow;">${this.dataGlobal.TotalConfirmed}</p><p>kasus</p></div>
                    <div><p style="color : red;">${this.dataGlobal.TotalDeaths}</p><p>meninggal</p></div>
                    <div><p style="color : limegreen;">${this.dataGlobal.TotalRecovered}</p><p>sembuh</p></div>
                    `;

        google.charts.load('current', {
            'packages' : ['geochart'],
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            'mapsApiKey' : process.env.API_KEY
        });
    
            google.charts.setOnLoadCallback(this.drawMapChart(dataTable));
            
        }

    drawMapChart(data) {
        
        return () => {
            
            // Event onclick chart map
            const chartOnclickHandler = () => {

                const selection = chart.getSelection();
                let country = "";

                selection.forEach(select => {

                    country = dataVisualization.getValue(select.row , 1); //get country name by click some country on chart

                }); 
                
                // set data country by filtering data countries by country name
                const countryCases = this.dataCountries.filter(data => {

                    return data.Country === country;
 
                 });

                if (countryCases.length !== 0) {
                    this.dataCountry = countryCases;
                } 

                this.showBoxDetail();

            }

            const checkMedia = () => {
                if (window.matchMedia('(max-width: 500px)').matches) {
                    return 200;
                } else if (window.matchMedia('(max-width: 720px)').matches) {
                    return 300;
                } else {
                    return 400;
                }

            }


            const chart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
            const dataVisualization = google.visualization.arrayToDataTable(data);
            const options = {
                keepAspecRatio : true,
                legend : 'none',
                height : checkMedia(),
            };

            chart.draw(dataVisualization , options);
            google.visualization.events.addListener(chart, 'select' , chartOnclickHandler);

        }

    }

    showBoxDetail() {

        const detail_wrapper = document.getElementById('detail_wrapper');
        const box_detail = document.querySelector('box-detail');

        if (box_detail) {
            box_detail.remove();
        }

        const createElementBoxDetail = document.createElement('box-detail');
        detail_wrapper.appendChild(createElementBoxDetail);
        createElementBoxDetail.dataDetail = this.dataCountry;
        detail_wrapper.style.width = '100%';
        detail_wrapper.style.display = 'flex';
        detail_wrapper.style.height = 'max-content';


    }

    // render component
    render() {

        this.innerHTML = `
        <section id="Kasus" class="data_visualization">
            <div class="data_wrapper">
                <div class="data_global"></div>
                <div id="geo_chart"></div>
            </div>
            <div id="detail_wrapper"></div>
        </section>`;

    }

}

customElements.define('geo-chart', GeoChart);
export default GeoChart;