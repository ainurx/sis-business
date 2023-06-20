import { 
  Box,
  Container, 
  Typography,
  Grid
} from "@mui/material"

import MainCard from "./MainCard"
import TestimonyCard from "./TestimonyCard"

const content = [
  {
    img: require('../assets/img/main-1.png'),
    title: 'Customer conversations in one inbox',
    desc: 'That’s what your customer want. Keep the conversation flowing from chat to video to collaboration and more as you answer their question.',
    isVideo: false
  },
  {
    img: require('../assets/img/main-2.png'),
    title: 'Understanding the customer',
    desc: 'Successful sales professionals prioritize understanding the needs, preferences, and pain points of their customers.',
    isVideo: true
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
      <Box sx={{ marginTop: '42px', borderTop: '1px solid #D1D1D1', borderBottom: '1px solid #D1D1D1', paddingY: '24px'}}>
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
      {/* CONTENT SECTION */}
      <Container sx={{marginTop: '64px', position: 'relative'}}>
        {
          content.map(c=>(
            <MainCard img={c.img} title={c.title} desc={c.desc} isVideo={c.isVideo}/>
          ))

        }
        <Box sx={{ position: 'absolute', top: 24}}>
          <Box className='mini-card' sx={{ width: 'max-content', marginBottom: '18px'}}>
            <Box sx={{ display: 'flex'}}>
              <Typography sx={{ color: 'white', fontWeight: 'bold', marginRight: '62px'}} variant='h4'>+76%</Typography>
              <Box sx={{ display: 'flex', border: '2px solid #D9D9D9', width: '46px', height: '46px', justifyContent: 'center', alignItems: 'center', borderRadius: '6em'}}>
                <img src={require('../assets/img/left_click.png')} alt='sales-btn'/>
              </Box>
            </Box>
            <Typography sx={{ color: 'white' }}>Of sales <br/>equivalent</Typography>
          </Box>
          <Box className='mini-card' sx={{ width: '280px'}}>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)'}} variant='subtitle2'>#About Us</Typography>
            <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: 400}} variant='h6'>"Simplicity of design, crafted for you, by <br/>our professionals"</Typography>
            <Box sx={{ display: 'flex', marginTop: '12px', justifyContent: 'space-between', backgroundColor: '#FFF', borderRadius: '2em', padding: '6px', height: '2em', alignItems: 'center'}}>
              <Typography variant='subtitle2' sx={{ marginLeft: '12px'}}>Join Community</Typography>
              <Box sx={{ width: '2em', height: '2em', backgroundColor: '#DAFE8D', justifyContent: 'center', alignItems: 'center', display: 'flex', borderRadius: '2em' }}>
                <img src={require('../assets/img/join-btn.png')} alt='join-btn'/>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ position: 'absolute', top: 570}}>
          <Box sx={{ backgroundColor: '#0F0F0F', display: 'flex', width: '160px', borderTopRightRadius: '1em', borderTopLeftRadius: '1em', padding: "8px 18px", alignItems: 'center', justifyContent: 'space-between'}}>
            <img src={ require('../assets/img/content-profile.png')} alt='content-profile' style={{ height: '34px', width: '34px'}} /> 
            <Box>
              <Box sx={{ background: 'rgba(255, 255, 255, 0.3)', height: '6px', width: '90px', borderRadius: '1em', marginBottom: '6px'}}></Box>
              <Box sx={{ background: 'rgba(255, 255, 255, 0.3)', height: '6px', width: '65px', borderRadius: '1em'}}></Box>
            </Box>
            <Box>
              <img src={require('../assets/img/white-next-arrow.png')} alt='next'/> 
            </Box>
          </Box>
          <Box sx={{ backgroundColor: '#FFF', padding: "8px 14px", borderBottomLeftRadius: '1em', borderBottomRightRadius: '1em'}}>
            <Typography variant='h6'>How happy are <br/> you at work</Typography>
          </Box>
        </Box>
      </Container>
      {/* TESTIMONY SECTION */}
      <Box sx={{ marginTop: '160px', borderTop: '1px solid #D1D1D1', borderBottom: '1px solid #D1D1D1', paddingY: '24px'}}>
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