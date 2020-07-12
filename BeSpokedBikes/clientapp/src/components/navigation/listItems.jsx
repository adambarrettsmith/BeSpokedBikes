import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const ListItemLink = props => {
    return <ListItem button component ="a" {...props} />;
}

export const mainListItems = (
  <div>
    <ListItemLink href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemLink>
    <ListItemLink href="/customers">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemLink>
    <ListItemLink href="/sales">
      <ListItemIcon>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Sales" />
    </ListItemLink>
    <ListItemLink href="/salesPeople">
      <ListItemIcon>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Sales Personel" />
    </ListItemLink>
    <ListItemLink href="/reports">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemLink>
    <ListItemLink href="/products">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemLink>
  </div>
);