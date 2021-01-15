import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DataRow from '../dataRow';

const DataTable = props => {
    const {data} = props;
    return (
        <div>
          <h1>Data Table</h1>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>Symbol</TableCell>
                      <TableCell>Gene ID</TableCell>
                      <TableCell>Gene Name</TableCell>
                      <TableCell>Overall Association Score</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                        <DataRow key={row.id} data={row} />
                    ))}
                  </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DataTable;