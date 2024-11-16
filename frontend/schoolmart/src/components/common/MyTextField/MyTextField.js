import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const MyTextField = (props) => {
  return (
    <>
      <TextField
        variant={props.variant}
        label={props.label}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        // style={{ width: "78%" }}
        style={props.style}
        disabled={props.disabled}
        inputProps={props.inputProps}
      />
    </>
  );
};

export default MyTextField;
