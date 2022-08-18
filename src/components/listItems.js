import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaidIcon from '@mui/icons-material/Paid';
import ContactsIcon from '@mui/icons-material/Contacts';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="BTC" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <ContactsIcon />
      </ListItemIcon>
      <ListItemText primary="Address" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PaidIcon />
      </ListItemIcon>
      <ListItemText primary="Transaction" />
    </ListItemButton>
  </React.Fragment>
);

