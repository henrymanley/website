import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import AboutMe from "./AboutMe";
import Headshot from "./Headshot";
import Polici from "./Polici";
import '../css/AboutMe.css';

export default class extends React.Component {
    render() {
        return (
            <CarouselProvider
                totalSlides={3}
                visibleSlides={2}
                infinite={true}
                isIntrinsicHeight={true}
            >
                <Slider style={{
                    marginTop:'20px',
                    marginBottom:'20px',
                    }}>
                    <Slide index={0}>
                        <AboutMe />
                    </Slide>
                    <Slide index={1} style={{
                        marginLeft:'20px',
                        paddingRight: '20px'
                    }}>
                        <Headshot />
                    </Slide>
                    <Slide index={2} style={{
                        margin:'20px',
                        paddingRight: '20px'}}
                    >
                        <Polici />
                    </Slide>
                </Slider>
            </CarouselProvider>
        );
    }
}

