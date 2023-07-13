import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState ,useContext} from 'react';
import { MainContext } from '../context/MainProvider';

function Result({result,showResult}) {
    const{setData} = useContext(MainContext);

    const handleTryAgain=()=>{
        setData({ type: 'status', status: 'notActive' });
        showResult(false);
    }

    return (
        <div>
            <Dialog
                open={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    Your Resualt 
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                         {`You Answered ${result} %`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleTryAgain}  autoFocus>
                        Try Again?
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Result;
