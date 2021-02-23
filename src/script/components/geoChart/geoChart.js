import dataSource from '../../data-source';
import './geoChart.css';

class GeoChart extends HTMLElement {

    connectedCallback() {

        this.render();
        this.getData();
        
    }

    // getData() {

    //     return dataSource.getData('https://api.kawalcorona.com/')
    //     .then(dataResponse => {

    //         const dataTable = [['Country','Deaths']];

    //         dataResponse.forEach( data => {
            
    //             const region = data.attributes.Country_Region;
    //             const deathCases = data.attributes.Deaths;

    //             dataTable.push([region, deathCases]);

    //         });

    //         return dataTable;

    //     })

    // }

    // getDataGlobal() {
    //     return dataSource.getData('https://covid.mathdro.id/api')
    //         .then(result => {
    //             return {
    //                 confirmed : result.confirmed.value,
    //                 deaths : result.deaths.value,
    //                 recovered : result.recovered.value
    //             }
    //         })
    // }

    
    getData() {

        Promise.all(
            [
                dataSource.getData('https://covid.mathdro.id/api'),
                dataSource.getData('https://api.kawalcorona.com/')
            ])
            .then(([globalCases,dataRegions]) => {

                
                const dataTable = [['Negara','Meninggal']];
                
                dataRegions.forEach( data => {
                
                    const region = data.attributes.Country_Region;
                    const deathCases = data.attributes.Deaths;
                    
                    dataTable.push([region, deathCases]);
                    
                });
                this.loadDataVisualizationMap(dataTable);
                
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

        return function() {

            const dataVisualization = google.visualization.arrayToDataTable(data);
            const options = {};
            const chart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
            chart.draw(dataVisualization , options);

        }
    }

    render() {

        this.innerHTML = `
        <div class="data_visualization">
            <div class="data_global"></div>
            <div id="geo_chart"></div>
        </div>`;

    }

}

customElements.define('geo-chart', GeoChart);