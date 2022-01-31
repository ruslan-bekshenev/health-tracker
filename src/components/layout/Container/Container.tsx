import React, { FC } from 'react';
import { Container as MuiContainer, ContainerProps } from '@mui/material';

const Container: FC<ContainerProps> = ({ children, maxWidth = 'lg', ...rest }) => {
  return (
    <MuiContainer
      maxWidth={maxWidth}
      sx={{
        py: 6,
      }}
      {...rest}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
