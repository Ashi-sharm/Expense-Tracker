import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider } from '@mui/material';
import { ExpenseTrackerContext } from '../../context/context';
import classes from './styles.module.css';
import Form from './form/Form';
import List from './List/List';
import { useContext } from 'react';
import InfoCard from '../infoCard';

// import useStyles from './styles';



const ExpenseTracker = () => {
    // const classes = useStyles();

    const {balance} = useContext(ExpenseTrackerContext);

return (
    <Card className={classes.root}>
        {/* <CardHeader title="Expense Tracker"/>
        <CardContent> */}



        <CardHeader
        title={
          <Typography
          align="center"
            variant="h4" // Adjust the variant to control the size of the title
            sx={{
              color: '#FF7F7F', // Change the color to highlight
              fontWeight: 'bold', // Make the text bold
              fontFamily: 'Arial, sans-serif', // Customize the font family
              // Add any other custom styles here
            }}
          >
            Expense Tracker
          </Typography>
        }
      />
      <CardContent>



            <Typography align="center" variant="h5">Total Balance: ₹{balance}</Typography>
            <Typography variant="subtitle1" style={{ lineHeight:'1.5em', marginTop:'20px'}}>
                <InfoCard/>
            </Typography>
            <Divider/>
            <Form/>

        </CardContent>
        <CardContent className={classes.CardContent}>
            <Grid container spacing={2}></Grid>
                <Grid item xs={12}>
                    <List/>
                </Grid>
        </CardContent>
    </Card>
);
};

export default ExpenseTracker;
