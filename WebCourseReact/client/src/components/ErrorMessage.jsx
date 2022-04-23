import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Box, Collapse, IconButton} from "@mui/material";
import * as PropTypes from "prop-types";
import {useState} from "react";

export default function ErrorMessage({setIsError, message, isOpen = false}) {

  return (
    <div style={{position: "absolute"}}>
      <Box sx={{ width: '100%' }}>
        <Collapse in={isOpen}>
          <Alert severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setIsError({
                    err: false
                  });
                }}
              >
                close
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>
    </div>
  );
}