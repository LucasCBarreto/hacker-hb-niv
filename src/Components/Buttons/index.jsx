import React from 'react'
import './Buttons.css'

const Buttons = ({ drinksResetCount, drinksCount }) => (
    <div className="sections-buttons">
        <button onClick={drinksResetCount.bind()}>Zerar</button>
        <button onClick={drinksCount.bind()}> Adicionar </button>
    </div>
)

export default Buttons