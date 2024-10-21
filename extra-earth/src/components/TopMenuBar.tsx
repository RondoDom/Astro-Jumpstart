import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const TopMenuBar: React.FC = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                {/* Logo Section */}
                {/* Make sure the logo is in the correct path: /public/images/logo.png */}
                <Box component="img" src="/images/logo.png" alt="Logo" sx={{ height: 40 }} />

                {/* Title Section */}
                <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
                    MyApp
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default TopMenuBar;
