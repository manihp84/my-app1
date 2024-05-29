// import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import axios from 'axios';
import Header from '../../components/headers/HeaderComponent';
import BannerComponent from "../../components/banners/BannerComponent";
import Servicecomponent from "../../components/services/Servicecomponent";
import Demos from "../../components/section/Demoscomponent";
import Videosection from "../../components/section/Videosection";
import Contactus from "../../components/contact_sec/Contactus";
import Footer from "../../components/footer/Footercomponent";
import Loader from '../../components/loader/loader';




const Homepage = () => {
  // const postData = {
  //   "data": {
  //     type: "posts",
  //     attributes: {
  //       title: "Name",
  //       content: "Manni",
  //       name: "xyz"
  //     }
  //   }
  // }
  // const handlePost = async () => {
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:3030/data',
  //       postData,
  //       {
  //         headers: {
  //           'Content-Type': 'application/vnd.api+json'
  //         }
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };




  // const [text, setText] = useState('Hello');
  // const [count, setCount] = useState(0);

  // const addText = () => {
  //     setText(prevText => prevText === 'Hello' ? 'Goodbye' : 'Hello');
  //     setCount(prevCount => prevCount + 1); 
  // };

  // const name = () =>{
  //     console.log("hello")
  //  }
  return (
    <div className="home">
      {/* <button onClick={handlePost}>Create Post</button> */}
      {/* <p>{text} You clicked {count} times</p>
            <button onClick={addText}>Enter</button> */}    
      <Header></Header>
      <BannerComponent></BannerComponent>
      <Servicecomponent></Servicecomponent>
      <Demos></Demos>
      <Videosection></Videosection>
      <Contactus></Contactus>
      <Footer></Footer>
      <Loader></Loader>
    </div>
  )
}

export default Homepage;
