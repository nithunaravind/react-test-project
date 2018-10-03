import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Bargraph extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            xaxis: {
              categories: ['Enrollment CFC', 'Renewal CFC', 'Print Card']
            }
          },
          series: [{
            name: 'Royal',
            data: [30, 40, 25, 50]
          }, {
            name: 'Adnoc',
            data: [23, 12, 54, 61]
          },{
            name: 'Normal',
            data: [23, 12, 54, 61]
          }],
        }
    }

    render() {
        
        return (
            <div className="content-box">
                <div className="content-container">
                  <div className="column">
                  <Chart options={this.state.options} series={this.state.series} type="bar" width="500" />
                  </div>
                </div>
            </div>
        );
    }
}

export default Bargraph;
