import type { ReactElement } from 'react';
import { Grid, Box, Card, Typography, Stack } from '@mui/material';
import Link  from 'next/link';
import PageContainer from '../../../src/components/container/PageContainer';
import AuthRegister from '../auth/AuthRegister';
import BlankLayout from '../../../src/layouts/blank/BlankLayout';
import Image from "next/image";
import Logo from '../../../src/layouts/full/shared/logo/Logo';
import sideImage from '../../../public/images/backgrounds/login-bg.svg'
const Register2 = () => (
  <PageContainer title="Register" description="this is Register page">
    <Box
      sx={{
        position: 'relative',
        '&:before': {
          content: '""',
          background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: '0.3',
        },
      }}
    >
      <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          sm={6}
          lg={7.5}
          xl={3}
          
        >
          <Logo />
<Image src={sideImage} alt='sideimage' height='500' width='500' />
         </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3} display="flex">
        <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
            <Box display="flex" >
            <h3 className='MuiTypography-root MuiTypography-h3 mui-style-1lvhkdm'>Welcome to moderize</h3>
            </Box>
            
            <AuthRegister
              subtext={
                <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
                 Your Admin Dashboard
                </Typography>
              }
              subtitle={
                <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
                  <Typography color="textSecondary" variant="h6" fontWeight="400">
                    Already have an Account?
                  </Typography>
                  <Typography 
                    component={Link}
                    href="/authentication/login"
                    fontWeight="500"
                    sx={{
                      textDecoration: 'none',
                      color: 'primary.main',
                    }}
                  >
                    Sign In
                  </Typography>
                </Stack>
              }
            />
          </Card>
          </Grid>
      </Grid>
    </Box>
  </PageContainer>
);

export default Register2;

Register2.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};