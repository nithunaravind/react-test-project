import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';

class MyTaskStatus extends Component {

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
            data: [23, 12, 44, 31]
          },{
            name: 'Normal',
            data: [23, 12, 54, 61]
          }],
        }
    }

    openPopupbox() {
        const content = (
            <div className="popup-content">
            <p>2-Data Grid Will be shown here</p>
            <a className="close-btn" href="javascript:;" onClick={PopupboxManager.close}>X</a>
            </div>
        )
        PopupboxManager.open({ content })
    }

    render() {
        
        return (
            <div className="content-box box-25">

                <div className="my-task-container">
                    
                    <h2>My Task status</h2>
                    <div className="column">
                    <Chart options={this.state.options} series={this.state.series} type="bar" width="350" />
                    </div>
                </div>

                <a className="view-detail" href="javascript:;" onClick={this.openPopupbox}>View Details</a>
                <PopupboxContainer />

            </div>
        );
    }
}

export default MyTaskStatus;
