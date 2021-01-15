import React, {useEffect, useRef} from 'react'
import Chart from "chart.js";

const BarChart = props => {
    const chartRef = useRef();
    const {data, title} = props;

    const labels = Object.keys(data);
    const datasets = labels.map(key => {
        return data[key];
    })

    useEffect(() => {
        if(chartRef.current){
            const myChartRef = chartRef.current.getContext("2d");
    
            new Chart(myChartRef, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [{
                        label: title,
                        data: datasets,
                        backgroundColor: '#2980B9',
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                max: 1,
                                min: 0,
                                stepSize: 0.2
                            }
                        }]
                    },
                    layout: {
                        padding: {
                            left: 50,
                            right: 50,
                            top: 0,
                            bottom: 0
                        }
                    }
                }
            });
        }
    }, [chartRef, labels, datasets, title])
    
    return (
        <div style={{width: '50%'}}>
            <canvas
                id="myChart"
                ref={chartRef}
            />
        </div>
    );
};

export default BarChart;