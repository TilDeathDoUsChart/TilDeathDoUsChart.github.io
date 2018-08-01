makePlot();

function makePlot() {
  d3.csv('visualizations/sample.csv', function(data){makeLine(data)}); //enter file name
};

function makeLine(dataset) {
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
    type: "line",
    marker: {color: rgb(26, 82, 118)} //change to matching color
  };

  var data = [trace];

  var layout = {
    title: "sample line title", //enter title
    xaxis: {title: "x label", tickangle: -35}, //enter x axis label
    yaxis: {title: "y label"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('line', data, layout);
};