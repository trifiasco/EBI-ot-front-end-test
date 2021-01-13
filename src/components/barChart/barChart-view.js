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
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                maxTicksLimit: 4,
                            }
                        }]
                    }
                }
            });
        }
    }, [chartRef, labels, datasets, title])
    
    return (
        <div style={{width: '40%'}}>
            <canvas
                id="myChart"
                ref={chartRef}
            />
        </div>
    );
};

export default BarChart;