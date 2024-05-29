import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import'./Videosection.css';
import { Col } from "react-bootstrap";


const Videosection = () =>{
return(
    <div className="videobanner video-ptb">
    <Container fluid>
    <Row>
     <Col md={6}></Col>
     <Col md={6}>
        <div className="vieeo-content-inner">
            <h2 className="heading">Share the joy of achieving glorious moments
            <br></br>
            & climbing up the top.
            </h2>
            </div>
     </Col>
       
    </Row>
  </Container>
  </div>

)


}
export default Videosection;