makePlot();

function makePlot() {
  d3.csv('visualizations/expecting.csv', function(data){makeScatter(data)}); //enter file name
};

function makeScatter(dataset) {
  var x = [];
  var y = [];
//   var img_png = d3.select('#png-export');

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
    marker: {color: '#1A5276'} //change to matching color
  };

  var data = [trace];
  
  var layout = {
    title: "Accuracy of Expected Children", //enter title
    xaxis: {title: '% Likelihood of Children in 5 Years'},// tickangle: -35}, //enter x axis label
    yaxis: {title: "Number of Children 5 Years Later"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('expecting', data, layout)
//   .then(function(gd) {
//     Plotly.toImage(gd,{height:400,width:500})
//       .then(function(url){
//         img_png.attr("src", url);
//         return Plotly.toImage(gd,{format:'png',height:400,width:500});
//     })
//   });
}