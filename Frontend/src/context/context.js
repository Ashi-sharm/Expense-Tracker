import React, { useReducer, createContext, useEffect} from "react";
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];


export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators 
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION' , payload: id});
    const addTransaction = ( transaction) => dispatch({ type: 'ADD_TRANSACTION' , payload: transaction });

    // console.log(transactions);

    useEffect(() => {
    //     localStorage.setItem('transactions', JSON.stringify(transactions));
    // }, [transactions]);
    localStorage.setItem('transactions', JSON.stringify(transactions.map(transaction => ({
        ...transaction,
        amount: Number(transaction.amount) // Parse amount as number
    }))));
}, [transactions]);


    
    const balance = transactions.reduce((acc, currVal) => {
        const amount = Number(currVal.amount); // Parse amount as number
        return isNaN(amount) ? acc : (currVal.type === 'Expense' ? acc - amount : acc + amount);
    }, 0);

    // console.log('Transactions:', transactions);
    // console.log('Balance:', balance);



    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

