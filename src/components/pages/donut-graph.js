import React, { Component } from 'react';
import Chart from 'react-apexcharts';


class Donutgraph extends Component {

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

    render() {
        
        return (
            
            <div className="content-box donut-list box-50">
             
                <div className="content-container">
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
            </div>
        );
    }
}

export default Donutgraph;
