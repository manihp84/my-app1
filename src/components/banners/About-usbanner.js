import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About-usbanner.css';
import { Aboutbannerdata } from "../../Data/Data";

const Aboutusbanner = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bannerimg/hero-bg.webp"})`, height: 550, backgroundSize: "cover", backgroundPosition: "center" }}>

      <Container fluid>
        <Row>
          {
            Aboutbannerdata.map((ele, index) => {
              return (<Col lg={8} className="m-auto">
                <div className="text-center">
                  <h1>{ele.heading}</h1>
                  <h5>{ele.heading_1}</h5>
                </div>
              </Col>
              )

            })
          }
         
        </Row>
      </Container>
    </div>
  );

}

export default Aboutusbanner;