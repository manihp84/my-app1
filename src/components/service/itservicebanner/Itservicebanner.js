import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import'./Itservicebanner.css';
import { Itservicedata } from "../../../Data/Data";
const Itservice = () => {
    return(
        <div style={{backgroundImage:`url(${process.env.PUBLIC_URL+"/images/bannerimg/service.jpg"})`, height: 450, backgroundSize: "cover", backgroundPosition: "center"}}>
        <Container fluid className="ptb-120">
      <Row>
        {
          Itservicedata.map((ele, index)=>{
            return(
              <Col>
              <div className="text-center">
                  <h2>{ele.heading}</h2>
                  <h6 className={ele.clchange}>{ele.heading_1}</h6>
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

export default Itservice;