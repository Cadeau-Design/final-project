import React from 'react';
import './Card.css'

function Card({ src, title}) {
    return (
        <div className="cardholder">
            
            <div className='card_1'>
                <img src="images/Lisboa.jpg" alt="" />
                     <div className="card_1__info">
                            <h2>Lisboa</h2>
                            
                        </div>
             </div>


             <div className='card_2'>
                <img src="images/RiodeJaneiro.jpg" alt="" />
                     <div className="card_2__info">
                            <h2>Rio de Janeiro</h2>
                            
                        </div>
             </div>

         </div>
    )
}

export default Card