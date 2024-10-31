import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material'; // MUI imports
import { useNavigate } from 'react-router-dom';

const UserList = ({ users }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Users
      </Typography>
      
      <List>
        {users.map((user) => (
          <ListItem button key={user.id} onClick={() => navigate(`/users/${user.id}/reservations`)}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserList;