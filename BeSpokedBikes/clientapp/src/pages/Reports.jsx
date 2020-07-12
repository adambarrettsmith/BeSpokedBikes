import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../store/actions/products';
import NavBar from '../components/navigation/NavBar';
import ProductsTable from '../components/products/ProductsTable';
import Copyright from '../components/Copyright';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../components/navigation/styles';

import '../components/navigation/styles';

const Reports = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar currentPage="Reports" />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <h3>Incomplete Page</h3>
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

export default Reports;