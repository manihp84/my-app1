import React from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Contactus.css';
import { Contactheading, Contactheading_2 } from "../../Data/Data";
import { Telephone } from "react-bootstrap-icons";
const Contactus = () => {
    return (
        <div className='contactbanner'>
            <Container fluid>
                <Row>
                    {
                        Contactheading.map((ele, index) => {
                            return (
                                <Col md={6}>
                                    <>
                                        <h3 className={ele.subtitle}>{ele.heading}</h3>
                                    </>
                                    <div className='sub-heading'>
                                        <p>{ele.content}</p>
                                    </div>
                                </Col>

                            )

                        })

                    }
                    {
                        Contactheading_2.map((ele, index) => {
                            return (
                                <Col md={6} className='text'>
                                    <div className='pt-20'>
                                        <Telephone color="blue" size={40}/>
                                        
                                    </div>
                                    <div>
                                        <h6 className={ele.contact}>{ele.heading}</h6>
                                        <h2 className={ele.contact_2}>{ele.heading_2}</h2>
                                    </div>
                                    <div className='contactus_btn mt_20'>
                                        <a className="btn" href={ele.links}>{ele.btntitle}</a>
                                    </div>
                                </Col>

                            )

                        })
                    }
                 
                </Row>
            </Container>
        </div>
    )


}

export default Contactus;