import { Box, Button, Container, Typography } from '@mui/material'

import ContentCard from './ContentCard'

const contentData = [
  {
    img: require('../assets/img/content-1.png'),
    title: 'Mastering the Art of Sales',
    desc: 'lorem ipsum'
  },
  {
    img: require('../assets/img/content-2.png'),
    title: 'The Powr of Understanding Your Customer',
    desc: 'lorem ipsum'
  },
  {
    img: require('../assets/img/content-3.png'),
    title: 'Captivating Customers witch Care',
    desc: 'lorem ipsum'
  },
]

function Banner(){

  const BtnArrowIcon = () => {
    return(
      <img src={require('../assets/img/btn-arrow-icon.png')} alt='btn-arrow-icon'/>
    )
  }

  return (
    <Box sx={{ position: 'relative'}}>
      <Container className='banner-wrapper'>
        <Typography variant='h3' sx={{ color: 'white'}}>Effective sales strategies and techniques are essential for companies</Typography>
        <div style={{ display: 'flex', position: 'absolute', bottom: 0, left: '45%'}}>
          <Button sx={{ color: 'black', backgroundColor: '#DAFE8D', borderRadius: '2em', paddingX: '24px', fontWeight: 'bold'}} endIcon={<BtnArrowIcon/>}>GET STARTED </Button>
          <div style={{ display: 'block', marginLeft: '18px'}}>
            <Typography sx={{ color: 'white'}}>24 Hours</Typography>
            <Typography sx={{ color: 'white'}}>Unlimited Services</Typography>
          </div>
        </div>
        <div className='next-prev-btn-wrapper'>
          <div>
            <img src={require('../assets/img/banner-arrow-left.png')} alt='Previous'/>
          </div>
          <div>
            <img src={require('../assets/img/banner-arrow-right.png')} alt='next'/>
          </div>
        </div>
      </Container>
      <div style={{ overflow: 'hidden', height: '460px'}}>
        <div style={{ display: 'flex', position: 'absolute', right: -50, marginTop: '32px', overflowX: 'hidden' }}>
          {
            contentData.map(c=> (
              <ContentCard img={c.img} title={c.title} desc={c.desc}/>
            ))
          }
          <div className='right-shadow'></div>
        </div>
      </div>
    </Box>
  )
}

export default Banner