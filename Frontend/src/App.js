import React from "react";
import { Grid } from "@mui/material";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
// import NewTransactionForm from "./components/Form/Form";
import styles from "./styles.module.css";

const App = () => {
  // const classes = styles;
  return (
    <div>
      <Grid
        className={styles.grid}
        container spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;