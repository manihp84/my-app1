import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Servicecard.css';
import { Servicecard_2, Servicecarddata } from "../../../Data/Data";
const Servicecard = () =>{
    return(
        <Container fluid className="pt-120">
      <Row>
        {
            Servicecarddata.map((ele,index)=>{
                return(
                <Col lg={12}>
                    <div className="text-1">
                        <h3>{ele.heading}</h3>
                        <h4>{ele.heading_2}</h4>
                    </div>
                </Col>
                
                )
            })
        }
       
        {
            Servicecard_2.map((ele,index)=>{
                return(
                    <Col md={4}>
                    <div className='image-box-wrap'>
                        <div className='box-image'>
                            <img src={ele.imgLink} alt='' />
                        </div>
                        <div className='content'>
                            <h5 className={ele.textcolor}>{ele.heading}</h5>
                            <div className='text'>
                                <p>{ele.content}</p>
                            </div>
                        </div>
                    </div>
                </Col>
                
                )
            })
        }
        
        
      </Row>
    </Container>
    )
}

export default Servicecard;