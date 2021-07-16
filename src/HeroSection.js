import React from 'react'
import './HeroSection.css'


function HeroSection() {
    return (
        
        <div className='hero-container'>
            <video src="/videos/Sailing.mp4" autoPlay loop muted />
                <h4 className='container'>FIND THE PERFECT STAY</h4>
                <p className='para'>Trusted by over thousands of customers</p>
           
        </div>
    )
}

export default HeroSection