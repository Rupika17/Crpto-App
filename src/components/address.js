import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


function AddressContent() {

  const [currentAddressData, setCurrentAddressData] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://api.blockcypher.com/v1/btc/main/addrs/1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD/balance`)
       .then((response) => response.json())
       .then((data) => {
        setCurrentAddressData(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <>
    <Typography variant="h5" gutterBottom>
        Address
      </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction</TableCell>
            <TableCell align="right">Total received</TableCell>
            <TableCell align="right">Total spent&nbsp;()</TableCell>
            <TableCell align="right">Total unspent&nbsp;()</TableCell>
            <TableCell align="right">Current address balance&nbsp;()</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={currentAddressData.address}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{currentAddressData.final_n_tx}</TableCell>
              <TableCell align="right">{currentAddressData.total_received}</TableCell>
              <TableCell align="right">{currentAddressData.total_sent}</TableCell>
              <TableCell align="right">{currentAddressData.final_balance}</TableCell>
              <TableCell align="right">{currentAddressData.balance}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default function Address() {
  return <AddressContent />;
}