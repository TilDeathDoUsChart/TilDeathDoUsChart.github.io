makePlot();

function makePlot() {
  d3.csv('visualizations/sample.csv', function(data){makePie(data)}); //enter file name
};

function makePie(dataset) {
  var labels = [];
  var values = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    labels.push(row['x column']); //enter name of X column values
    values.push(row['y column']); //enter name of Y column values
  }

  var trace = {
    labels:labels, 
    values:values,
    type: "pie",
  };

  var data = [trace];
  
  var layout = {
    title: "sample pie title", //enter title
  };

  Plotly.newPlot('pie', data, layout);
};