import React from "react";
import Aboutusbanner from "../../components/banners/About-usbanner";
import Aboutourservice from '../../components/services/About_our_service';
import Aboutcards from "../../components/aboutus/Aboutcards";
import HeaderComponent from "../../components/headers/HeaderComponent";
import Footer from "../../components/footer/Footercomponent";
import Loader from "../../components/loader/loader";
const About = () => {
    return (
        <div>
              <Loader></Loader>
            <HeaderComponent></HeaderComponent>
            <Aboutusbanner></Aboutusbanner>
            <Aboutourservice></Aboutourservice>
            <Aboutcards></Aboutcards>
            <Footer></Footer>
          
        </div>
    )

}
export default About;