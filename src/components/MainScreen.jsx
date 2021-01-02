import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { positions } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    title: {
        color: 'rgb(245, 239, 237)',
        fontSize: 35,
        marginRight: 16,
        marginLeft: -12
    },
    appBarTransparent:{
        backgroundColor:'rgb(7, 7, 7)',
        minHeight: 65,
        marginLeft: "auto",
        marginRight: "auto"
    },
    navBar:{
        color: 'rgb(245, 239, 237)',
        backgroundColor: 'rgb(7, 7, 7)'
    }
}
));


export default function OutlinedButtons() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBarTransparent}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Henry Manley
                    </Typography>
                    <div className={classes.root}>
                        <Button variant="primary" className={classes.navBar}
                        style = {{borderRadius: 35,
                            backgroundColor: "#E03616",
                            padding: "10px 30px",
                            fontSize: "14px"
                        }}>
                            About Me
                        </Button>
                        <Button variant="primary"  className={classes.navBar}
                        style = {{borderRadius: 35,
                            backgroundColor: "#772D8B",
                            padding: "10px 30px",
                            fontSize: "14px"
                        }}>
                            Data Projects
                        </Button>
                        <Button variant="primary"  className={classes.navBar}
                        style = {{borderRadius: 35,
                            backgroundColor: "#5465FF",
                            padding: "10px 30px",
                            fontSize: "14px"
                        }}>
                            Work Experience
                        </Button>
                        <Button variant="primary"  className={classes.navBar}
                        style = {{borderRadius: 35,
                            backgroundColor: "#21A0C7",
                            padding: "10px 30px",
                            fontSize: "14px"
                        }}>
                            Contact Me
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}