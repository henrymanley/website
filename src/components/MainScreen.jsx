import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import DataProjects from "./DataProjects";

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
                            backgroundColor: "#e03616",
                            padding: "10px 30px",
                            fontSize: "14px"
                        }}>
                            About Me
                        </Button>
                        <Button variant="primary"  className={classes.navBar}
                        style = {{borderRadius: 35,
                            backgroundColor: "#772d8b",
                            padding: "10px 30px",
                            fontSize: "14px"
                        }}>
                            Data Projects
                        </Button>
                        <Button variant="primary"  className={classes.navBar}
                        style = {{borderRadius: 35,
                            backgroundColor: "#5465ff",
                            padding: "10px 30px",
                            fontSize: "14px"
                        }}>
                            Work Experience
                        </Button>
                        <Button variant="primary"  className={classes.navBar}
                        style = {{borderRadius: 35,
                            backgroundColor: "#06A77D",
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