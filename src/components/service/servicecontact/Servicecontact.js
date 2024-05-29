import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Servicecontact.css';
import { Servicecontactdata } from "../../../Data/Data";
import { Envelope, Telephone } from 'react-bootstrap-icons';
const Servicecontact = () => {
    return (
        <div className="" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bannerimg/service-2.jpg"})`, height: 550, backgroundSize: "cover", backgroundPosition: "center" }}>
        <Container>
            <Row>
            <Col md={8}></Col>
                {
                    Servicecontactdata.map((ele,index)=>{
                        return(
                            <Col md={4} className="text">
                                <div className="contact">
                                    <div className="icon">
                                    <Telephone size={50} />
                                   
                                    </div>
                                </div>
                                <div className="main-contact">
                                    <h6>{ele.heading}</h6>
                                    <p className={ele.clrchange}>{ele.content}</p>
                                </div>
                                <div className="icon-1">
                                <Envelope size={50} />
                           
                                </div>
                                <div className="main-cont">
                                    <h5>{ele.heading_2}</h5>
                                    <p className={ele.clrchange}>{ele.content_2}</p>

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

export default Servicecontact;