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
    name: 'Father',
    marker: {
      color: '#947fff',
      opacity: 0.5,
      size: 20,
      line: {
        color: '#3e3087',
        width: 2
      }
    }
  };

  var trace2 = {
    x: x, 
    y: y2,
    type: 'scatter',
    mode: 'markers',
    name: 'Mother',
    marker: {
      color: '#f9e84f',
      opacity: 0.5,
      size: 20,
      line: {
        color: '#998d26',
        width: 2
      }
    }
  };

  var data = [trace1, trace2];
  
  var layout = {
    title: "Age at First Incarceration vs. Parent Ever in Prison", //enter title
    xaxis: {title: "Age"}, //enter x axis label
    yaxis: {title: "Parent Ever in Prison?"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('mother_father', data, layout)
}