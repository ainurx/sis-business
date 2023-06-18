import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material'

function Footer(){
  return(
    <Container>
      <Box sx={{ height: '240px', margin: '64px 0', backgroundColor: 'white', borderRadius: '12px'}}>
        <Container>
          <Grid container spacing={3} sx={{ height: '14em'}}>
            <Grid item md={6} sx={{ position: 'relative'}}>
              <img src={require('../assets/img/sis-logo-black.png')} alt='sis-logo' />
              
              <Box sx={{ position: 'absolute', bottom: 0}}>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold'}}>Creon, fit your SIs with us</Typography>
                <Typography variant='subtitle1'>Copyright &#169; 2020 -2021 First Boulevard, all right reserved.</Typography>
              </Box>
            </Grid>
            <Grid item md={6} sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
              <Box>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>About us</Typography>
                <Typography variant='subtitle1' sx={{ color: 'rgba(18, 18, 18, 0.7);'}}>Projects</Typography>
                <Typography variant='subtitle1' sx={{ color: 'rgba(18, 18, 18, 0.7);'}}>Track Record</Typography>
                <Typography variant='subtitle1' sx={{ color: 'rgba(18, 18, 18, 0.7);'}}>Pricing</Typography>
                <Typography variant='subtitle1' sx={{ color: 'rgba(18, 18, 18, 0.7);'}}>Services</Typography>
                <Typography variant='subtitle1' sx={{ color: 'rgba(18, 18, 18, 0.7);'}}>Professional Worker</Typography>
              </Box>
              <Box>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Pricing</Typography>
                <Typography variant='subtitle1' sx={{ color: 'rgba(18, 18, 18, 0.7);'}}>About product</Typography>
                <Typography variant='subtitle1' sx={{ color: 'rgba(18, 18, 18, 0.7);'}}>Management</Typography>
              </Box>
              <Box>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Media</Typography>
                <Typography variant='subtitle1' sx={{ color: 'rgba(18, 18, 18, 0.7);'}}>Privacy Policy</Typography>
                <Typography variant='subtitle1' sx={{ color: 'rgba(18, 18, 18, 0.7);'}}>Development</Typography>
                <Typography variant='subtitle1' sx={{ color: 'rgba(18, 18, 18, 0.7);'}}>Terms & Conditions</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  )
}

export default Footer