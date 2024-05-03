function plot3(bs_temp) {
  // Data for the chart
  xValues = [];
  for (var i = 0; i < bs_temp.length; i++) {
    xValues.push(i + 1);
  }

  // Trace for the chart
  var trace = {
    x: xValues,
    y: bs_temp,
    type: 'scatter',
    mode: 'lines+markers',
    marker: {
      color: 'white'
    },
    line: {
      color: 'lightgreen' // Line color
    }
  };

  // Data array
  var data = [trace];

  var layout = {
    plot_bgcolor: 'black',
    paper_bgcolor: 'black',
    xaxis: {
      color: 'white',
      title: 'Time' // X-axis text color
    },
    yaxis: {
      color: 'white', // Y-axis text color
      title: 'Temperature',
    },

    // aspectratio: { ratio: 1 }

  };



  // Plot the chart
  Plotly.newPlot('temp', data, layout);

}



var bs_temp = [31.7, 31.7, 31.7, 31.7, 31.7, 31.7, 31.7, 31.7, 31.7, 31.8, 31.8, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 32, 32, 32.1, 32.1, 32.1, 32.2, 32.2, 31.3, 31.8, 31.4, 31.2, 32.6, 32, 32, 32, 32, 32, 32.1, 32, 32, 32, 32, 32.1, 32.1, 32, 32, 32, 32, 32, 32, 32, 32, 32.1, 32, 32.1, 32, 32, 32, 32.1, 32, 32, 32, 32, 32, 31.9, 32, 32, 32, 32, 32, 32.1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 31.9, 32, 31.9, 32, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 32, 32, 32.1, 32, 31.9, 32, 32, 32, 32, 32, 31.9, 32, 32.1, 32, 32, 32, 32, 32, 32.1, 32, 32, 32, 32, 32, 31.9, 32, 31.9, 32.1, 31.9, 32, 31.9, 32.1, 32, 32, 32, 32, 32.1, 32, 32, 31.9, 32, 32, 31.9, 32, 32, 32, 31.9, 32, 32, 32, 32, 32, 32, 32.1, 32, 32.1, 32, 32, 32.1, 32.1, 32.1, 32, 32, 32, 32, 32, 32.1, 32.1, 32, 32, 32.1, 32, 32.2, 32.1, 32.1, 32, 32, 32.2, 32.1, 32, 32, 32.1, 32.1, 32.1, 32.1, 32.2, 32.1, 32.1, 32.2];

plot3(bs_temp);

