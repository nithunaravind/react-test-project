import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';


class SubscribedPool extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
            },
            
            series: [75],              
            labels: ['Cricket'],
        }
    }
    

    openPopupbox() {
        const content = (
            <div className="popup-content">
            <p>3-Data Grid Will be shown here</p>
            <a className="close-btn" href="javascript:;" onClick={PopupboxManager.close}>X</a>
            </div>
        )
        PopupboxManager.open({ content })
    }

    render() {
        
        return (
            
            <div className="content-box donut-list box-50">
             
                <div className="subscribed-container">

                    <h2>Subscribed Pools</h2>

                    <div className="donut">
                    <Chart options={this.state.options} series={this.state.series} type="radialBar" width="200" />
                    </div>

                    <div className="donut">
                    <Chart options={this.state.options} series={this.state.series} type="radialBar" width="200" />
                    </div>

                    <div className="donut">
                    <Chart options={this.state.options} series={this.state.series} type="radialBar" width="200" />
                    </div>

                    <div className="donut">
                    <Chart options={this.state.options} series={this.state.series} type="radialBar" width="200" />
                    </div>
                </div>

                <a className="view-detail" href="javascript:;" onClick={this.openPopupbox}>View Details</a>
                <PopupboxContainer />

            </div>
        );
    }
}

export default SubscribedPool;
