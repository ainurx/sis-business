import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"

function Navigation(){
  return (
    <AppBar position='static' sx={{ backgroundColor: 'transparent', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={require('../assets/img/sis-logo-colored.png')} alt='sis-business-logo' />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu 
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={false}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}>
              <MenuItem>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Service</Typography>
              </MenuItem>
                <Typography textAlign="center">Reviews</Typography>
              <MenuItem>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }} justifyContent='center'>
              <Button sx={{ color: '#DAFE8D' }}>Home</Button>
              <Button sx={{ color: 'white' }}>About</Button>
              <Button sx={{ color: 'white' }}>Service</Button>
              <Button sx={{ color: 'white' }}>Reviews</Button>
          </Box>
          <Box>
            <Button sx={{ color: 'white', border: '1px solid white', borderRadius: '2em', paddingX: '16px' }}>Contact Us</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation