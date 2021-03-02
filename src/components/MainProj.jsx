import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/AboutMe.css';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import google from '../assets/google.png';
import bls from '../assets/bls.png';
import graph from '../assets/scatter.gif';

export default function MainProj() {
    return (
        <div className="aboutblock">
            <div style={{
                height: '15px',
                position: 'absolute',
                width: '100%',
                top: '0px',
                backgroundColor: '#00A6A6',
                marginLeft: '-10px',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px'
            }}></div>

            <Typography style={{
                marginLeft: '12px',
                marginRight: 'auto'
            }}
            >
                <h2>My Research</h2>
                <p> Nowcasting state-industry level U3 with Google Trends data. | <a href={"https://github.com/henrymanley/googletrends"}> See Repository </a>
                </p>

                <Divider/>

                <p style ={{fontStyle: 'italic', fontSize:'14px', textAlign:'center', marginTop:'10px'}}>Google Searches for 'Unemployment' and 'Google Flights' vs. Unemployment to Population Ratio, New York 2010 - 2019</p>

                <div>
                    <a href={"https://github.com/henrymanley/googletrends"}>
                        <img className="image" alt="BLS" src={graph}  style={{
                            borderRadius:'10%',
                            minWidth:'320px',
                            width: '100%',
                            maxWidth:'700px',
                            marginTop:'-20px'
                        }} />
                    </a>
                </div>
                <p>
                    <Divider/>
                <p style ={{fontSize:'10px', textAlign:'center'}}>Data: BLS, Google Trends</p>
                </p>
            </Typography>
        </div>
    );
}