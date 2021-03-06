import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SatelliteIcon from '@material-ui/icons/Satellite';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<SatelliteIcon />} label="NASA IMAGE" />
        <Tab icon={<RestaurantIcon />} label="RESTAURANTS" />
        <Tab icon={<WbSunnyIcon />} label="WEATHER" />
      </Tabs>
    </Paper>
  );
}
