import React, {useState, useEffect} from 'react';
import { Snackbar } from "@mui/material";
import { Alert } from '@mui/material';

import styles from './styles.module.css';
// import  { useState, useEffect } from 'react';



const CustomizedSnackbar = ({open, setOpen}) => {
    const handleClose =( event, reason) =>{
        if(reason === 'clickaway') return;
        setOpen(false);
    }

    useEffect(() => {
      const timer = setTimeout(() => {
          setOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
  }, [open, setOpen]);


  return (
    <div className={styles.root}>
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            // autoHideDuration={null}
            >
            <Alert onClose={handleClose} severity="success" elevation={6} variant="filled">
                    transaction successfully created.
                </Alert>

        </Snackbar>
    </div>
  );
}

export default CustomizedSnackbar;