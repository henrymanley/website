import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

export default function TextAlignment() {
    return (
        <Typography style = {{
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'rgb(255, 255, 255)',
            padding: '10px'
        }}
            component="div">
            <Box textAlign="left" fontWeight="fontWeightBold" fontSize="h5.fontSize" m={1}>
                Work Experience 🔬
            </Box>

            <Box textAlign="left" marginLeft='12px' m={1}>
                Research Assistant
                <p style={{
                    fontStyle:'italic',
                    fontSize: "12px"}}>
                    Dr. Douglas Miller, Cornell Department of Economics, Ithaca, NY
                </p>
                <Chip label="Stata" />
                <Chip label="Python" />
                <Chip label="Google Cloud" />
            </Box>

            <div fontWeight="fontWeightRegular">
                <ul style = {{
                    fontSize: "12px",
                    textAlign: "left"
                }}
                >
                    <li>Cleaned, scored, and visualized never-seen-before metadata on War on Poverty programs in with Pandas and Stata.</li>
                    <li>Designed and implemented dynamic merging and logistic regression algorithms using k-NN, tokenization, and cosine similarity.</li>
                    <li>Harnessed NLP and bootstrapping techniques to identify potential mismatches, cluster proper matches, and score the model.</li>
                    <li>Built and optimized data pipeline with Python-Stata integration making queries to a Google Cloud Virtual Machine.</li>
                </ul>
                <Divider />
            </div>

            <Box textAlign="left" marginLeft='12px' m={1}>
                Co-Founder
                <p style={{
                    fontStyle:'italic',
                    fontSize: "12px"}}>
                    <a href={"https://www.polici.org/"}>Polici</a>
                </p>
                <Chip label="Python" />
                <Chip label="Stata" />
            </Box>

            <div fontWeight="fontWeightRegular">
                <ul style = {{
                    fontSize: "12px",
                    fontWeight: "fontWeightRegular",
                    textAlign: "left"
                }}
                >
                    <li>Founded a start-up that uses a recurrent neural network to summarize and visualize academic research findings to lay audiences.</li>
                    <li>Raised seed funding to build ML algorithms, team of 15, and sign clients at Cornell, Duke, and the US Dept. of HHS.</li>
                    <li>Developed in-house automated workflows in Python and SQL to boost newsletter KPIs and recommend users specific content.</li>
                    <li>Accelerated business in Life Changing Labs Incubator, Blackstone Techstars Fellowship, and Cornell eLab Accelerator.</li>
                </ul>
                <Divider />
            </div>

            <Box textAlign="left" marginLeft='12px' m={1}>
                Research Assistant
                <p style={{
                    fontStyle:'italic',
                    fontSize: "12px"}}>
                    Dr. Christopher Wildeman, Cornell Department of Policy Analysis and Management, Ithaca, NY
                </p>
                <Chip label="Stata" />
            </Box>

            <div>
                <ul style = {{
                    fontSize: "12px",
                    fontWeight: "fontWeightRegular",
                    textAlign: "left"
                }}
                >
                    <li>Devised, coded, and computed statistical power on a survey conducted on vulnerable youths in the NYC Foster Care system.</li>
                    <li>Created paternal incarceration figures for the Annual Review of Criminology and Annual Review of Sociology in Stata.</li>
                    <li>Cleaned international incarceration datasets and performed statistical balance tests for regression analysis.</li>
                </ul>
                <Divider />
            </div>

            <Box textAlign="left" marginLeft='12px' m={1}>
                Summer Data Science Intern
                <p style={{
                    fontStyle:'italic',
                    fontSize: "12px"}}>
                    Dr. Peter Enns, Roper Center for Public Opinion Research, Ithaca, NY
                </p>
                <Chip label="R" />
                <Chip label="Stata" />
            </Box>


            <div fontWeight="fontWeightRegular">
                <ul style = {{
                    fontSize: "12px",
                    fontWeight: "fontWeightRegular",
                    textAlign: "left"
                }}
                >
                    <li>Wrote dynamic R module that preprocessed and visualized text data from NORC midterm election panel data.</li>
                    <li>Generated research leads based on scorings, analyzed findings, and results published in the &nbsp;
                        <a href={"https://www.washingtonpost.com/politics/2020/03/16/democrats-named-biden-sanders-warren-their-top-picks-18-months-ago-what-did-primaries-change/"}>
                            Washington Post.</a>
                    </li>
                </ul>
            </div>
        </Typography>
    );
}

