import React from 'react'
import './HeroSection.css' 
import { Button } from "@material-ui/core";







function HeroSection() {
   
    return (
        
        <div className='hero-container'>
              <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
                 <div>
                 <video src="/videos/Sailing.mp4" autoPlay loop muted />  
                 <h4 className="stay">FIND THE PERFECT STAY</h4>
                 <p className="trust">Trusted by over thousands of customers</p>     

                  

                </div>      

        </div>      
         
    )
}

export default HeroSection