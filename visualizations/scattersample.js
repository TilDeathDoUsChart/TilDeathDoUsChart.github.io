makePlot();

function makePlot() {
  d3.csv('visualizations/sample.csv', function(data){makeScatter(data)}); //enter file name
};

function makeScatter(dataset) {
  var x = [];
  var y = [];
//   var img_png = d3.select('#png-export');

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['x column']); //enter name of X column values
    y.push(row['y column']); //enter name of Y column values
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
    title: "sample scatter title", //enter title
    xaxis: {title: "x label", tickangle: -35}, //enter x axis label
    yaxis: {title: "y label"}, //enter y axis label
    font: {size: 10}
  };

  Plotly.newPlot('scatter', data, layout)
//   .then(function(gd) {
//     Plotly.toImage(gd,{height:400,width:500})
//       .then(function(url){
//         img_png.attr("src", url);
//         return Plotly.toImage(gd,{format:'png',height:400,width:500});
//     })
//   });
}