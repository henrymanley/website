import React from 'react';
import clsx from 'clsx';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';
import FunctionsIcon from '@material-ui/icons/Functions';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

const Theme = createMuiTheme({
    typography: {
        fontFamily: [
            'JetBrains Mono',
            'sans-serif',
        ].join(','),
    },});



const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to ="/">
                    <ListItem button>
                        <ListItemIcon> <HomeIcon />  </ListItemIcon>
                        <ListItemText> Home  </ListItemText>
                    </ListItem>
                </Link>


                    <Link to ="/Experience">
                        <ListItem button>
                            <ListItemIcon> <WorkIcon />  </ListItemIcon>
                            <ListItemText> Work Experience  </ListItemText>
                        </ListItem>
                    </Link>


                    <Link to ="/Projects">
                        <ListItem button>
                            <ListItemIcon> <FunctionsIcon />  </ListItemIcon>
                            <ListItemText> Projects  </ListItemText>
                        </ListItem>
                    </Link>
            </List>

            <Divider />
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                        <ThemeProvider theme={Theme}>
                            <div style={{bottom:'0px', position:'fixed'}}>
                                <Typography >
                                    <p style={{fontSize:'12px', marginLeft:'55px'}}>Henry Manley © 2021 </p>
                                </Typography>

                            </div>
                        </ThemeProvider>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}