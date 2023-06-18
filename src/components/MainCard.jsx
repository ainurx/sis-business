import {
  Card,
  CardMedia,
  CardContent,
  Typography
 } from '@mui/material'

function MainCard({img, title, desc, isVideo}){
  return (
    <Card sx={{ display: 'flex', marginBottom: '42px', backgroundColor: 'transparent'}}>
      <CardMedia sx={{height: '400px', width: '600px', borderRadius: '24px'}} image={img} title={title} />
      <CardContent sx={{ marginY: 'auto' }}>
        <Typography variant='h4' sx={{ color: 'white'}}>{title}</Typography>
        <Typography variant='body1' sx={{ color: 'white'}}>{desc}</Typography>
      </CardContent>
    </Card>
  )
}

export default MainCard