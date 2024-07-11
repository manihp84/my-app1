import React from "react";
import Header from '../../components/headers/HeaderComponent';
// import Apicomp from '../../components/api/Demoapi';
// import Reactapicomp from '../../components/api/Reactapi';
// import FetchDemo from '../../components/api/Demoapi1';
import Djangobackend from '../../components/api/Djangoapi';
import Djangopost from '../../components/api/Djangoapipost';
// import Apiapp from '../../components/api/Productapi';
const Apidata = () => {
    return (
        <div>
            <Header></Header>
            {/* <Apiapp></Apiapp> */}
            {/* <Apicomp></Apicomp>
            <Reactapicomp></Reactapicomp>
    <FetchDemo></FetchDemo>*/}
            <Djangobackend></Djangobackend>
            <Djangopost></Djangopost> 
        </div>
    )
}
export default Apidata;