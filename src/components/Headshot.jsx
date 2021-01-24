import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../css/AboutMe.css';
import headshot from '../assets/headshot.png';
import cornell from '../assets/cornell.png';
import '../css/App.css';

export default function AboutMe() {
    return (
        <div className ="aboutblock">
            <div style={{height:'15px',
            position:'absolute',
            width:'100%',
            top:'0px',
            backgroundColor:'#F95738',
            marginLeft:'-10px',
            borderTopLeftRadius:'15px',
                borderTopRightRadius:'15px'}}></div>

            <div style={{
                top:'0px',
                bottom:'0px',
                width: '45%',
                borderRadius:'1%'}}>
                <div style={{
                    marginTop:'40px',
                    marginRight: '30px',
                    paddingTop: '10px',
                }}>
                    <img className="image" alt="Headshot" src={headshot}  style={{
                        marginLeft: '30px',
                        marginReft: '30px',
                        borderRadius:'50%',
                        minWidth:'100px',
                        width: '70%',
                        border: '3px solid black',
                        marginBottom:'30px',
                        maxWidth:'200px'
                    }} />
                    <img className="image" alt="Cornell Logo" src={cornell}  style={{
                        marginLeft: '30px',
                        borderRadius:'50%',
                        minWidth:'100px',
                        width: '70%',
                        maxWidth:'200px',
                        filter: 'grayscale(100%)'
                    }} />
                </div>
            </div>
            <Divider orientation='vertical' flexItem/>
            <div>
                <Typography style = {{
                    marginLeft: '20px',
                    marginRight: '15px',
                }}>
                    <h3>
                        <b>Education 🎓</b>
                    </h3>

                    <p>
                        Cornell University <br />
                        College of Human Ecology <br />
                        <br /> Bachelor of Science <br />
                        Policy Analysis and Management
                    </p>

                    <h3><b>Hometown 🏠</b></h3>
                    <p>Delmar, NY</p>

                    <h3><b>Current Position 🔨</b></h3>
                    Research Assistant for<br /> <a href="https://www.nber.org/people/douglas_miller?page=1&perPage=50">Dr. Douglas Miller</a>
                </Typography>
            </div>

        </div>
    );
}