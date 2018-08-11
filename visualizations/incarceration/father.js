makeFatherPlot();

function makeFatherPlot() {
  d3.csv('visualizations/incarceration/mother_father.csv', function(data){makeFather(data)}); //enter file name
};

// something

function makeFather(dataset) {
  var x = [];
  var y = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['age']); //enter name of X column values
    y.push(row['father']); //enter name of Y column values
  }

  var trace = {
    x: x,
    y: y,
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: '#947fff', //f=947fff
      opacity: 0.5,
      size: 20,
      line: {
        color: '#3e3087',
        width: 2
      }
    }
  };

  var data = [trace];
  
  var layout = {
    title: "Age at First Incarceration vs. Father Ever in Prison", //enter title
    xaxis: {title: "Age"}, //enter x axis label
    yaxis: {title: "Father Ever in Prison?"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('father', data, layout)
}