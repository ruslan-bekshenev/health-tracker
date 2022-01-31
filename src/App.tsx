import React, { lazy } from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Container } from './components/layout/Container';
import { Suspense } from './components/layout/Suspense';
import { routes } from './utils/routes';

const LoginPage = lazy(() => import('./pages/Login'));
const MainPage = lazy(() => import('./pages/Main'));

const App = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Routes>
          <Route
            path={routes.main}
            element={
              <Suspense>
                <MainPage />
              </Suspense>
            }
          />
          <Route
            path={routes.login}
            element={
              <Suspense>
                <LoginPage />
              </Suspense>
            }
          />
          <Route path="*" element={<div>asd</div>} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;
