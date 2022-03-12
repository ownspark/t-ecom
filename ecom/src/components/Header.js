import React from 'react';
import { Nav, Container } from 'react-bootstrap';
const Header = () => {
    return (
      
        <header>
            <Nav className="navbar navbar-expand-lg navbar-dark bg-primary"   collapseOnSelect>
                <Container>
                    <a class="navbar-brand" href="/">Proshop</a>
                    <div className="collapse navbar-collapse">
                    
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                            <a class="nav-link" href="/cart"><i className='fas fa-shopping-cart'/>Cart |</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/login"><i className='fas fa-user'/>Sign In |</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/about"><i class="fa-regular fa-thumbs-up"></i>About</a>
                            </li>

                        </ul>
                    </div>       
                    </Container>
            </Nav>
        </header>
     
    
  )
}

export default Header