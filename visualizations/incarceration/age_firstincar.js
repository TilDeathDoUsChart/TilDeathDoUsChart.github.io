makeAgeFirstIncarPlot();

function makeAgeFirstIncarPlot() {
  d3.csv('visualizations/incarceration/incarceration.csv', function(data){makeAgeFirstIncar(data)}); //enter file name
};

function makeAgeFirstIncar(dataset) {
  var x = [];
  var y = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['Age at first incarc']); //enter name of X column values
    y.push(row['LCI']); //enter name of Y column values
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
    title: "Age at First Incarceration", //enter title
    // xaxis: {title: "x label", tickangle: -35}, //enter x axis label
    // yaxis: {title: "y label"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('age_firstincar', data, layout)
}