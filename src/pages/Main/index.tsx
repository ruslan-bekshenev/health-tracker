import React from 'react';
import { Typography } from '@mui/material';
import { Paper } from '@/components/layout/Paper';
import { DataTable } from '@/components/Table';

const Main = () => {
  return (
    <Paper>
      <Typography variant="h4" component="h1" gutterBottom>
        Добро пожаловать на страницу
      </Typography>
      <DataTable />
    </Paper>
  );
};

export default Main;
