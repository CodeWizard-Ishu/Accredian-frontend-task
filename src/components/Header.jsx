import React, { useState } from 'react';
import { Box, Button, styled, Typography } from "@mui/material";
//img
import headerImg from '../assets/bg.png'
import ReferNowModal from './Modal';
import validator from 'email-validator';

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'white',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleSubmit = async (formData) => {
        if (!validator.validate(formData.referrerEmail)) {
            alert('Your email address does not exists!');
            return;
        }
        if (!validator.validate(formData.refereeEmail)) {
            alert('Invalid Referee email address');
            return;
        }
        try {
            const response = await fetch('https://accredian-backend-utkarsh.onrender.com/api/referrals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to submit referral');
            }

            // Optionally handle success, close modal, show message, etc.
            handleCloseModal();
            alert('Referral submitted successfully!');
        } catch (error) {
            console.error('Error submitting referral:', error.message);
            alert('Failed to submit referral. Please try again later.');
        }
    };

  return  (
        <CustomBox component='header'>
            <BoxText style={{marginLeft: '50px', marginRight: '50px'}} 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#000',
                }}
                >Let's Learn & Earn</Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    fontSize: '20px',
                    lineHeight: 1.6,
                    color: '#000', 
                }}
                >
                   Get a chance to win up-to<br />
                   <span style={{fontWeight: '600', fontSize: '2.5rem', color:'#1973e9'}}>
                    Rs. 15,000
                    </span> 
                </Typography>

                <Box>
                <ReferNowModal open={openModal} handleClose={handleCloseModal} handleSubmit={handleSubmit} />
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
                    onClick={handleOpenModal}
                >
                Refer Now
            </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    marginBottom: -15,
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header