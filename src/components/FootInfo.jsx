import React from 'react';
import Typography from '@material-ui/core/Typography'

export default function FootInfo() {
    return (
        <Typography style = {{
            marginBottom: '40px',
            marginLeft: '30px',
            marginRight: 'auto',
            backgroundColor: 'rgb(255, 255, 255)',

        }}
        >
            <i>Created By Henry Manley © 2021 </i>
        </Typography>
    );
}