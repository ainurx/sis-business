import {
  Card, 
  CardContent,
  Typography
} from '@mui/material'

function TestimonyCard({client, position, profile, desc}){
  return (
    <Card sx={{ border: '1px solid white', borderRadius: '16px', backgroundColor: 'transparent'}}>
      <CardContent>
        <Typography sx={{ color: 'white'}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, eius ab. Nulla, amet! Consectetur fuga excepturi incidunt neque atque esse, in quisquam nihil ut, laudantium blanditiis porro quasi nam modi.
        </Typography>
        <div style={{ display: 'flex', marginTop: '12px'}}>
          <img src={profile} alt='profile' style={{ width: '48px', height: '48px', marginRight: '18px' }} />
          <div>
            <Typography variant='body1' sx={{ color: 'white', fontWeight: 'bold'}}>{client}</Typography>
            <Typography variant='body1' sx={{ color: 'white'}}>{position}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonyCard