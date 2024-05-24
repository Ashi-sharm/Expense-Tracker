import React, { useEffect }from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import useTransactions from '../../useTransaction';
import { Doughnut } from 'react-chartjs-2';
import styles from './styles.module.css';
import {Chart} from 'chart.js/auto';
// Chart.register(ArcElement);


const Details = ({title, subheader}) => {

    const { total, chartData} = useTransactions(title);
    // console.log(chartData);

    useEffect(() => {
       
    }, []);
    return (

        <Card className={ title === 'Income' ? styles.income : styles.expense}>
            <CardHeader title={title} subheader={subheader}/>
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                {/* <div></div> */}
                {/* <div><Doughnut data={chartData}/></div> */}
                <div style={{ width: '200px', height: '200px' }}>
                    <Doughnut data={chartData} />
                </div>
               
            </CardContent>
        </Card>
    );
}

export default Details;
