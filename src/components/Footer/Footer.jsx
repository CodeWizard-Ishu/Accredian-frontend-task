import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
    marginRight: "20px"
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Contact Us'} />
        <FooterLink 
        text={'Email us (For Data Science Queries): admissions@accredian.com'} 
        />
        <FooterLink 
        text={'Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)'} 
        />
        <FooterLink 
        text={'Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Programs'} />
        <FooterLink text={'Data Science & AI'} />
        <FooterLink text={'Product Management'} />
        <FooterLink text={'Business Analytics'} />
        <FooterLink text={'Digital Transformation'} />
        <FooterLink text={'Business Management'} />
        <FooterLink text={'Project Management'} />
        <FooterLink text={'Senior Management'} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'our company'} />
        <FooterLink text={'reporting'} />
        <FooterLink text={'get in touch'} />
        <FooterLink text={'management'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Accredian'} />
        <FooterLink text={'Career'} />
        <FooterLink text={'Blog'} />
        <FooterLink text={'Admission Policy'} />
        <FooterLink text={'Referral Policy'} />
        <FooterLink text={'Privacy Policy'} />
        <FooterLink text={'Terms of Service'} />
        <FooterLink text={'Master FAQs'} />

        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; Accredian
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer