import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSalesPeople, updateSalesPerson } from '../../store/actions/salesPeople';
import MaterialTable from 'material-table';

export const SalesPeopleTable = props => {
    const { getSalesPeople, salesPeople = [] } = props;

    useEffect(() => {
        getSalesPeople();
    }, []);

    const columns = [
        { title: 'First Name', field: 'firstName' },
        { title: 'Last Name', field: 'lastName' },
        { title: 'Address', field: 'address' },
        { title: 'Phone', field: 'phone' },
        { title: 'Start Date', field: 'startDate', type: 'date' },
        { title: 'Termination Date', field: 'terminationDate', type: 'date' },
        { title: 'Manager', field: 'manager' }
    ];

    return (
        <MaterialTable
            title="Sales Personel"
            columns={columns}
            data={salesPeople}
            options={{
                search: false,
                sorting: false,
                paging: false
            }}
            // INCOMPLETE // REMOVING
            // editable={{ 
            //     onRowUpdate: (newData, oldData) =>
            //         new Promise((resolve) => {
            //             setTimeout(() => {
            //                 // dispatch update sales person
            //                 resolve();
            //             }, 600)
            //         })
            // }}
        >
        </MaterialTable>
    );
};

const mapStateToProps = (state, ownProps) => ({
    salesPeople: state.salesPeople.salesPeople,
    salesPerson: state.salesPeople.salesPerson
});

const mapDispatchToProps = dispatch => ({
    getSalesPeople: () => dispatch(getSalesPeople()),
    updateSalesPerson: () => dispatch(updateSalesPerson())
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesPeopleTable);