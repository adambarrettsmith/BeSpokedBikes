import React from 'react';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import SalesPeople from './pages/SalesPeople';
import Customers from './pages/Customers';
import Reports from './pages/Reports';
import Sales from './pages/Sales';

import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const App = () => {

    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
        },
    });

    return (
        <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <BrowserRouter>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/products" component={Products} />
                    <Route path="/salespeople" component={SalesPeople} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/sales" component={Sales} />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};

export default App;