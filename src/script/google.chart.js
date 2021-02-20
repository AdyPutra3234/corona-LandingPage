import dataSource from './data-source.js';

dataSource.getData('https://api.kawalcorona.com/')

  .then(data => {

    const dataTable = [['Country', 'Deaths']];

    data.forEach(dataCountry => {

      const region = dataCountry.attributes.Country_Region;
      const deaths = dataCountry.attributes.Deaths;

      dataTable.push([region, deaths]);

    });

    google.charts.setOnLoadCallback(drawRegionsMap(dataTable));
    console.log('get data api');

  })

google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': process.env.API_KEY
});

google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap(data = [['Country', 'Deaths']]) {
  var data = google.visualization.arrayToDataTable(data);

  var options = {};

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}

