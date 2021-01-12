import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import { makeStyles } from '@material-ui/core';

const useRowStyles = makeStyles({
    root: {}
})

const DataRow = props => {

    const {data} = props;
    const {target, association_score} = data;
    const {gene_info} = target;

    const [open, setOpen] = useState(false);
    const classes = useRowStyles();

    return (
        <TableRow className={classes.root}>
            <TableCell>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                {open ? <RemoveSharpIcon /> : <AddSharpIcon />}
              </IconButton>
            </TableCell>
            <TableCell>{gene_info.symbol}</TableCell>
            <TableCell>{target.id}</TableCell>
            <TableCell>{gene_info.name}</TableCell>
            <TableCell>{association_score.overall}</TableCell>
        </TableRow>
    );
};

export default DataRow;