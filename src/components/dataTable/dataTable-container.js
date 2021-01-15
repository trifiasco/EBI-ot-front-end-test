import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useAssociationData from './useAssociationData';
import DataTable from './dataTable-view';

const DataTableContainer = props => {

    const {data, loading} = useAssociationData();

    return (
        <div>
            {loading && (
                <Backdrop open={loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            {!loading && data && (
                <DataTable
                    data={data}
                />
            )}
        </div>
        
    );
};

export default DataTableContainer;