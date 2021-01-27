import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom";

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginRight: 16,
        },
    },
    title: {
        color: 'rgb(255, 255, 255)',
        fontSize: 35,
    },
    appBarTransparent:{
        backgroundColor: "#000000",
        minHeight: 65,
        margin:'auto',
        paddingBottom: '10px'

    },
    navBar:{
        color: 'rgb(245, 239, 237)',
        backgroundColor: '#000000',

    }
}
));


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};


class MainScreen extends React.Component {
    handleClick = () => {
        this.props.history.push("./Experience");
    }

    handleClick1 = () => {
        this.props.history.push("./Projects");
    }


    render(props) {
        return (
            <div>
                <HideOnScroll {...props}>
                    <AppBar  className={useStyles}>
                        <Toolbar >
                            <div style={{
                                margin:'auto',
                                width:'90%',
                                maxWidth:'800px',
                                display: 'flex',
                                flexFlow: 'row wrap',
                                whiteSpace: 'nowrap',
                                marginTop:'10px',
                                marginBottom:'10px',
                                // backgroundColor:'#000000'


                            }}>
                                <div style={{textAlign:'left', width:'50%', float:'left', minWidth:'240px'}}>
                                    <a href="https://www.henrymanley.com/" style={{color:'white', fontSize:'40px', textDecoration:'none'}}>Henry Manley &nbsp;</a>

                                </div>

                                <div style={{textAlign:'right', minWidth:'100px', display: 'inline-flex'}}>
                                    <Router>
                                        <Link to="./Experience">
                                            <p style={{color:'white', fontSize:'20px', textDecoration:'none', float:'left'}}>
                                                <a onClick={this.handleClick}>Work Experience &nbsp; &nbsp;</a>
                                            </p>
                                        </Link>
                                    </Router>

                                    <Router>
                                        <Link to="./Projects">
                                            <p style={{color:'white', fontSize:'20px', textDecoration:'none', float:'left'}}>
                                                <a onClick={this.handleClick1}>Data Projects</a>
                                            </p>
                                        </Link>
                                    </Router>
                                </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
            </div>
        );
    }
}
export default withRouter(MainScreen);


