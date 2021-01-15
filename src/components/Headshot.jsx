import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/AboutMe.css';
import Divider from '@material-ui/core/Divider';
import headshot from '../assets/headshot.png';
import cornell from '../assets/cornell.png';
import '../css/App.css';

export default function AboutMe() {
    return (
        <div className ="aboutblock">
            <div style={{
                position: 'relative',
                padding: '10px',
            }}>
                <img className="image" alt="Headshot" src={headshot}  style={{
                    marginBottom: 'auto',
                    marginTop:'auto',
                    borderRadius:'50%',
                    width: '200px',
                    height: '200px',
                    border: '3px solid black'
                }} />

                <img className="image" alt="Cornell Logo" src={cornell}  style={{
                    paddingLeft: '12px',
                    marginBottom: 'auto',
                    marginTop:'auto',
                    borderRadius:'50%',
                    width: '200px',
                    height: '200px'
                }} />
            </div>

            <Divider orientation="vertical" flexItem />
            <Typography style = {{
                marginLeft: '15px',
                marginRight: 'auto',
            }}>
                <h3>
                    <b>Education</b>
                </h3>

                <p>
                    Cornell University, College of Human Ecology <br />
                    Bachelor of Science, Policy Analysis and Management
                </p>

                <h3><b>Current Position</b></h3>
                Research Assistant for <a href="https://www.nber.org/people/douglas_miller?page=1&perPage=50">Dr. Douglas Miller</a>
                <h3><b>Current Personal Project</b></h3>
                <p>Building a newsletter platform from scratch.</p>
            </Typography>
        </div>
    );
}