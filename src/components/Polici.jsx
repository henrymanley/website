import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/AboutMe.css';
import Divider from '@material-ui/core/Divider';
import asset from '../assets/asset.png';
import person from '../assets/person.png';

export default function AboutMe() {
    return (
        <div className ="aboutblock">
            <Typography style = {{
                marginLeft: '12px',
                marginRight: 'auto'
            }}
            >
                <a href="https://www.polici.org/" className="image">
                    <img  alt ="Polici Logo" src={asset} style={{
                        width: '147px',
                        height: '60px',
                        borderRadius:15,
                        padding: '10px'
                    }} />
                </a>

                <p> <i>Bringing Data to Your Day In Under Three Minutes.</i></p>
                <Divider />
                <p>
                    We build ML algorithms to translate academic research findings.
                    Our team of 15 is on a mission to bridge the gap between academia and practice. In training
                    our algorithms, we've stumbled upon some really interesting work we think you should
                    know about. </p>
                <br />

                <div style={{width:'50%',
                    float: 'left'
                }}>
                    <p> <a href="https://www.polici.org/"> Check Us Out </a> 🚀</p>
                    <p> <a href="https://www.polici.org/welcome">Get Our Newsletter</a> 📨</p>
                    <p>Polici In The News 👀</p>
                </div>
                    <div style={{width:'50%', overflow: 'hidden', backgroundColor: 'blue'}}>
                        <a href="https://www.tassakul.com/" className="image">
                            <img  alt ="Polici Cartoon" src={person} style={{
                                width: '300px',
                                height: '150px',
                                right: '20px',
                                bottom: '100px',
                                position: 'absolute'
                            }} />
                        </a>

                </div>

            </Typography>
        </div>
    );
}