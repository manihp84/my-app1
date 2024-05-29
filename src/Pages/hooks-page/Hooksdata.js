import React from "react";
import Header from '../../components/headers/HeaderComponent';
import Calculator from '../../components/react-hooks/Reducercalc';
import Count from '../../components/react-hooks/Reducer';
import Hookspractice from "../../components/react-hooks/Hookspractice";
import Hookscomp from '../../components/react-hooks/Hookscomponent';
import Demohooks from '../../components/react-hooks/Demohooks';
import Cardlist from '../../components/react-hooks/Cardlist';
const Hooksdata = () => {
    return (
        <div>
            <Header></Header>
            <Calculator></Calculator>
            <Count></Count>
            <Hookspractice></Hookspractice>
            <Hookscomp></Hookscomp>
            <Demohooks></Demohooks>
            <Cardlist></Cardlist>
        </div>
    )
}

export default Hooksdata;