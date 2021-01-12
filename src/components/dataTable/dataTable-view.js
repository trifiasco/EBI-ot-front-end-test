import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DataTable = props => {
    const {data} = props;
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>Symbol</TableCell>
                      <TableCell align="right">Gene ID</TableCell>
                      <TableCell align="right">Gene Name</TableCell>
                      <TableCell align="right">Overall Association Score</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                        <div>something</div>
                    ))}
                  </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DataTable;