import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from '@emotion/styled';


const steps = [
  'Fill up Address',
  'Confirm Address',
  'Pay',
];

export default function ProgressBar({page}) {
  return (
    <DIV>
    <Box sx={{ width: '100%'}}>
      <Stepper sx={{color:"red"}} activeStep={page} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
   
    </Box>
    </DIV>
 
   
  );
}


const  DIV = styled.div`

.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed{
color: #dc3545;
}

.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active{
color: #dc3545;
}

`