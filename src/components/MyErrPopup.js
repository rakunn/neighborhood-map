import React from 'react';
import { Popup } from 'react-mapbox-gl';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Warning from '@material-ui/icons/Warning';

const MyErrPopup = () => {
  return (
    <Popup
      style={{maxWidth: 220}}
      coordinates={[0, 0]}
      anchor="null"
    >
      <Paper>
        <Warning />
        <Typography variant="button" align="center"> Could not match any location :( </Typography>
      </Paper>
    </Popup>
  );
};

export default MyErrPopup;
