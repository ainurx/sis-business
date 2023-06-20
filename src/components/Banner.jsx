import { Box, Button, Container, Typography } from '@mui/material'

import ContentCard from './ContentCard'

const contentData = [
  {
    img: require('../assets/img/content-1.png'),
    title: 'Mastering the Art of Sales',
    desc: 'Sales is the lifeblood of any business, driving revenue and growth. To excel in the competitive marketplace, sales professionals need to continuously refine their skills, adapt to changing customer preferences, and employ effective strategies.'
  },
  {
    img: require('../assets/img/content-2.png'),
    title: 'The Powr of Understanding Your Customer',
    desc: 'Customers are the lifeblood of any business. Understanding their needs, preferences, and behaviors is essential for building strong relationships that drive business success. In this article,'
  },
  {
    img: require('../assets/img/content-3.png'),
    title: 'Captivating Customers with Compelling',
    desc: 'When it comes to selling a product, effective presentation is key. A well-crafted and compelling product description has the power to captivate potential customers, generate interest, and ultimately drive sales. In this article, we will explore the art of presenting a product and provide insights into creating descriptions that resonate with customers and showcase the value of your offerings.'
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
      <div style={{ overflow: 'hidden', height: '560px'}}>
        <div style={{ position: 'relative', marginTop: '32px' }}>
          <div style={{ display: 'flex', position: 'absolute', right: -30}}>
            {
              contentData.map(c=> (
                <ContentCard img={c.img} title={c.title} desc={c.desc}/>
              ))
            }
          </div>
          <div className='right-shadow'></div>
        </div>
      </div>
    </Box>
  )
}

export default Banner