import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography
 } from '@mui/material'

function MainCard({img, title, desc, isVideo}){
  return (
    <Card sx={{ display: 'flex', marginBottom: '42px', marginLeft: '132px', backgroundColor: 'transparent'}}>
      <Box sx={{ position: 'relative'}}>
        <CardMedia sx={{height: '500px', width: '580px', borderRadius: '24px'}} image={img} title={title} />
        <Box sx={{ position: 'absolute', bottom: -4, width: '580px', height: '180px', background: 'linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 100%)', borderRadius: '24px'}}></Box>
        {
          isVideo && (
            <img style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} src={require('../assets/img/play.png')} alt='play'/>
          )
        }
      </Box>
      <CardContent sx={{ marginY: 'auto' }}>
        <Typography variant='h4' sx={{ color: 'white'}}>{title}</Typography>
        <Typography variant='body1' sx={{ color: 'rgba(255, 255, 255, 0.6)', width: '360px'}}>{desc}</Typography>
      </CardContent>
    </Card>
  )
}

export default MainCard