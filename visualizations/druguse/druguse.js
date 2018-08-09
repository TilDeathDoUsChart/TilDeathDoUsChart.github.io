makeDrugUsePlot();

function makeDrugUsePlot() {
  d3.csv('visualizations/druguse/druguse.csv', function(data){makeDrugUse(data)}); //enter file name
};

function makeDrugUse(dataset) {
  var x = [];
  var yes = [];
  var no = [];

  // for (var i = 0; i < dataset.length - 1; i++) {
  //   row = dataset[i];
  //   // x.push(row['x column']); //enter name of X column values
  //   yes.push(row['Yes']); //enter name of Y column values
  //   no.push(row['No'])
  // }

  var trace1 = {
    x: ['Never Married, Not Cohabitating', 'Never Married, Cohabitating', 'Married', 'Legally Separated', 'Divorced', 'Widowed'],
    y: [23.04568528, 20.77431539, 12.52452583, 18.01801802, 16.36363636, 6.25],    
    name:'Yes',
    type:'bar',
    marker:{color:'darkred'}
  };

  var trace2 = {
    x: ['Never Married, Not Cohabitating', 'Never Married, Cohabitating', 'Married', 'Legally Separated', 'Divorced', 'Widowed'],
    y: [76.95431472, 79.22568461, 87.47547417, 81.98198198, 83.63636364, 93.75],
    name:'No',
    type:'bar'
  };

  var data = [trace2, trace1];
  
  var layout = {
    title: "Marijuana Use vs. Marital Status", //enter title
    xaxis: {title: "Marijuana Use in Last 12 Months (Age 34)", tickangle: -25}, //enter x axis label
    yaxis: {title: "% of Responses with Reported Marital Status"}, //enter y axis label
    font: {size: 9},
    barmode: 'stack'
  };

  Plotly.newPlot('druguse', data, layout);
};