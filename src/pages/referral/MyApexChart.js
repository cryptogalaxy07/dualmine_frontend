import React, { Component } from "react";
import Chart from "react-apexcharts";

class MyApexChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                plotOptions: {
                    bar: {
                        columnWidth: "80%",
                        dataLabels: {
                            show: false, // top, center, bottom
                        },
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    colors: ["#fff"],
                    width: 0.1,
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    position: "bottom",
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                tooltip: {
                    enabled: false,
                },
                fill: {
                    type: "image",
                    opacity: 1,
                    image: {
                        src: ["assets/images/back.png"],
                        width: 710,
                        height: 600,
                    },
                },
                yaxis: {
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                    },
                },
                grid: {
                    show: false,
                },
                chart: {
                    animations: {
                        enabled: true,
                        easing: "linear",
                        speed: 1500,
                        animateGradually: {
                            enabled: true,
                            delay: 150,
                        },
                        dynamicAnimation: {
                            enabled: true,
                            speed: 350,
                        },
                    },
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
            },
            series: [
                {
                    data: [
                        3, 5, 5, 8, 8, 8, 10, 12, 16, 18, 20, 22, 22, 25, 28,
                        28, 28, 33, 36, 40, 43, 43, 47, 50, 50, 50, 53, 55, 58,
                        58, 61, 65, 65, 65, 65, 65, 70, 73, 76, 76, 76, 84, 89,
                        95, 104, 108, 113, 115, 120, 120,
                    ],
                },
            ],
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="700"
                            height="580"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MyApexChart;
