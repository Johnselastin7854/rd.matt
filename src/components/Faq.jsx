import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react";
  import { faq } from '../data';

function Faq() {
    const breakpoints = ["20em", "25em", "48em", "62em", "75em"];

    breakpoints.xsm = breakpoints[0];
    breakpoints.sm = breakpoints[1];
    breakpoints.md = breakpoints[2];
    breakpoints.lg = breakpoints[3];
    breakpoints.xl = breakpoints[4];
  return (
    <div  className="faq">
        <Accordion allowToggle>
            {faq?.map((data)=>(
                <AccordionItem
                key={data.id}
                max-width="700px"
               width={{ sm:"400px",md: "525px", lg: "450px", xl: "575px" }}
               borderBottom="1px solid #009688"
               borderTopWidth="0px"
               borderRadius="5px"
               outline="none"
               overflow="hidden"
               boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
               marginBottom={4}
               >
                 <h3>
                   <AccordionButton border="0.3px solid #009688">
                     <Box as="span" 
                     flex='1' 
                     textAlign='left' 
                     color="#d6ccc2"
                     fontSize={{sm:"1.2rem",md:"1.3rem",lg:"1.5rem"}}
                     px="1.5rem"
                     py={3}>
                       {data.question}
                     </Box>
                     <AccordionIcon 
                     color="#d6ccc2"
                     width="1.5rem"
                     height="1rem"
                     cursor="pointer"  />
                   </AccordionButton>
                 </h3>
                 <AccordionPanel
                  pb={4} 
                  color="#fff"
                  fontSize="1.2rem"
                  borderInline="0.3px solid #009688"
                  letterSpacing="2.2px"
                  lineHeight="24px"
                  >
                   {data.answer}
                 </AccordionPanel >
               </AccordionItem>
            ))}
       </Accordion>
    </div>
  )
}

export default Faq
