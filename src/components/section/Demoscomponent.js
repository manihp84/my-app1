import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Demos.css';
import { DemosDataimg } from "../../Data/Data";
import { DemosHeading } from "../../Data/Data";
const Demos = () => {
  return (
    <div className="ptb-100">
    <Container fluid>
      <row>
        {
          DemosHeading.map((ele, index) =>{
            return(
              <>
              <>
              <h6 className={ele.subtitle}>{ele.heading} </h6>
              <h3 className={ele.heading_2}>{ele.heading_1} <span className="colorchange">{ele.clchange}</span></h3>
              </>
              </>
            )

          })
        }

      </row>

      <Row>


        {
          DemosDataimg.map((ele, index) => {
            return (

              <Col md={4}>
                <div className="thumbnail">
                  <img src={ele.imgLink} alt="" />
                </div>
                <div className="box-text">
                  <p >{ele.content}</p>
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

export default Demos;