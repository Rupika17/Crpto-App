import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';



function TransactionContent() {
 
  const [transactionData, setTransactionData] = React.useState([]);
  React.useEffect(() => {
    fetch('https://api.blockcypher.com/v1/btc/main/txs/f854aebae95150b379cc1187d848d58225f3c4157fe992bcd166f58bd5063449')
       .then((response) => response.json())
       .then((data) => {
        console.log("transaction",data)
        setTransactionData(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <>
    <Typography variant="h5" gutterBottom>
        Transaction
      </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction Hash</TableCell>
            <TableCell align="right">Received Time</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Confirmations</TableCell>
            <TableCell align="right">Total BTC input</TableCell>
            <TableCell align="right">Total BTC Output</TableCell>
            <TableCell align="right">Total Fees</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={transactionData.address}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{transactionData.hash}</TableCell>
              <TableCell align="right">{transactionData.received}</TableCell>
              <TableCell align="right">{transactionData.preference}</TableCell>
              <TableCell align="right">{transactionData.size}</TableCell>
              <TableCell align="right">{transactionData.confirmations}</TableCell>
              <TableCell align="right">{transactionData.vin_sz}</TableCell>
              <TableCell align="right">{transactionData.vout_sz}</TableCell>
              <TableCell align="right">{transactionData.fees}</TableCell>

            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default function Transaction() {
  return <TransactionContent />;
}