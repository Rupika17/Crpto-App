import * as React from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function BtcBlockchain({data}) {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="center">Current Hash</StyledTableCell>
          <StyledTableCell align="center">Previous Hash&nbsp;(g)</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
          <StyledTableRow key={data.name}>
            <StyledTableCell align="right">{data.hash}</StyledTableCell>
            <StyledTableCell align="right">{data.previous_hash}</StyledTableCell>
          </StyledTableRow>
       
      </TableBody>
    </Table>
  </TableContainer>
  );
}