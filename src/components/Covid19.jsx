import React from 'react';
import '../css/AboutMe.css';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
    Title,
    Legend,
} from "@devexpress/dx-react-chart-material-ui";

const data = [
    { argument: 1, value: 5 },
    { argument: 2, value: 20},
    { argument: 3, value: 15 },
    { argument: 4, value: 30 },
    { argument: 5, value: 23 },
    { argument: 6, value: 34 },
];

export default () => (
    <div className="aboutblock" style={{
        marginRight:'20px'
    }}>
        <Chart
            data={data}
            style={{
                width: '100%',
                padding: "10px"
            }}
        >
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries valueField="value" argumentField="argument" />
            <Title text="Example Graph #2" />
            <Legend />
        </Chart>
    </div>

);