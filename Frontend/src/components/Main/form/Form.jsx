import  React, {useState, useContext, useEffect} from 'react';
import { TextField, Typography, Grid, formControl, Button, InputLabel, Select, MenuItem, FormControl}  from '@mui/material';
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import classes from './styles.module.css';
import formatDate from '../../../utils/formatDate';

import { incomeCategories, expenseCategories } from '../../../constants/categories';
import CustomizeSnackbar from '../../Snackbar/Snackbar';

const initialState ={
    amount: '',
    category: '',
    type: 'Income',
    Date: formatDate(new Date()),
};

const NewTransactionForm = () => {
    const [formData, setFormData] = useState(initialState);
    const{ addTransaction} = useContext(ExpenseTrackerContext);
    const [open, setOpen] = React.useState(false);

    const createTransaction = () => {
        const amount = Number(formData.amount);
        if (isNaN(amount) || !formData.Date.includes('-')) return;
        

        // const transaction = { ... formData, amount: Number(formData.amount), id: uuidv4() }
        if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
            setFormData({ ...formData, type: 'Income' });
        } else if (expenseCategories.map((iC) => iC.type).includes(formData.category)) {
            setFormData({ ...formData, type: 'Expense' });
        }

        setOpen(true);
        addTransaction({ ...formData, amount, id: uuidv4() });
        setFormData(initialState);

    };

    // console.log(formData);

    const selectedCategories = formData.type === 'Income' ? incomeCategories :  expenseCategories;

return (
    <Grid container spacing={2} >
        <CustomizeSnackbar open={open} setOpen={setOpen}/>
        <Grid item xs={12}>
            <Typography align='center' variant='subtitle2' gutterBottom>
            </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select label="Type" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6} >
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select  label="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value})}>
                        {/* <MenuItem value="business">Bussiness </MenuItem>   
                        <MenuItem value="salary">Salary</MenuItem> */}
                        {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}


                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
            <TextField
                type="number"
                label="Amount"
                fullWidth
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
        </Grid>
        <Grid item xs={6}>
        <TextField
            type="date"
            label="Date"
            fullWidth
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            InputLabelProps={{ shrink: true }}
            placeholder="Select Date" // Add a placeholder to provide guidance to the user
/>

        </Grid>
        <Grid item xs={12}> {/* Create a new Grid item for the button */}
            <div className={classes.space}></div> {/* Add a div for spacing */}
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
    </Grid>
);
}

export default NewTransactionForm;
