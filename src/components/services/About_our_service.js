import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Aboutservicedata, Aboutservicedata_2, Aboutservicedata_3 } from "../../Data/Data";
import './About_our_service.css';

const Aboutourservice = () => {
    return (
        <div className="ptb_100 bg-gray">
            <Container fluid>
                <Row>
                    {
                        Aboutservicedata.map((ele, index) => {
                            return (
                                <Col lg={12}>
                                    <h6 className={ele.textcolor}>{ele.heading}</h6>
                                    <h3 className={ele.textcolor_2}>{ele.heading_1} <span className="clchange_1">{ele.clchange}</span></h3>
                                </Col>
                            )

                        })
                    }

                </Row>
                <div className="pb-70">
                    <Row>
                        {
                            Aboutservicedata_2.map((ele,index)=>{
                                return(
                            <Col lg={{span: 4, offset:1}} >
                                <div className="modern-number">
                                    <h2><span className="mark-text">{ele.heading}</span>
                                    <p>{ele.content}</p>
                                    </h2>
                                    <div className="heading">
                                    <h6>{ele.heading_2}</h6>
                                    </div>
                                   
                                </div>
                            </Col>
                            
                            )
                            })
                        }
                        {
                            Aboutservicedata_3.map((ele,index)=>{
                                return(
                            <Col lg={{span: 5, offset:1}} >
                                <div className="cybersecurity-about-text">
                                    <div className="text">
                               <p>{ele.content}</p>
                               </div>
                               </div>
                            </Col>
                            
                            )
                            })
                        }

                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Aboutourservice;