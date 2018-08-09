makeMotherFatherPlot();

function makeMotherFatherPlot() {
  d3.csv('visualizations/incarceration/incarceration.csv', function(data){makeMotherFather(data)}); //enter file name
};

function makeMotherFather(dataset) {
  var x = [];
  var y1 = [];
  var y2 = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['Age at first incarc']); //enter name of X column values
    y1.push(row['Father ever prison']); //enter name of Y column values
    y2.push(row['Mother ever prison']);
  }

  var trace1 = {
    x: x, 
    y: y1,
    type: 'scatter',
    mode: 'markers',
    name: 'Father Ever in Prison'
    // marker: {color: '#1A5276'} //change to matching color
  };

  var trace2 = {
    x: x, 
    y: y2,
    type: 'scatter',
    mode: 'markers',
    name: 'Mother Ever in Prison'
    // marker: {color: '#1A5276'} //change to matching color
  };

  var data = [trace1, trace2];
  
  var layout = {
    title: "Age at First Incarceration", //enter title
    // xaxis: {title: "x label", tickangle: -35}, //enter x axis label
    // yaxis: {title: "y label"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('mother_father', data, layout)
}