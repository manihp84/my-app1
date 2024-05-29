import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Service.css';
import { ServiceData } from "../../Data/Data";
const Servicecomponent = () => {
    return (
        <Container fluid className='pt'>
            <Row>
                {
                    ServiceData.map((ele, index)=>{
                        return(
                            <Col md={4}>
                    <div className='image-box-wrap'>
                        <div className='box-image'>
                       <img src={ele.imgLink} alt=''/>
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

export default Servicecomponent;