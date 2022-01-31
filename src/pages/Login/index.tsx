import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { InputControl } from '@/components/form/InputControl';
import { Paper } from '@/components/layout/Paper';

const Login = () => {
  const sx = { width: '100%', mb: 2 };
  return (
    <Box maxWidth="300px" margin="auto">
      <Paper>
        <Typography variant="h4" component="h1" gutterBottom>
          Авторизация
        </Typography>
        <form>
          <InputControl controlProps={{ sx }} labelText="Введите E-mail" />
          <InputControl
            controlProps={{ sx }}
            labelText="Пароль"
            inputProps={{ type: 'password' }}
          />
          <Button variant="contained">Войти</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
