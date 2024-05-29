import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FooterData, FooterDataImg, FooterDatalist, FooterDatalist_1, FooterDatalist_2 } from "../../Data/Data";
import './Footer.css';

const Footer = () => {
    return (
        <Container fluid className="ptb bg-gray">
            <Row>
                <Col md={4}>
                    <div className="padding">
                        <img src={process.env.PUBLIC_URL + "/images/logo/logo-dark.webp"} className="logo" alt="logo" />
                    </div>
                    <div className="footer-widget__list">
                        <ul>
                            {
                                FooterData.map((ele, index) => {
                                    return (<>

                                        <li href={ele.link} className={ele.textcolor}>
                                            {ele.title}
                                        </li>
                                    </>

                                    )
                                })
                            }

                        
                        </ul>
                    </div>
                </Col>


                <Col md={2}>
                    <div className="footer-widget">
                        <h6>IT Services</h6>
                        <ul>
                            {
                                FooterDatalist.map((ele, index) => {
                                    return (
                                        <>
                                            <>

                                                <li href={ele.link}>{ele.title}</li>

                                            </>
                                        </>

                                    )
                                })

                            }
                        </ul>
                    
                    </div>
                </Col>


                <Col md={2}>
                    <div className="footer-widget">
                        <h6>Quick links</h6>
                        <ul>
                            {
                                FooterDatalist_1.map((ele, index) => {
                                    return (
                                        <>
                                            <>

                                                <li href={ele.link}>{ele.title}</li>

                                            </>
                                        </>

                                    )
                                })

                            }

                          
                        </ul>
                    </div>
                </Col>
                <Col md={2}>
                    <div className="footer-widget">
                        <h6>Support</h6>
                        <ul>
                            {
                                FooterDatalist_2.map((ele, index) => {
                                    return (
                                        <>
                                            <>
                                                <li href={ele.link}>{ele.title}</li>
                                            </>
                                        </>

                                    )
                                })

                            }
                           
                        </ul>
                    </div>
                </Col>
                <Col md={2}>
                    <div className="footer-wid">
                        <div className="mb_50">
                            <ul>
                                {
                                    FooterDataImg.map((ele, index) => {
                                        return (
                                            <>
                                                <>
                                                <li href=""><img src={ele.imgLink} alt="" /></li>
                                                </>
                                            </>

                                        )

                                    })
                                }
                               

                            </ul>

                        </div>

                    </div>

                </Col>
            </Row>
        </Container>

    );


}

export default Footer;