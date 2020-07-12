import React from 'react';
import NavBar from '../components/navigation/NavBar';
import SalesTable from '../components/sales/SalesTable';
import Copyright from '../components/Copyright';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../components/navigation/styles';

import '../components/navigation/styles';

const Sales = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar currentPage="Sales" />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <SalesTable />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
};

export default Sales;