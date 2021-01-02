import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from "@material-ui/icons/Email";
import IconButton from '@material-ui/core/IconButton';

export default function ContactMe(){
    return (
        <Typography style = {{
            marginLeft: '12px',
            marginRight: 'auto',
            backgroundColor: 'rgb(255, 255, 255)'
        }}
        >
            <Box textAlign="left" fontWeight="fontWeightBold" fontSize="h5.fontSize" m={1}>
                Contact ✉️
                <p style={{ fontSize: "14px"}}
                >Email: <a href ="mailto:hjm67@cornell.edu">hjm67@cornell.edu</a></p>
                <p>
                    <IconButton>
                        <LinkedInIcon  style = {{
                            padding: "10px 5px"
                        }}/>
                    </IconButton>
                    <IconButton>
                        <InstagramIcon style = {{
                            padding: "10px 5px"
                        }}/>
                    </IconButton>
                    <IconButton>
                        <GitHubIcon style = {{
                            padding: "10px 5px"
                        }} />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon style = {{
                            padding: "10px 5px"
                        }} />
                    </IconButton>

                </p>
            </Box>
        </Typography>
    );
}
