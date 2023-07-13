import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


function Header() {
    return (
        <Box sx={{ width: '100%', padding: '2rem', textAlign: 'center' }}>
            <Typography variant='h1' sx={{ fontSize: '3.8rem', fontWeight: 'bold', letterSpacing: '0.4rem' }} 
            color='primary'>Quize App</Typography>
        </Box>
    )
}

export default Header;
