import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginRight: 16,
        },
    },
    title: {
        color: 'rgb(255, 255, 255)',
        fontSize: 35,
        marginRight: 16,
        marginLeft: -12
    },
    appBarTransparent:{
        backgroundColor: "#4059AD",
        minHeight: 65,
        marginLeft: "auto",
        marginRight: "auto"
    },
    navBar:{
        color: 'rgb(245, 239, 237)',
        backgroundColor: '#4059AD'
    }
}
));

export default function OutlinedButtons() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBarTransparent}>
                <Toolbar>
                    <Typography className={classes.title}
                    style={{
                        fontSize:'40px',
                        marginRight: 'auto',
                        marginLeft: 'auto'
                    }}>
                        <a href="https://www.henrymanley.com/" style={{color:'white',  textDecoration:'none',}}>Henry Manley</a>

                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}


