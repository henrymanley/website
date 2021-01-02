import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';


export default function ContactMe(){
    return (
        <Typography style = {{
            marginLeft: '12px',
            marginRight: 'auto'
        }}
        >
            <Box textAlign="left" fontWeight="fontWeightBold" fontSize="h5.fontSize" m={1}>
                Contact
                <p style={{ fontSize: "14px"}}
                >Email: <a href ="mailto:hjm67@cornell.edu">hjm67@cornell.edu</a></p>
                <p>
                    <LinkedInIcon style = {{
                        padding: "10px 7px"
                    }}
                    />
                    <InstagramIcon style = {{
                        padding: "10px 7px"
                    }}
                    />
                    <GitHubIcon style = {{
                        padding: "10px 7px"
                    }}
                    />
                    <FacebookIcon style = {{
                        padding: "10px 7px"
                    }}
                    />
                </p>
            </Box>
        </Typography>
    );
}
