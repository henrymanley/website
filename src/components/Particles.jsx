import React from 'react';
import Particles from 'react-particles-js';
import '../css/App.css';

function Parts() {
    return (
        <Particles id="particles-js"
                   style={{
                       minHeight: '220vh'
                   }}
                   canvasClassName="back"
                   params={{
                       particles: {
                           number: {
                               value: 200,
                           },
                           shape: {
                               type: 'circle',
                               stroke: {
                                   width: 0,
                                   color: "#000000"
                               }
                           },
                           color: {
                               value: ['#E03616', '#06A77D', '#5465FF', '#772D8B', '#d7b002']
                           },
                           size: {
                               value: 3,
                               random: true,
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