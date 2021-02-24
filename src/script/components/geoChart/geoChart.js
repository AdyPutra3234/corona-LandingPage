import dataSource from '../../data-source';
import './geoChart.css';

class GeoChart extends HTMLElement {

    constructor() {

        super();
        this._dataCountries = null;
        this._dataCountry = null;
        this.render();
        this.getData();
        
    }

    get dataCountries() {
        return this._dataCountries;
    }

    set dataCountries(data) {
        this._dataCountries = data;
    }

    get dataCountry() {
        return this._dataCountry;
    }

    set dataCountry(data) {
        this._dataCountry = data;
    }

    
    getData() {

        // get data from multiple API
        Promise.all(
            [
                dataSource.getData('https://covid.mathdro.id/api'),
                dataSource.getData('https://api.kawalcorona.com/')
            ])
            .then(([globalCases,countriesCase]) => {

                this.dataCountries = countriesCase; //set data all country

                const dataTable = [['Negara','Meninggal']];
                
                countriesCase.forEach( data => {
                
                    const region = data.attributes.Country_Region;
                    const deathCases = data.attributes.Deaths;
                    
                    dataTable.push([region, deathCases]); //add data (per country) region and deathCases to dataTable
                    
                });
                this.loadDataVisualizationMap(dataTable); //Load dataTable to data visualization
                
                // render data global
                document.querySelector('.data_global').innerHTML = `
                    <div><p style="color : yellow;">${globalCases.confirmed.value}</p><p>kasus</p></div>
                    <div><p style="color : red;">${globalCases.deaths.value}</p><p>meninggal</p></div>
                    <div><p style="color : limegreen;">${globalCases.recovered.value}</p><p>sembuh</p></div>
                    `;
            })

    }

    loadDataVisualizationMap(dataTable) {

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

                    country = dataVisualization.getValue(select.row , 0); //get country name by click some country on chart

                }); 

                // get data country by filtering data countries by country name
                let dataCountry = this.dataCountries.filter(data => {

                   return data.attributes.Country_Region === country;

                });

                // set data country
                this.dataCountry = dataCountry;

            }

            const chart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
            const dataVisualization = google.visualization.arrayToDataTable(data);
            const options = {};
            chart.draw(dataVisualization , options);
            google.visualization.events.addListener(chart, 'select' , chartOnclickHandler);

        }

    }

    // render component
    render() {

        this.innerHTML = `
        <div class="data_visualization">
            <div class="data_global"></div>
            <div id="geo_chart"></div>
        </div>`;

    }

}

customElements.define('geo-chart', GeoChart);