import React from 'react'
import './QuantityDrink.css'

const QuantityDrink = ({ count }) => (
    <div className="quantity-drinks">
        <span> { count } </span>
    </div>
)

export default QuantityDrink