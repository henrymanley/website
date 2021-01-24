import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';

export default function ContactMe(){
    return (
        <div id="contact" style={{width:'50%',
            alignContent:'center',
            textAlign:'center',
            margin:'auto',
        marginTop: '40px'}}>
            <Typography>
                <Box textAlign="left" fontWeight="fontWeightBold" fontSize="h5.fontSize" style={{alignContent:'center',
                    textAlign:'center',}} >
                    Contact ✉️
                    <p style={{ fontSize: "14px"}}
                    >Email: <a href ="mailto:hjm67@cornell.edu">hjm67@cornell.edu</a></p>
                    <p>
                        <IconButton target="_blank" href="https://www.linkedin.com/in/henry-manley-681213173/">
                            <LinkedInIcon  style = {{
                                padding: "10px 5px",
                                color: 'black'
                            }}/>
                        </IconButton>
                        <IconButton target="_blank" href="https://www.instagram.com/henrymanley">
                            <InstagramIcon style = {{
                                padding: "10px 5px",
                                color: 'black'
                            }}/>
                        </IconButton>
                        <IconButton target="_blank" href="https://github.com/hmhacks">
                            <GitHubIcon style = {{
                                padding: "10px 5px",
                                color: 'black'
                            }} />
                        </IconButton>
                        <IconButton target="_blank" href="https://www.facebook.com/trea.herty.3">
                            <FacebookIcon style = {{
                                padding: "10px 5px",
                                color: 'black'
                            }} />
                        </IconButton>
                    </p>
                </Box>
            </Typography>
        </div>

    );
}
