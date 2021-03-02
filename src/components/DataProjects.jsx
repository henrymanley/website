import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import MainScreen from "./MainScreen";
import FootInfo from "./FootInfo";
import '../css/AboutMe.css';
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

                <div id="dataprojects"
                     style={{backgroundColor: '#e2e1e4', paddingTop:'10px', width:'80%', margin:'auto'}}>
                <Typography style = {{
                    margin:'auto',
                    maxWidth:'1000px',
                    padding: '10px'}}
                >

                    <div className="shadowt">
                        <h1  style={{fontSize:'4vw', color:'white'}}>Data Projects 📈 </h1>
                        {/*<div className="meter">*/}
                        {/*    <span style={{width:"80%"}}> <span className="progress"></span></span>*/}
                        {/*</div>*/}
                    </div>
                    <br />


                    <div className="aboutblock" style={{marginBottom:'40px'}}>
                        <div style={{width:'100%', marginLeft:'14px'}}>
                            <h2> 🔍 Nowcasting Unemployment with Google Trends </h2>

                            <p style={{
                                fontStyle:'italic',
                                fontSize: "12px"}}>
                                Feb 2021 -</p>
                            <Divider />
                            <br />
                            <Chip  label="Python" />
                            <Chip  label="Stata" />

                            <ul style = {{
                                fontSize: "12px",
                                textAlign: "left",
                                paddingBottom:"12px"}}>
                                <li>Built unsupervised state-industry level U-3 prediction model in Python, implementing Google Trends API and BLS API</li>
                            </ul>
                        </div>
                    </div>


                    <div className="aboutblock" style={{marginBottom:'40px'}}>
                        <div style={{width:'100%', marginLeft:'14px'}}>
                            <h2> 👾 Frogger </h2>

                            <p style={{
                                fontStyle:'italic',
                                fontSize: "12px"}}>
                                Dec 2020</p>
                            <Divider />
                            <br />
                            <Chip  label="Python" />

                            <ul style = {{
                                fontSize: "12px",
                                textAlign: "left",
                                paddingBottom:"12px"}}>
                                <li>Coded the functionality and gameplay of Frogger in Python.</li>
                                <li>Implemented coroutines for life-like game animations.</li>
                            </ul>
                        </div>
                        </div>
                    <div className="aboutblock" style={{marginBottom:'40px'}}>
                        <div style={{width:'100%', marginLeft:'14px'}}>
                            <h2>🧬 Incubating fear? How news outlets encourage and spread talk of global disease. </h2>

                            <p style={{
                                fontStyle:'italic',
                                fontSize: "12px"}}>
                                Jun 2020 – Sep 2020</p>
                            <Divider />
                            <br />
                            <Chip label="Python" />
                            <Chip label="R" />
                            <Chip label="Stata" />
                            <Chip label="SQL" />

                            <ul style = {{
                                fontSize: "12px",
                                textAlign: "left",
                                paddingBottom:"12px"}}>
                                <li>Scraped Tweets from major news companies in R to build master data set for sentiment analysis.</li>
                                <li>Utilized network analysis to estimate language use over time with respect to political lean, confirmed cases, and other covariates.</li>
                                <li>Found high variability in “extreme” news source language over time, with significant estimate coefficients on all regressors. </li>
                            </ul>
                        </div>
                    </div>



                    <div className="aboutblock" style={{marginBottom:'40px'}}>
                        <div style={{width:'100%', marginLeft:'14px'}}>
                            <h2> 🏠 Fixed-Effects Prediction Model for COVID-19 Shelter-in-Place Policies on Daily Ozone Levels.</h2>

                            <p style={{
                                fontStyle:'italic',
                                fontSize: "12px"}}>
                                May 2020 – Aug 2020</p>
                            <Divider />
                            <br />
                            <Chip label="Stata" />


                            <ul style = {{
                                fontSize: "12px",
                                textAlign: "left",
                                paddingBottom:"12px"}}>
                                <li>Designed fixed-effects event-study model to measure the effects of statewide COVID-19 shelter-in-place policies on ozone levels.</li>
                                <li>Discovered a strong-correlation between decrease in county-level ozone levels and shelter in place policies in large urban areas.</li>
                            </ul>
                        </div>
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