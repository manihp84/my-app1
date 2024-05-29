import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Aboutcards.css';
import { Aboutusdata } from "../../Data/Data";
const Aboutcards = () => {
    return (
        <div className="bg-gray">
            <Container fluid>
                <Row>
                    {
                        Aboutusdata.map((ele, index) => {
                            return (
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

        </div>
    )

}
export default Aboutcards;