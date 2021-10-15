import React from 'react'
import './navigation.css'
import Nav  from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks(){
    return navigationLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function NavigationBar() {
    return (
        <div id="home">
            <Navbar className="navigation__container" 
            style={{ zIndex: '2', position: 'fixed', top: '0', width: '100%'}}
            collapseOnSelect
            expand='md'>
            <Navbar.Brand style={{ marginLeft: '1rem'}} href="#home">Armstrong</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight:'1rem', borderColor:'none'}}>
                <Nav style={{ margin:'0 1rem'}} className="links">
                    {createLinks()}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
