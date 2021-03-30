import React from 'react';
import aboutimage from '../images/about.png'
function About()
{
    return(
        <div id="about">
           <div className='about-text'>
               <h1>Gift delicious moments</h1>
               <p><ol>Get Free Regular Fries On Orders Above Rs. 200<br/>
 <li>Offer can be redeemed by a user once per day</li>
 <li>Offer Applicable on minimum spends of Rs.200</li></ol></p>
               <button>Read More</button>

           </div>
           <div className="about-image">
               <img src={aboutimage} alt=''/>

           </div>
            </div>
        
    )
}

export default About;