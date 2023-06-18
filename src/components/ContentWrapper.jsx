import { 
  Box,
  Container, 
  Typography,
  Grid
} from "@mui/material"

import MainCard from "./MainCard"
import TestimonyCard from "./TestimonyCard"

const partnerImage = [
  '../assets/img/google.png',
  '../assets/img/unilever.png',
  '../assets/img/amazon-pay.png',
  '../assets/img/apple.png',
  '../assets/img/samsung.png'
]

const content = [
  {
    img: require('../assets/img/main-1.png'),
    title: 'Customer conversations in one inbox',
    desc: 'lorem ipsum...'
  },
  {
    img: require('../assets/img/main-2.png'),
    title: 'Understanding the customer',
    desc: 'lorem ipsum...'
  },
]

const testimony = [
  {
    desc: '',
    client: 'Dianne Russel',
    position: 'Nursing Assistant',
    profile: require('../assets/img/user-1.png')
  },
  {
    desc: '',
    client: 'Cameron Williamson',
    position: 'Web Designer',
    profile: require('../assets/img/user-2.png')
  },
  {
    desc: '',
    client: 'Jenny Wilson',
    position: 'Marketin Coordinator',
    profile: require('../assets/img/user-3.png')
  },
  {
    desc: '',
    client: 'Bessie Cooper',
    position: 'Medical Assistant',
    profile: require('../assets/img/user-4.png')
  },
  {
    desc: '',
    client: 'Cody Fisher',
    position: 'President of Sales',
    profile: require('../assets/img/user-5.png')
  },
  {
    desc: '',
    client: 'Darrel Steward',
    position: 'Dog Trainer',
    profile: require('../assets/img/user-6.png')
  },
]


function ContentWrapper(){
  return (
    <div style={{ position: 'relative'}}>
      <Box sx={{ marginTop: '12px', borderTop: '1px solid #D1D1D1', borderBottom: '1px solid #D1D1D1', paddingY: '24px'}}>
        <Container>
          <Typography variant='h5' sx={{ color: 'white'}} align="center">Join the 14k + business using SIs</Typography>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div className='card-partner'>
              <img src={require('../assets/img/google.png')} alt='google'/> 
            </div>
            <div className='card-partner'>
              <img src={require('../assets/img/unilever.png')} alt='unilever'/> 
            </div>
            <div className='card-partner'>
              <img src={require('../assets/img/amazon-pay.png')} alt='amazon-pay'/> 
            </div>
            <div className='card-partner'>
              <img src={require('../assets/img/apple.png')} alt='apple'/> 
            </div>
            <div className='card-partner'>
              <img src={require('../assets/img/samsung.png')} alt='samsung'/> 
            </div>
          </div>
        </Container>
      </Box>
      <div style={{ position: 'absolute', top: 190, right: 0}}>
        <img src={require('../assets/img/bg-image.png')} alt='side-bg'/> 
      </div>
      <Container sx={{marginTop: '64px'}}>
        {
          content.map(c=>(
            <MainCard img={c.img} title={c.title} desc={c.desc}/>
          ))
        }
      </Container>
      <Box sx={{ marginTop: '360px', borderTop: '1px solid #D1D1D1', borderBottom: '1px solid #D1D1D1', paddingY: '24px'}}>
        <div style={{ textAlign: 'center'}}>
          {
            [1, 2, 3, 4, 5].map(v=> <img src={require('../assets/img/star.png')} alt='rating-star'/>)
          }
        </div>
        <Container>
          <Typography variant='h5' sx={{ color: 'white', fontWeight: 'bold', marginBottom: '32px'}} align="center">Customers have consistently <br/> rated SIs 5/5</Typography>
          <Grid container spacing={3}>
            {
              testimony.map(t=>( 
                <Grid item md={4}>
                  <TestimonyCard client={t.client} position={t.position} profile={t.profile} />
                </Grid>  
              ))
            }
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default ContentWrapper