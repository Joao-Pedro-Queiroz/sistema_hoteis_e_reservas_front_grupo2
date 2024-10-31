import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material'; // MUI imports
import UserReservationReport from '../components/UserReservationReport';

const UserReservationsPage = ({ user }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Reservation Report for {user.name}
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">User Information</Typography>
              <Typography>Name: {user.name}</Typography>
              <Typography>Email: {user.email}</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12}>
          <UserReservationReport userId={user.id} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserReservationsPage;