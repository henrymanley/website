import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default function AboutMe() {
    return (
        <Typography style = {{
            marginLeft: '12px',
            marginRight: 'auto'
        }}
        >
            <Box textAlign="left" fontWeight="fontWeightBold" fontSize="h5.fontSize" m={1}>
                About Me
            </Box>
        </Typography>
    );
}