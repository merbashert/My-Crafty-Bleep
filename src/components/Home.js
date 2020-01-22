import React from 'react'
import banner from '../assets/mycraftybleep.jpg'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';


const Home = props => {

    return (
        <div className="sitename-container">
            
                <Image src={banner} alt='banner'/>
            
        </div>
    )
}
export default Home
