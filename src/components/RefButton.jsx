import React from 'react';
import { Button } from '@mui/material';

const ReferNowButton = ({ handleOpen }) => {
    return (
        <Button 
            variant='contained'
            sx={{
                mr: 2,
                px: 4, 
                py: 1,
                fontSize: '0.9rem',
                textTransform: 'capitalize',
                borderRadius: 0,
                borderColor: '#14192d',
                color: '#fff',
                backgroundColor: '#1973e9',
                "&&:hover": {
                    backgroundColor: "#343a55"
                },
                "&&:focus": {
                    backgroundColor: "#343a55"
                }
            }}
            onClick={handleOpen}
        >
            Refer Now
        </Button>
    );
};

export default ReferNowButton;
