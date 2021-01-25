import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import MainScreen from "./MainScreen";
import FootInfo from "./FootInfo";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

const Theme = createMuiTheme({
    typography: {
        fontFamily: [
            'JetBrains Mono',
            'sans-serif',
        ].join(','),
    },});

export default function DataProjects(){
    return (

        <div className="App">

            <ThemeProvider theme={Theme}>
                <div className="App-header">
                    <MainScreen />
                </div>

                <div id="dataprojects" style={{backgroundColor: '#e2e1e4', paddingTop:'20px'}}>
                <Typography style = {{
                    margin:'auto',
                    maxWidth:'1000px',
                    padding: '10px',

                }}
                >
                    <Box textAlign="left" fontWeight="fontWeightBold" fontSize='35px' marginLeft='12px'>
                        Data Projects 📈
                    </Box>

                    <Box textAlign="left" marginLeft='12px' m={1} paddingTop="20px">
                        Frogger
                        <p style={{
                            fontStyle:'italic',
                            fontSize: "12px"}}>
                            Dec 2020
                        </p>
                        <Chip style={{color: "white", backgroundColor:'#B3B4B7'}} label="Python" />
                    </Box>

                    <div fontWeight="fontWeightRegular">
                        <ul style = {{
                            fontSize: "12px",
                            textAlign: "left",
                            paddingBottom:"12px"
                        }}
                        >
                            <li>Coded the functionality and gameplay of Frogger in Python.</li>
                            <li>Implemented coroutines for life-like game animations.</li>
                        </ul>
                        <Divider />
                    </div>


                    <Box textAlign="left" marginLeft='12px' m={1} paddingTop='12px'>
                        Incubating fear? How news outlets encourage and spread talk of global disease.
                        <p style={{
                            fontStyle:'italic',
                            fontSize: "12px",
                        }}>
                            Jun 2020 – Sep 2020
                        </p>
                        <Chip style={{color: "white", backgroundColor:'#B3B4B7'}} label="Python" />
                        <Chip style={{color: "white", backgroundColor:'#B3B4B7'}} label="R" />
                        <Chip style={{color: "white", backgroundColor:'#B3B4B7'}} label="Stata" />
                        <Chip style={{color: "white", backgroundColor:'#B3B4B7'}} label="SQL" />
                    </Box>

                    <div fontWeight="fontWeightRegular">
                        <ul style = {{
                            fontSize: "12px",
                            textAlign: "left",
                            paddingBottom:"12px"
                        }}
                        >
                            <li>Scraped Tweets from major news companies in R to build master data set for sentiment analysis.</li>
                            <li>Utilized network analysis to estimate language use over time with respect to political lean, confirmed cases, and other covariates.</li>
                            <li>Found high variability in “extreme” news source language over time, with significant estimate coefficients on all regressors. </li>
                        </ul>
                        <Divider />
                    </div>

                    <Box textAlign="left" marginLeft='12px' m={1} paddingTop='12px'>
                        Fixed-Effects Prediction Model for COVID-19 Shelter-in-Place Policies on Daily Ozone Levels.
                        <p style={{
                            fontStyle:'italic',
                            fontSize: "12px"}}>
                            May 2020 – Aug 2020
                        </p>
                        <Chip style={{color: "white", backgroundColor:'#B3B4B7'}} label="Stata" />
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
                    </div>
                </Typography>
            </div>
                <div className="App-footer">
                    <footer>
                        <FootInfo />
                    </footer>
                </div>


            </ThemeProvider>
        </div>


    );
}