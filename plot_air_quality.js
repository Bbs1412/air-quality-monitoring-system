function plot2_air_quality(bs_mq135) {
  // Data for the chart
  const len = bs_mq135.length;
  const div = Math.floor(len / 24);
  let j = 0;
  let num = 0;
  xValues = [];

  for (let i = 0; i < len - 1; i++) {
    if (i == num && j != 24) {
      xValues.push(`${j}:00`);
      num += div;
      j++;
    }
    else {
      xValues.push("xx:" + i);
    }
  }
  xValues.push('24:00');

  // Trace for the chart
  var trace = {
    x: xValues,
    y: bs_mq135,
    type: 'scatter',
    mode: 'lines+markers',
    marker: {
      color: 'white',
      size: 3
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
      title: 'Time',
      tickvals: ["0:00", "4:00", "8:00", "12:00", "16:00", "20:00", "24:00"]
    },
    yaxis: {
      color: 'white', // Y-axis text color
      title: 'Air Quality',
    }

  };



  // Plot the chart
  Plotly.newPlot('airquality', data, layout);

}


// plot2_air_quality(bs_mq135);

