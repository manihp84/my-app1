import React from "react";
import Homecontent from "../../components/my-Profile/content-grid/Homecontent";
import HeaderComponent from "../../components/headers/HeaderComponent";
import Footer from "../../components/footer/Footercomponent";
import Loader from "../../components/loader/loader";
const Profile = () => {
    return (
        <div className="profile" style={{ background: `url(${process.env.PUBLIC_URL + "/images/bannerimg/profile-bg.jpg"})`, height: 1290, backgroundSize: "cover", backgroundPosition: "center" }}>
            <Loader></Loader>
            <HeaderComponent></HeaderComponent>
            <Homecontent></Homecontent>
            <Footer></Footer>
        </div>
    )
}

export default Profile;