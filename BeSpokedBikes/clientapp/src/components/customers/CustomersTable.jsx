import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCustomers } from '../../store/actions/customers';
import MaterialTable from 'material-table';

export const CustomersTable = props => {
    const { getCustomers, customers = [] } = props;

    useEffect(() => {
        getCustomers();
    }, []);

    const columns = [
        { title: 'First Name', field: 'firstName' },
        { title: 'Last Name', field: 'lastName' },
        { title: 'Address', field: 'address' },
        { title: 'Phone', field: 'phone' },
        { title: 'Start Date', field: 'startDate', type: 'date' }
    ];

    return (
        <MaterialTable
            title="Customers"
            columns={columns}
            data={customers}
            options={{
                search: false,
                sorting: false,
                paging: false
            }}
        >
        </MaterialTable>
    );
};

const mapStateToProps = (state, ownProps) => ({
    customers: state.customers.customers
});

const mapDispatchToProps = dispatch => ({
    getCustomers: () => dispatch(getCustomers())
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomersTable);