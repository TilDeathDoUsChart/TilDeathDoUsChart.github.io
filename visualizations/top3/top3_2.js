makeTop3_2Plot();

function makeTop3_2Plot() {
  d3.csv('visualizations/top3/top3_2.csv', function(data){makeTop3_2Scatter(data)}); //enter file name
};

function makeTop3_2Scatter(dataset) {
  var x = [];
  var y = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['top3_2']); //enter name of X column values
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
    title: "Marital Status in July 2014 (Age 23) vs. LCI", //enter title
    xaxis: {
      title: "Marital Status in July 2014 (Age 23)", 
      tickangle: -25}, //enter x axis label
    yaxis: {title: "LCI"}, //enter y axis label
    font: {size: 9}
  };

  Plotly.newPlot('top3_2', data, layout)
}