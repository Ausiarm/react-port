import React from 'react'
import Typed from 'react-typed';
import './header.css'

function Header() {
    return (
        <div className="header_info">
            <h1>Welcome to the Thunderdome</h1>
            <Typed
                strings={[
                    'I can\'t handle the heat',
                    'I\'m feelin alright',
                    'My body is ready...'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
            />
        </div>
    )
}

export default Header
