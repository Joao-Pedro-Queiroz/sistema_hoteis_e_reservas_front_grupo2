import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material'; // MUI imports
import ReservationList from './ReservationList';

const UserReservationReport = ({ userId }) => {
  const [reservations, setReservations] = useState([]);
  const [reservationCount, setReservationCount] = useState(0);

  useEffect(() => {
    // Fetch reservations data here; replace with actual API call
    const fetchReservations = async () => {
      const response = await fetch(`/api/users/${userId}/reservations`); // API call
      const data = await response.json();
      setReservations(data.reservations);
      setReservationCount(data.reservations.length);
    };

    fetchReservations();
  }, [userId]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Reservation Summary</Typography>
        <Typography>Total Reservations: {reservationCount}</Typography>
        <Divider sx={{ marginY: 2 }} />
        
        <ReservationList reservations={reservations} />
      </CardContent>
    </Card>
  );
};

export default UserReservationReport;