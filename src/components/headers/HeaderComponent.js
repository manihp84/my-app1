import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {HeaderData, HeaderDataDropdown} from '../../Data/Data'
import './Header.css';
import { Link } from 'react-router-dom';
const HeaderComponent = () => {
  
    return (
      <div className="header-component">
      <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL+"/images/logo/logo-dark.webp"} className='logo' alt='logo'/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                 {
                     HeaderData.map((ele, index)=>{
                      return(<>
                           <>
                           <Link  to={ele.Link} className='nav-link'>
                            
                            {ele.title}</Link>
                          </>
                         </>)
                 
                  })
                 }
                 
                  
                    {
                     HeaderDataDropdown.map((ele, index)=>{
                      return(
                        <><NavDropdown title={ele.title} id="basic-nav-dropdown">
                       {
                        ele.content.map((data, i)=>{
                          return(
                          <><NavDropdown.Item href={data.link}>{data.titles}</NavDropdown.Item></>
                          
                          )
                        })
                       }   
                        
                      </NavDropdown></>
                      )
                     })
                    }
                    
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>          
              </div> 

    );
  }

export default HeaderComponent;