import dataSource from '../../data-source';
import './geoChart.css';

class GeoChart extends HTMLElement {

    constructor() {

        super();
        this.Url_Api = 'https://api.kawalcorona.com/';
        this.render();
        this.loadDataVisualization();
        
    }

    loadDataVisualization() {

        dataSource.getData(this.Url_Api)
            .then(dataResponse => {

                const dataTable = [['Country','Deaths']];

                dataResponse.forEach( data => {
                
                    const region = data.attributes.Country_Region;
                    const deathCases = data.attributes.Deaths;

                    dataTable.push([region, deathCases]);

                });

                google.charts.load('current', {
                    'packages' : ['geochart'],
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    'mapsApiKey' : process.env.API_KEY
                });
        
                google.charts.setOnLoadCallback( () => {

                    const dataVisualization = google.visualization.arrayToDataTable(dataTable);
                    const options = {};
                    const chart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
                    chart.draw(dataVisualization , options);

                });
        })
    }

    render() {

        this.innerHTML = `<div id="geo_chart"></div>`;

    }

}

customElements.define('geo-chart', GeoChart);