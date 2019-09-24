import React from 'react'
import './header.css'
import AmbevLogo from '../../assets/logo-ambev.png'
import HbsisLogo from '../../assets/logo-hbsis.png'

const Header = () => (
    <header className="container-header">
        <div>
            <img 
                src={HbsisLogo} 
                className="img-logo" 
                alt="logo hbsis" 
                srcset=""/>
        </div>

        <div>
            <img 
                src={AmbevLogo} 
                alt="logo ambev" 
                className="img-logo" 
                srcset=""/>
        </div>
  </header>
)

export default Header