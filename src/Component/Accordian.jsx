import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';
import AOS from "aos"
import 'aos/dist/aos.css';

export default function BasicAccordion() {
  React.useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  return (
    <DIV className='container my-4' data-aos="fade-up">
      <h2 className='my-5'>Frequently Asked Question</h2>
      <Accordion className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='fs-5'>How does the fresh food delivery app work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our app connects you with local farmers and vendors who offer fresh produce and other food items.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='fs-5'>What types of fresh food can I order through the app?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can order a wide range of fresh food items, including fruits, vegetables, dairy products, meats, seafood, and bakery items. We also offer specialty and organic products.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='fs-5'> Is there a minimum order requirement?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Minimum order requirements may vary depending on your location and the specific vendors you choose. Details will be provided during the ordering process.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='fs-5'>How do I pay for my orders?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We accept various payment methods, including credit/debit cards, mobile wallets, and online payment platforms. You can securely pay for your orders during the checkout process.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='Accordion'>  
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='fs-5'> What is the delivery fee?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Delivery fees may vary based on your location and the distance to the vendor. The app will display the delivery fee before you confirm your order.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='fs-5'>What if I receive a damaged or incorrect item in my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you encounter any issues with your order, please contact our customer support immediately. We will work to resolve the issue and ensure your satisfaction.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </DIV>
  );
}


const DIV = styled.div`
.Accordion{
  margin: 8px 0 8px 0;
  background:transparent;
  border: 1px solid #f4f4f4;

}


`