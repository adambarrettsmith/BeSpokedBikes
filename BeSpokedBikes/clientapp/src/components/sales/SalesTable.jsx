import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSales } from '../../store/actions/sales';
import MaterialTable from 'material-table';

export const SalesTable = props => {
    const { getSales, sales= [] } = props;

    useEffect(() => {
        getSales();
    }, []);

    const columns = [
        { title: 'Product', field: 'productName' },
        { title: 'Sales Person', field: 'salesPersonName' },
        { title: 'Customer', field: 'customerName' },
        { title: 'Sale Date', field: 'salesDate', type: 'date' }
    ];

    return (
        <MaterialTable
            title="Sales"
            columns={columns}
            data={sales}
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
    sales: state.sales.sales
});

const mapDispatchToProps = dispatch => ({
    getSales: () => dispatch(getSales())
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesTable);