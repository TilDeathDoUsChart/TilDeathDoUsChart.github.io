makeTop3_1Plot();

function makeTop3_1Plot() {
  d3.csv('visualizations/top3/top3_1.csv', function(data){makeTop3_1Scatter(data)}); //enter file name
};

function makeTop3_1Scatter(dataset) {
  var x = [];
  var y = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['top3_1']); //enter name of X column values
    y.push(row['LCI']); //enter name of Y column values
  }

  var trace = {
    x: x, 
    y: y,
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: '#6de8e0',
      opacity: 0.5,
      size: 20,
      line: {
        color: '#21918a',
        width: 2
      }
    }
  };

  var data = [trace];
  
  var layout = {
    title: "Engaged in Sexual Activity Before 1999 (Age 18) vs. LCI", //enter title
    xaxis: {title: "Engaged in Sexual Activity Before 1999 (Age 18)"}, //enter x axis label
    yaxis: {title: "LCI"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('top3_1', data, layout)
}