import React from 'react';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
export default function FootInfo() {
    return (
        <div>
            <Divider />
            <Typography style={{
                marginLeft: '36px',
                paddingTop: '15px'
            }}>
                <i>Created By Henry Manley © 2021 </i>
            </Typography>
        </div>
    );
}