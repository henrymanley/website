import React from "react";
import AboutMe from "./AboutMe";
import Headshot from "./Headshot";
import Polici from "./Polici";
import '../css/AboutMe.css';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={20}
                orientation={"vertical"}
                totalSlides={3}
                visibleSlides={3}>

                <div >
                    <Slider style={{ marginBottom: '30px', marginTop: '30px'
                    }}>
                        <Slide index={0} style={{
                            width: '560px',
                            height: '400px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}><AboutMe /></Slide>
                        <Slide index={1} style={{
                            width: '560px',
                            height: '400px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}><Headshot /></Slide>
                        <Slide index={2} style={{
                            width: '560px',
                            height: '400px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}><Polici /></Slide>
                    </Slider>
                </div>

            </CarouselProvider>
        );
    }
}
