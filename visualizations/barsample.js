makePlot();

function makePlot() {
  d3.csv('visualizations/sample.csv', function(data){makeBar(data)}); //enter file name
};

function makeBar(dataset) {
  var x = [];
  var y = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['x column']); //enter name of X column values
    y.push(row['y column']); //enter name of Y column values
  }

  var trace = {
    x: x, 
    y: y,
    type: "bar",
    marker: {color: '#1A5276'} //change to matching color
  };

  var data = [trace];
  
  var layout = {
    title: "sample bar title", //enter title
    xaxis: {title: "x label", tickangle: -35}, //enter x axis label
    yaxis: {title: "y label"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('bar', data, layout);
};