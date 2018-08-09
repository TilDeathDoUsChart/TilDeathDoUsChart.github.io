makeExpectingPlot();

function makeExpectingPlot() {
  d3.csv('visualizations/expecting/expecting.csv', function(data){makeExpecting(data)}); //enter file name
};

function makeExpecting(dataset) {
  var x = [];
  var y = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['prediction']); //enter name of X column values
    y.push(row['kids']); //enter name of Y column values
  }

  var trace = {
    x: x, 
    y: y,
    type: 'scatter',
    mode: 'markers',
    marker: {color: '#1A5276'} //change to matching color
  };

  var data = [trace];
  
  var layout = {
    title: "Accuracy of Expected Children", //enter title
    xaxis: {title: '% Likelihood of Children in 5 Years'},// tickangle: -35}, //enter x axis label
    yaxis: {title: "Number of Children 5 Years Later"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('expecting', data, layout)
}