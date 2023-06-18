import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material'

function ContentCard({img, title, desc}){
  return(
    <Card sx={{ width: '320px', marginLeft: '18px', backgroundColor: 'transparent'}}>
      <CardMedia
        sx={{ height: '320px', width: '320px', borderRadius: '14px'}}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography variant='subtitle1' sx={{ color: 'white'}}>{title}</Typography>
        <Typography variant='body1' sx={{ color: 'white'}}>{desc}</Typography>
      </CardContent>
    </Card>
  )
}

export default ContentCard