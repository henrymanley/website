import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../css/AboutMe.css';
import '../css/App.css';
import Contact from "./Contact";

export default function ContactCaro() {
    return (
        <div className ="aboutblock">
            <div style={{height:'15px',
                position:'absolute',
                width:'100%',
                top:'0px',
                backgroundColor:'#3C91E6',
                marginLeft:'-10px',
                borderTopLeftRadius:'15px',
                borderTopRightRadius:'15px'}}></div>
            <Contact />

            </div>
        );
        }


