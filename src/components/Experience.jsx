import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import MainScreen from "./MainScreen";
import FootInfo from "./FootInfo";
import '../css/App.css';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

const Theme = createMuiTheme({
    typography: {
        fontFamily: [
            'JetBrains Mono',
            'sans-serif',
        ].join(','),
    },});


export default function TextAlignment() {
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
                            <h1  style={{fontSize:'4vw', color:'white'}}>Work Experience 🔬 </h1>
                            {/*<div className="meter">*/}
                            {/*    <span style={{width:"80%"}}> <span className="progress"></span></span>*/}
                            {/*</div>*/}
                        </div>
                        <br />


                        <div className="aboutblock" style={{marginBottom:'40px'}}>
                            <div style={{width:'100%', marginLeft:'14px'}}>
                                <h2>🧮 Research Assistant</h2>

                                <p style={{
                                    fontStyle:'italic',
                                    fontSize: "12px"}}>
                                    Dr. Douglas Miller, Cornell Department of Economics, Ithaca, NY</p>
                                <Divider />
                                <br />
                                <Chip  label="Stata" />
                                <Chip  label="Python" />
                                <Chip  label="Pandas" />
                                <Chip  label="Google Cloud" />

                                <ul style = {{
                                    fontSize: "12px",
                                    textAlign: "left",
                                    paddingBottom:"12px"}}>
                                    <li>Cleaned, scored, and visualized never-seen-before metadata on War on Poverty programs in with Pandas and Stata.</li>
                                    <li>Designed and implemented dynamic merging and logistic regression algorithms using k-NN, tokenization, and cosine similarity.</li>
                                    <li>Harnessed NLP and bootstrapping techniques to identify potential mismatches, cluster proper matches, and score the model.</li>
                                    <li>Built and optimized data pipeline with Python-Stata integration making queries to a Google Cloud Virtual Machine.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="aboutblock" style={{marginBottom:'40px'}}>
                            <div style={{width:'100%', marginLeft:'14px'}}>
                                <h2>💡 Co-Founder</h2>

                                <p style={{
                                    fontStyle:'italic',
                                    fontSize: "12px"}}>
                                    <a href={"https://www.polici.org/"}>Polici</a> </p>
                                <Divider />
                                <br />

                                <Chip label="Python" />
                                <Chip label="React" />
                                <Chip label="CSS" />
                                <Chip label="HTML" />
                                <Chip label="Node.js" />
                                <Chip label="Stata" />

                                <ul style = {{
                                    fontSize: "12px",
                                    textAlign: "left",
                                    paddingBottom:"12px"}}>
                                    <li>Founded a start-up that uses a recurrent neural network to summarize and visualize academic research findings to lay audiences.</li>
                                    <li>Raised seed funding to build ML algorithms, team of 15, and sign clients at Cornell, Duke, and the US Dept. of HHS.</li>
                                    <li>Developed in-house web application in React and NodeJS for newsletter submission, dissemination, and subscription.</li>
                                    <li>Accelerated business in Life Changing Labs Incubator, Blackstone Techstars Fellowship, and Cornell eLab Accelerator.</li>
                                </ul>
                            </div>
                        </div>



                        <div className="aboutblock" style={{marginBottom:'40px'}}>
                            <div style={{width:'100%', marginLeft:'14px'}}>
                                <h2>🧮 Research Assistant </h2>

                                <p style={{
                                    fontStyle:'italic',
                                    fontSize: "12px"}}>
                                    Dr. Christopher Wildeman, Cornell Department of Policy Analysis and Management, Ithaca, NY</p>
                                <Divider />
                                <br />
                                <Chip label="Stata" />


                                <ul style = {{
                                    fontSize: "12px",
                                    textAlign: "left",
                                    paddingBottom:"12px"}}>
                                    <li>Devised, coded, and computed statistical power on a survey conducted on vulnerable youths in the NYC Foster Care system.</li>
                                    <li>Created paternal incarceration figures for the Annual Review of Criminology and Annual Review of Sociology in Stata.</li>
                                    <li>Cleaned international incarceration datasets and performed statistical balance tests for regression analysis.</li>
                                </ul>
                            </div>
                        </div>


                        <div className="aboutblock" style={{marginBottom:'40px'}}>
                            <div style={{width:'100%', marginLeft:'14px'}}>
                                <h2>📊 Summer Data Science Intern </h2>

                                <p style={{
                                    fontStyle:'italic',
                                    fontSize: "12px"}}>
                                    Dr. Peter Enns, Roper Center for Public Opinion Research, Ithaca, NY</p>
                                <Divider />
                                <br />
                                <Chip label="Stata" />


                                <ul style = {{
                                    fontSize: "12px",
                                    textAlign: "left",
                                    paddingBottom:"12px"}}>
                                    <li>Wrote dynamic R module that preprocessed and visualized text data from NORC midterm election panel data.</li>
                                    <li>Generated research leads based on scorings, analyzed findings, and results published in the &nbsp;
                                        <a href={"https://www.washingtonpost.com/politics/2020/03/16/democrats-named-biden-sanders-warren-their-top-picks-18-months-ago-what-did-primaries-change/"}>
                                            Washington Post.</a>
                                    </li>
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

