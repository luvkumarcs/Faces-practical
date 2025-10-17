import React from 'react'
import Banner from '../components/Banner'
// import Slider from '../components/Slider'
import Sliders from '../components/Slider'
import Store from '../components/Store'
import Review from '../components/Review'

const Home = () => {
  return (
    <div>
       <Banner/>
       <Review/>
       <Sliders/>
       <Store/>
    </div>
  )
}

export default Home
