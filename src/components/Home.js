import React from 'react'
import banner from '../assets/mycraftybleep.jpg'
import Image from 'react-bootstrap/Image';


const Home = props => {

    return (
        <div className="sitename-container">
         <Image src={banner} alt='banner'/>
         </div>
    )
  }
export default Home
