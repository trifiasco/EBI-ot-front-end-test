import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import BarChart from '../charts/barChart';
import RadarChart from '../charts/radarChart';


const useRowStyles = makeStyles({
    root: {},
    collapsibleArea: {
        paddingBottom: 0, paddingTop: 0
    }
})

const DataRow = props => {

    const {data} = props;
    const {target, association_score} = data;
    const {gene_info} = target;
    const {datatypes} = association_score;

    const [open, setOpen] = useState(false);
    const classes = useRowStyles();

    return (
        <>
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
            <TableRow>
                <TableCell className={classes.collapsibleArea} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <BarChart data={datatypes} title="Association vs Data Type"/>
                            <RadarChart data={datatypes} title="Association vs Data Type" />
                        </div>
                        
                        
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default DataRow;