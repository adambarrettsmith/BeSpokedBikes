import React, { useEffect } from 'react';
import { getProducts } from '../store/actions/products';
import NavBar from '../components/navigation/NavBar';
import Copyright from '../components/Copyright';

import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../components/navigation/styles';

import '../components/navigation/styles';
import bikeImage from '../images/bike.png';

const Dashboard = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className={classes.root}>
            <NavBar currentPage="Dashboard" />

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


export default Dashboard;