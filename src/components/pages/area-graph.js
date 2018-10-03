import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class AreaGraph extends Component {

constructor(props) {
  super(props);

  this.state = {
    options: {
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    },
    series: [{
      name: 'Monthly',
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    }, {
      name: 'Weekly',
      data: [23, 12, 54, 61, 32, 56, 81, 19]
    }],
  }
}

render() {
    
    return (
        <div className="content-box">
            <div className="content-container">
              <div className="area">
                <Chart options={this.state.options} series={this.state.series} type="area" width="100%" />
              </div>
            </div>
        </div>
    );
}
}

export default AreaGraph;
