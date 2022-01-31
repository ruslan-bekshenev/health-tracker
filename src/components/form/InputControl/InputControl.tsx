import React from 'react';
import {
  FormControl,
  FormControlProps,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';

interface IInputControl {
  controlProps?: FormControlProps;
  inputProps?: OutlinedInputProps;
  labelText: string;
}

const InputControl: React.FC<IInputControl> = ({ controlProps, inputProps, labelText }) => {
  return (
    <FormControl sx={{ width: '100%' }} variant="outlined" {...controlProps}>
      <InputLabel htmlFor="outlined-adornment-password">{labelText}</InputLabel>
      <OutlinedInput id="outlined-adornment-password" label={labelText} {...inputProps} />
    </FormControl>
  );
};

export default InputControl;
