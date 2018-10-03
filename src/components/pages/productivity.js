import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';

class Productivity extends Component {

constructor(props) {
  super(props);

  this.state = {
    options: {
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    shadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },   
                    value: {
                        offsetY: -3,
                        fontSize: '22px'
                    }                     
                }
            }
        }
    },
    fill: {
        gradient: {
            enabled: true,
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            gradientToColors: ["#000"],
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        },
    },
    series: [76],
    labels: ['Average Results'],
  }
}

openPopupbox() {
    const content = (
        <div className="popup-content">
        <p>1-Data Grid Will be shown here</p>
        <a className="close-btn" href="javascript:;" onClick={PopupboxManager.close}>X</a>
        </div>
    )
    PopupboxManager.open({ content })
}

render() {
    
    return (
        <div className="content-box box-25">

            <div className="produtivity-container">
            
                <h2>PRODUCTIVITY</h2>

                <div className="radial">
                <Chart options={this.state.options} series={this.state.series} type="radialBar" width="400" />
                </div>

            </div>

            <a className="view-detail" href="javascript:;" onClick={this.openPopupbox}>View Details</a>
            <PopupboxContainer />

        </div>
    );
}
}

export default Productivity;
