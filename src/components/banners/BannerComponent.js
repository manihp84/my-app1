import React from "react";
// import Button from 'react-bootstrap/Button'; 
// import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
//  import ExampleCarouselImage from 'components/ExampleCarouselImage';
//  import { BannerData } from "../../Data/Data";
import './Banner.css';
import {BannerData} from '../../Data/Data';


const BannerComponent = () => {
  return (
   
        <Carousel>
        {   BannerData.map((ele, index) => {
      return(
  <Carousel.Item>
    <div className="banner">
      <img src={ele.imgLink} className={ele.clchange} alt=""/>
    </div>
    <Carousel.Caption>
      <h3>{ele.heading}</h3>
      <p>{ele.content}</p>
    </Carousel.Caption>

  </Carousel.Item>
    )
  })}
  </Carousel>
    

      );
    }



export default BannerComponent;




