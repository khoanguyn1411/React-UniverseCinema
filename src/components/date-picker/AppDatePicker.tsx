import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";
import styled from "styled-components";

const WrapperModule = styled.div`
  .MuiFormControl-root {
    width: 100%;
  }
  .css-j5h6pi-MuiPopper-root button {
    background-color: red !important;
  }
`;

type TProps = {
  className: string;
  value: Date | null;
  setValue: React.Dispatch<React.SetStateAction<Date | null>>;
};

export const AppDatePicker: React.FunctionComponent<TProps> = ({
  className,
  value,
  setValue,
}) => {
  return (
    <WrapperModule className={className}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </WrapperModule>
  );
};
