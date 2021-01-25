import React from "react";
import AboutMe from "./AboutMe";
import Headshot from "./Headshot";
import Polici from "./Polici";
import ContactCaro from "./ContactCaro";
import '../css/AboutMe.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();


class Caro extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
        AOS.init({ duration : 2000});
    }

    render() {
        return (
            <div style={{maxWidth:'1300px', margin:'auto'}}>
                <div data-aos="fade-up-right"  style={{
                    width: '60%',
                    maxwidth: '500px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '30px',
                    marginTop: '30px',
                    minWidth:'350px',
                }}>
                    <AboutMe />
                </div>
                <div data-aos="fade-up-left" style={{
                    width: '60%',
                    maxwidth: '500px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '30px',
                    marginTop: '30px',
                    minWidth:'350px'}}>
                    <Headshot />
                </div>
                <div data-aos="fade-up-right" style={{
                    width: '60%',
                    maxwidth: '500px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '80px',
                    marginTop: '30px',
                    minHeight: '300px',
                    minWidth:'350px',}}>
                    <Polici />
                </div>
                <div data-aos="fade-up-left" style={{
                    width: '60%',
                    maxwidth: '500px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '80px',
                    marginTop: '30px',
                    minHeight: '300px',
                    minWidth:'350px',}}>
                    <ContactCaro />
                </div>

            </div>
        );
    }
}

export default Caro;