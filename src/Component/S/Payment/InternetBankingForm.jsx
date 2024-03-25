import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

export default function InternetBankingForm({paymentMode}) {
  return (
    <Card
    className={paymentMode!="ib"?"paymentMode":"activePaymentMode"} 
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '100%',
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
      }}
     style={{borderRadius:"0px"}}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Pay by Net-Banking
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Account number</FormLabel>
          <Input   />
        </FormControl>
        <FormControl>
          <FormLabel>IFSC Code</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>User-ID</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input />
        </FormControl>
       
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Account holder name</FormLabel>
          <Input placeholder="Enter accountholder's full name" />
        </FormControl>
        
      
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="solid" style={{backgroundColor:'#dc3545',color:"white"}}>
            Pay
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}