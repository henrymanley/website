import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import AboutMe from "./AboutMe";
import Headshot from "./Headshot";
import Polici from "./Polici";
// import sizeMe from 'react-sizeme'
import '../css/AboutMe.css';


// function MyComponent ({ size }) {
//     const { height } = size.bounds;
//
//     if (height > 300) {
//         return <div></div>
//     }
//     else {
//         return <div></div>
//     }
// }
// export default sizeMe()(MyComponent)

export default function horizontal(){
        return (
            <CarouselProvider
                totalSlides={3}
                visibleSlides={2}
                infinite={true}
                isIntrinsicHeight={true}
                isPlaying={true}
                trueinterval-={1000}
                dragEnabled ={true}
                touchEnabled ={true}
            >
                <Slider style={{
                    marginTop:'40px',
                    marginBottom:'40px',
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
                        marginLeft:'20px',
                        marginRight:'20px',
                        paddingRight: '20px'}}
                    >
                        <Polici />
                    </Slide>
                </Slider>
            </CarouselProvider>
        );
}

