import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/products';
import MaterialTable from 'material-table';

export const ProductsTable = props => {
    const { getProducts, products = [] } = props;

    useEffect(() => {
        getProducts();
    }, []);

    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Manufacturer', field: 'manufacturer' },
        { title: 'Style', field: 'style' },
        { title: 'Purchase Price', field: 'purchasePrice', type: 'currency' },
        { title: 'Sale Price', field: 'salePrice', type: 'currency' },
        { title: 'Qty', field: 'qtyOnHand', type: 'number' },
        { title: 'Commission %', field: 'commissionPercentage', type: 'numeric' }
    ];

    return (
        <MaterialTable
            title="Products"
            columns={columns}
            data={products}
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
    products: state.products.products
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);