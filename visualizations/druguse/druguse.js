makeDrugUsePlot();

function makeDrugUsePlot() {
  d3.csv('visualizations/druguse/druguse.csv', function(data){makeDrugUse(data)}); //enter file name
};

function makeDrugUse(dataset) {
  var x = [];
  var y1 = [];
  var y2 = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['x column']); //enter name of X column values
    y1.push(row['Yes']); //enter name of Y column values
    y2.push(row['No'])
  }

  var trace1 = {
    x:x,
    y:y1,
    name:'Yes',
    type:'bar'
  };

  var trace2 = {
    x:x,
    y:y2,
    name:'No',
    type:'bar'
  };

  // var trace3 = {
  //   x:['Yes', 'No'],
  //   y:[12.52452583, 87.47547417],
  //   name:'Married',
  //   type:'bar'
  // };

  // var trace4 = {
  //   x:['Yes', 'No'],
  //   y:[18.01801802, 81.98198198],
  //   name:'Separated',
  //   type:'bar'
  // };

  // var trace5 = {
  //   x:['Yes', 'No'],
  //   y:[16.36363636, 83.63636364],
  //   name:'Divorced',
  //   type:'bar'
  // };

  // var trace6 = {
  //   x:['Yes', 'No'],
  //   y:[6.25, 93.75],
  //   name:'Widowed',
  //   type:'bar'
  // };

  var data = [trace1, trace2];//trace6, trace5, trace4, trace3, trace2, trace1];
  
  var layout = {
    title: "Marijuana Use vs. Marital Status", //enter title
    xaxis: {title: "Marijuana Use in Last 12 Months (Age 34)"}, //enter x axis label
    yaxis: {title: "% of Responses with Reported Marital Status"}, //enter y axis label
    font: {size: 10},
    barmode: 'stack'
  };

  Plotly.newPlot('druguse', data, layout);
};