import React from 'react';
import { Typography } from '@mui/material';
import { Paper } from '@/components/layout/Paper';

const Main = () => {
  return (
    <Paper>
      <Typography variant="h4" component="h1" gutterBottom>
        Добро пожаловать на страницу
      </Typography>
      <Typography variant="body1" gutterBottom>
        Тестовое приложение
      </Typography>
    </Paper>
  );
};

export default Main;
