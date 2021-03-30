import React from 'react';
import Productsbox from './Productsbox';
import pimage1 from '../images/s1.png'
import pimage2 from '../images/s2.png'
function Products()
{
    return(
        <div id="products">
            <h1>G P S Menu's</h1>
            <p>A delight for veggie and non-veg Burger lovers</p>
            <div className='a-container'>
            <Productsbox image={pimage1} title="McSpicy Chicken Burger"/>
            <Productsbox image={pimage2} title="Aloo tiki"/>
            <Productsbox image={pimage1} title="McSpicy Chicken Burger"/>
            </div>

        </div>
    )
}

export default Products;