import { Box,Button } from '@mui/material';
import React from 'react';


const PaymentButton = ({page,handleBack,handleNext}) => {

return (
     <div>

<React.Fragment>
<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
  <Button
    color="inherit"
    disabled={page === 0}
    onClick={handleBack}
    sx={{ mr: 1 }}
  >
    Back
  </Button>

  <Box  sx={{ flex: '1 1 auto' }} />
      { page!=2 && <Button style={{color:"#0d6efd"}} onClick={handleNext}>{page==2? 'Pay' : 'Next'}</Button>}
  </Box>
</React.Fragment>
            
        </div>
    );
};

export default PaymentButton;

