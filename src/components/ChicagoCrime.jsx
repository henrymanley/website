import React from 'react';
import '../css/AboutMe.css';

import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'


export default () => (
        <div className="aboutblock">
            <LineChart download="ChicagoGunCrimeVsCovid"
                       data={{"2017-01-01": 11, "2017-01-02": 6, "2017-01-03": 32, "2017-01-04":21}}
                       // legend={true}
                       xtitle="Time" ytitle="Deaths"
                       title="Gun Crime vs. Covid-19 Deaths in Chicago"
            />
        </div>

);