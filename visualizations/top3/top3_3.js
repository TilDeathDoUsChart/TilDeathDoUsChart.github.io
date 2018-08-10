makeTop3_3Plot();

function makeTop3_3Plot() {
  d3.csv('visualizations/top3/top3_3.csv', function(data){makeTop3_3Scatter(data)}); //enter file name
};

function makeTop3_3Scatter(dataset) {
  var x = [];
  var y = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['top3_3']); //enter name of X column values
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
    title: "Relationship of Household Parent Figure(s)/Guardian(s) in 2002 (Age 21) vs. LCI", //enter title
    xaxis: {title: "Relationship of Household Parent Figure(s)/Guardian(s) in 2002 (Age 21)", tickangle: -25}, //enter x axis label
    yaxis: {title: "LCI"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('top3_3', data, layout)
}