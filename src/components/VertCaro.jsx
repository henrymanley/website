import React from "react";
import AboutMe from "./AboutMe";
import Headshot from "./Headshot";
import Polici from "./Polici";
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
            <div>
                <div data-aos="fade-up-right" className="aboutblock" style={{
                    width: '60%',
                    maxwidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '30px',
                    marginTop: '30px',
                    minWidth:'330px'
                }}>
                    <AboutMe />
                </div>
                <div data-aos="fade-up-left" className="aboutblock" style={{
                    width: '60%',
                    maxwidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '30px',
                    marginTop: '30px',
                    minWidth:'330px'}}>
                    <Headshot />
                </div>
                <div data-aos="fade-up-right" className="aboutblock" style={{
                    width: '60%',
                    maxwidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '30px',
                    marginTop: '30px',
                    minWidth:'330px'}}>
                    <Polici />
                </div>
            </div>
        );
    }
}

export default Caro;