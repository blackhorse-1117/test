import React, { useState } from 'react';
import { graphql } from 'gatsby';

import './custom.css'

export const ProductCard = ({ data }) => {

    const [description, showDescription] = useState(false);
    const product = data.node.frontmatter;

    return (
        <div className='product-card-holder' onClick={_ => {
            showDescription(!description)
        }}>
            <h1 className='product-name'>{product.name}</h1>

            <div className='product-header'>
                <div>
                    <h3>€ {product.original_price}</h3>
                    <div className='product-discount-line'>
                        <h2>€ {product.discount_price}</h2>
                        <span><i>%</i></span>
                    </div>
                    <div className='product-orange-first'><p>{product.orange_first}</p></div>
                </div>
                <div className='product-image-holder'>
                    <img src={require('../images/Prelancio bilancia_mockup desktop_block table 3 photo product 1.png')} />
                </div>
            </div>

            <span className='product-orange-second'>{product.orange_second}</span>

            <div className='product-body-price'>
                <span className='product-original-price'><h3>€ {product.discount_price} EUR </h3></span>
                <span className='product-discount-price'><h4>€ {product.original_price} (28% sconto)</h4></span>
            </div>

            {description &&
                <ul className='product-description'>
                    {product.description.map(item => (
                        <li className='product-description-item'>{item}</li>
                    ))}
                </ul>
            }


            <div className='product-delivery-time'>
                <span className='title'>Data stimata di spedizione</span><br />
                <span>{product.delivery_time}</span>
            </div>

            <div><span>{product.purchased} acquistate / {product.available} disponibili</span></div>
            <p>Spedizione €{product.shipment}</p>

            <button className='product-btn'>SELEZIONA</button>
        </div>
    )
}