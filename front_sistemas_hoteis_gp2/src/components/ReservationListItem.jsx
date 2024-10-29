import React from 'react';
import { ListItem, ListItemText, Typography } from '@mui/material'; // MUI imports

const ReservationListItem = ({ reservation }) => {
  return (
    <ListItem>
      <ListItemText
        primary={<Typography variant="body1">Reservation Date: {new Date(reservation.date).toLocaleDateString()}</Typography>}
        secondary={
          <>
            <Typography variant="body2">Room: {reservation.roomType}</Typography>
            <Typography variant="body2">Status: {reservation.status}</Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ReservationListItem;