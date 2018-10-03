import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class RoyalTat extends Component {

constructor(props) {
  super(props);

  this.state = {
    options: {
      xaxis: {
        categories: ['Enrollment', 'Renewal', 'Edit Member', 'Print']
      }
    },
    series: [{
      name: 'Today',
      data: [30, 40, 25, 50]
    }, {
      name: 'Yesterday',
      data: [23, 12, 54, 61]
    }],
  }
}

render() {
    
    return (
        <div className="content-box  box-33">
            <div className="royal-container">
                <h2>Royal : Tat</h2>
                <div className="area">
                <Chart options={this.state.options} series={this.state.series} type="bar" width="85%" />
                </div>
            </div>
        </div>
    );
}
}

export default RoyalTat;
