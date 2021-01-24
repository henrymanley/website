import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/AboutMe.css';
import Divider from '@material-ui/core/Divider';
import asset from '../assets/asset.png';
import person from '../assets/person.png';

export default function AboutMe() {
    return (
        <div className ="aboutblock">
            <div style={{height:'15px',
                position:'absolute',
                width:'100%',
                top:'0px',
                backgroundColor:'#A40E4C',
                marginLeft:'-10px',
                borderTopLeftRadius:'15px',
                borderTopRightRadius:'15px'
            }}></div>

            <Typography style = {{
                marginLeft: '12px',
                marginRight: 'auto'
            }}
            >
                <div>
                    <a href="https://www.polici.org/" className="image">
                        <img  alt ="Polici Logo" src={asset} style={{
                            width: '147px',
                            height: '60px',
                            borderRadius:15,
                            padding: '10px',
                            margin:'auto',
                            float: 'left',
                            marginTop:'5px'
                        }} />
                    </a>
                    <div style={{
                        textAlign: 'right',
                        padding: '10px',
                        marginTop:'20px'
                    }}><i>Co-Founder</i></div>
                </div>

                <div style={{clear:'both'}}></div>
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
                </div>
                    <div style={{width:'50%', overflow: 'hidden', backgroundColor: 'blue'}}>
                        <a href="https://www.tassakul.com/" className="image">
                            <img  alt ="Polici Cartoon" src={person} style={{
                                width: '50%',
                                minWidth:'100px',
                                maxWidth:"330px",
                                bottom: '2px',
                                position: 'fixed',
                                filter: 'grayscale(100%)'
                            }} />
                        </a>

                </div>

            </Typography>
        </div>
    );
}