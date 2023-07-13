import { Alert, Button } from '@mui/material'
import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function Error() {

    const {setData} = useContext(MainContext);
    const handleClick=()=>{
        setData({ type: 'status', status: 'notActive' });
    }
    return (
        <div style={{ textAlign: 'center', maxWidth: '30rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <Alert sx={{ mt: '5rem' }} severity="error">Somthing Went Wrong Try Again</Alert>
            <Button onClick={handleClick} variant="outlined" color="error" sx={{mt:"2rem"}}>
                Try Again
            </Button>
        </div>
    )
}

export default Error
