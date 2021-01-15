import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/AboutMe.css';
import Divider from '@material-ui/core/Divider';
import headshot from '../assets/headshot.png';
import '../css/App.css';

export default function AboutMe() {
    return (
        <div className ="aboutblock">
            <img className="image"  src={headshot}  style={{
                paddingLeft: '12px',
                paddingRight: '24px',
                marginBottom: 'auto',
                marginTop:'auto',
                borderRadius:'50%',
                position: 'relative',
                width: '200px',
                height: '200px'
            }} />
            <Divider orientation="vertical" flexItem />
            <Typography style = {{
                marginLeft: '12px',
                marginRight: 'auto',
                float: 'right'
            }}>
                <div style={{
                marginRight:'24px'}}>
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
                </div>
            </Typography>
        </div>
    );
}