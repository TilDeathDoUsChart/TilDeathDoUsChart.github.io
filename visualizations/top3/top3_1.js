makeTop3_1Plot();

function makeTop3_1Plot() {
  d3.csv('visualizations/top3/top3.csv', function(data){makeTop3_1Scatter(data)}); //enter file name
};

function makeTop3_1Scatter(dataset) {
  var x = [];
  var y = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['R3500900']); //enter name of X column values
    y.push(row['LCI']); //enter name of Y column values
  }

  var trace = {
    x: x, 
    y: y,
    type: 'scatter',
    mode: 'markers'//,
    // marker: {color: '#1A5276'} //change to matching color
  };

  var data = [trace];
  
  var layout = {
    title: "Engaged in Sexual Activity Before 1999 (Age 18) vs. LCI", //enter title
    xaxis: {title: "Engaged in Sexual Activity Before 1999 (Age 18)", tickangle: -35}, //enter x axis label
    yaxis: {title: "LCI"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('top3_1', data, layout)
}