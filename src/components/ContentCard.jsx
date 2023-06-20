import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material'

function ContentCard({ img, title, desc }) {
  return (
    <Card sx={{ width: '420px', marginLeft: '18px', backgroundColor: 'transparent' }}>
      <CardMedia
        sx={{ height: '420px', width: '420px', borderRadius: '14px' }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography variant='subtitle1' sx={{ color: 'white', fontWeight: 'bold' }}>{title}</Typography>
        <Typography variant='body2' sx={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '4em', height: '6em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{desc}</Typography>
      </CardContent>
    </Card>
  )
}

export default ContentCard