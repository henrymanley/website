import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Highlighter from "react-highlight-words";
import Chip from '@material-ui/core/Chip';

export default function DataProjects(){
    return (
        <Typography style = {{
            marginLeft: '12px',
            marginRight: 'auto'
        }}
        >
            <Box textAlign="left" fontWeight="fontWeightBold" fontSize="h5.fontSize" m={1}>
                Data Projects
            </Box>

            <Box textAlign="left" m={1}>
                Frogger
                <p style={{
                    fontStyle:'italic',
                    fontSize: "12px"}}>
                    Dec 2020
                </p>
                <Chip label="Python" />
            </Box>

            <div fontWeight="fontWeightRegular">
                <ul style = {{
                    fontSize: "12px",
                    textAlign: "left"
                }}
                >
                    <li>Coded the functionality and gameplay of Frogger in Python.</li>
                    <li>Implemented coroutines for life-like game animations.</li>
                </ul>
                <Divider />
            </div>


            <Box textAlign="left" m={1}>
                Incubating fear? How news outlets encourage and spread talk of global disease.
                <p style={{
                    fontStyle:'italic',
                    fontSize: "12px"}}>
                    Jun 2020 – Sep 2020
                </p>
                <Chip  label="Python" />
                <Chip label="R" />
                <Chip label="Stata" />
                <Chip label="SQL" />
            </Box>

            <div fontWeight="fontWeightRegular">
                <ul style = {{
                    fontSize: "12px",
                    textAlign: "left"
                }}
                >
                    <li>Scraped Tweets from major news companies in R to build master data set for sentiment analysis.</li>
                    <li>Utilized network analysis to estimate language use over time with respect to political lean, confirmed cases, and other covariates.</li>
                    <li>Found high variability in “extreme” news source language over time, with significant estimate coefficients on all regressors. </li>
                </ul>
                <Divider />
            </div>

            <Box textAlign="left" m={1}>
                Fixed-Effects Prediction Model for COVID-19 Shelter-in-Place Policies on Daily Ozone Levels.
                <p style={{
                    fontStyle:'italic',
                    fontSize: "12px"}}>
                    May 2020 – Aug 2020
                </p>
                <Chip label="Stata" />
            </Box>

            <div fontWeight="fontWeightRegular">
                <ul style = {{
                    fontSize: "12px",
                    textAlign: "left"
                }}
                >
                    <li>Designed fixed-effects event-study model to measure the effects of statewide COVID-19 shelter-in-place policies on ozone levels.</li>
                    <li>Discovered a strong-correlation between decrease in county-level ozone levels and shelter in place policies in large urban areas.</li>
                </ul>
                <Divider />
            </div>




        </Typography>
    );
}