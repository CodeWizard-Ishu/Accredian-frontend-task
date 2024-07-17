import { Box, Button, styled, Typography } from "@mui/material";
import { useState } from "react";

const CustomTypography = styled(Typography) ({
    fontSize: '1.1rem',
    textAlign: 'start',
    lineHeight: '1.5',
    color: '#black',
    marginTop: '1.5rem',
    fontWeight: 'bold',
    cursor: "pointer",
    ':hover': {
        color: '#1973e9'
    }
    
})

const Feedback = () =>{
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return(
        <Box padding={'20px'}>    
            <Typography
                    variant='h4'
                    component='h1'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#000', textAlign: "center"
                        }}>Frequently Asked &nbsp;
                        <span style={{fontWeight: '600', color:'#1973e9'}}>
                            Questions?
                            </span> 
            </Typography>
            <Box style={{display:'flex', gap: '20px', alignItems: 'center', justifyContent: 'center'}}>
                <Box style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Button variant="outlined">Eligibility</Button>
                    <Button variant="outlined">How to Use?</Button>
                    <Button variant="outlined">Terms & Conditions</Button>
                </Box>
                <Box style={{padding: '5px', width: "70%"}}>
                    <Box>
                        <CustomTypography variant="p" onClick={() => setOpen(!open)}>Do I need to have prior Product Management and Project Management experience to enroll in the program?</CustomTypography>
                        <Typography variant="p"
                        style={{ display: open ? 'block' : 'none' }}>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                        suitable for individuals from any field of work.</Typography>
                    </Box>
                    <Box marginTop={'10px'}>
                        <CustomTypography variant="p" onClick={() => setOpen1(!open1)}>What is the minimum system configuration required?</CustomTypography>
                        <Typography variant="p"
                        style={{ display: open1 ? 'block' : 'none' }}>Intel core i5 9th Gen+ or AMD Ryzen 5 2nd Gen +, with 8GB DDR5 RAM</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Feedback;