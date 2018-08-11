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
    marker: {
      color: 'rgb(17, 157, 255, 0.5)',
      size: 25,
      line: {
        color: '#98c4e0',
        width: 3
      }
    }
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