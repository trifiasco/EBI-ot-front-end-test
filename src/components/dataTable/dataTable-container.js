import React from 'react';
import useAssociationData from './useAssociationData';
import DataTable from './dataTable-view';

const DataTableContainer = props => {

    const {data, loading} = useAssociationData();

    return (
        <DataTable />
    );
};

export default DataTableContainer;