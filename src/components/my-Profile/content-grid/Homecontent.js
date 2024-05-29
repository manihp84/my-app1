import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Homecontent.css';
import { Homecontentdata, Homecontentdatatwo } from "../../../Data/Data";
import Button from 'react-bootstrap/Button';
// import { Link } from "react-bootstrap-icons";
// import { App, Calendar, Camera, Display, Envelope, Facebook, GeoAlt, Instagram, Laptop, Linkedin, Phone, Twitter, } from "react-bootstrap-icons";

const Homecontent = () => {
  return (
    <div className="ptb-100">
      <Container>
        <Row>
          {
            Homecontentdata.map((ele, index) => {
              return (
                <Col xxl={3} Col xl={3}>
                  <div className="parsonal-info-area">
                    <div className="parsonal-info-img">
                      <img src={ele.imgsrc} alt="" />

                    </div>
                    <h4 className={ele.clheading}>{ele.heading}</h4>
                    <span className={ele.clheading_2}>{ele.heading_2}</span>
                    <ul>

                      <li>{ele.Facebook}</li>
                      <li>{ele.Twitter}</li>
                      <li><a href={ele.link}>{ele.Instagram}</a></li>
                      <li>{ele.Linkedin}</li>
                    </ul>
                    <div className="mb-30">
                      <div className="contact-item">
                        <div className="icon_2">
                        {ele.Phone}
                        </div>
                        <div className="text_portfolio">
                          <span>{ele.spheading}</span>
                          <p>{ele.content}</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="icon_2">
                          {ele.mail}
                        </div>
                        <div className="text_portfolio">
                          <span>{ele.spheading_1}</span>
                          <p>{ele.content_2}</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="icon_2">
                     {ele.location}
                        </div>
                        <div className="text_portfolio">
                          <span>{ele.spheading_2}</span>
                          <p>{ele.content_3}</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="icon_2">
                          {ele.Calendar}
                        </div>
                        <div className="text_portfolio">
                          <span>{ele.spheading_3}</span>
                          <p>{ele.content_4}</p>
                        </div>
                      </div>
                    
                    <div className="contact-item">
                      <div className="icon_2">
                       {ele.Education}
                      </div>
                      <div className="text_portfolio">
                      <h2>{ele.heading_6}</h2>
                      <p>{ele.content_7}</p>
                      <p>{ele.content_8}</p>
                      <h2>{ele.heading_9}</h2>
                      <p>{ele.content_9}</p>
                      <p>{ele.content_10}</p>
                      <p>{ele.content_11}</p>
                      <p>{ele.content_12}</p>
                      </div>
                    </div>
                    </div>
                    <div className="button-1">
                      <Button variant="outline-primary">{ele.heading_3}</Button>{' '}
                    </div>
                  </div>


                </Col>
              )
            })
          }
          
          {
            Homecontentdatatwo.map((ele, index) => {
              return (
                <Col xxl={8} Col xl={9}>
                  <div className="content-wrap">
                    <div className="ptb-60">
                      <div className="mb-15">
                        <h2 className={ele.clchange}>{ele.heading}</h2>
                        <p>{ele.content}</p>
                        <p>{ele.content_1}</p>
                      </div>

                    </div>
                    <div className="prl-60">
                    <div className="section-title">
                      <h3>{ele.heading_1}</h3>
                    </div>
                 
                  <Row>
                    <Col md={6}>
                      <div className="what-do-item">
                        <div>
                      {ele.Laptop}                     
                        </div>   
                        <div>
                        <h4>{ele.heading_2}</h4>
                        <p>{ele.content_2}</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                    <div className="what-do-item">
                        <div>
                        {ele.App}                  
                        </div>   
                        
                        <div>
                        <h4>{ele.heading_3}</h4>
                        <p>{ele.content_3}</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                    <div className="what-do-item">
                        <div>
                       {ele.Camera}                     
                        </div>   
                       
                        <div>
                        <h4>{ele.heading_4}</h4>
                        <p>{ele.content_4}</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                    <div className="what-do-item">
                        <div>
                      {ele.Display}                  
                        </div>   
                       
                        <div>
                        <h4>{ele.heading_5}</h4>
                        <p>{ele.content_5}</p>
                        </div>
                      </div>
                      
                    </Col>
                    <Col md={6}>
                    <div className="what-do-item">
                      <div>
                        {ele.PatchCheck}
                      </div>
                      <div>
                        <h4>{ele.heading_10}</h4>
                        <p>{ele.content_7}</p>
                        
                      </div>

                      </div>

                    </Col>
                    <Col md={6}>
                    <div className="what-do-item">
                      <div>
                        {ele.PatchCheck}
                      </div>
                      <div>
                        <h4>{ele.heading_10}</h4>
                        <p>{ele.content_7}</p>
                        
                      </div>

                      </div>

                    </Col>
                  </Row>                 
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

export default Homecontent;