import React from 'react';
import Particles from 'react-particles-js';
import '../css/App.css';

function Parts() {
    return (
        <Particles id="particles-js"
                   style={{
                       minHeight: '500vh'
                   }}
                   canvasClassName="back"
                   params={{
                       particles: {
                           number: {
                               value: 200,
                               density: {
                                   enable: true,
                                   value_area: 1000
                               }
                           },
                           shape: {
                               type: 'circle',
                               stroke: {
                                   width: 0,
                                   color: "#000000"
                               }
                           },
                           color: {
                               value: '#E03616'
                           },
                           opacity: {
                               value: 0.4,
                               anim: {
                                   enable: true
                               }
                           },
                           size: {
                               value: 3,
                               random: true,
                               anim: {
                                   enable: true,
                                   speed: 3
                               }
                           },
                           line_linked: {
                               enable: true,
                               color: "#726F85",
                           },
                           move: {
                               speed: 0.4
                           }
                       }
                   }}
        />
    )
}
export default Parts