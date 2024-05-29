import React from "react";
import Itservice from "../../components/service/itservicebanner/Itservicebanner";
import Servicecard from "../../components/service/itservicecard/Servicecard";
import Servicecontact from "../../components/service/servicecontact/Servicecontact";
import HeaderComponent from "../../components/headers/HeaderComponent";
import Footer from "../../components/footer/Footercomponent";
import Loader from "../../components/loader/loader";
const Service = () => {
    return (
        <>
            <Loader></Loader>
            <HeaderComponent></HeaderComponent>
            <Itservice></Itservice>
            <Servicecard></Servicecard>
            <Servicecontact></Servicecontact>
            <Footer></Footer>
        </>
    )
}

export default Service;