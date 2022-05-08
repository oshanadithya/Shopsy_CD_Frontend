import styles from "../assets/css/CD.module.css"
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";

import IndexNavbar from "components/Navbars/IndexNavbar";
import IndexHeader from "components/Headers/IndexHeader";
import DarkFooter from "components/Footers/DarkFooter";

function CDManagement () {

    let history = useHistory();

    /*useEffect(() => {
        ReactSession.setStoreType("localStorage");
        if(ReactSession.get("employee") == null){
            history.push("/login")
        }
    })*/

    function handleClickMsg() {
        history.push("/cus-msg");
    }

    return (
        <>
        <IndexNavbar />
        <div className="wrapper">
        <IndexHeader />
        <div className="main">

        <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <h3 className = {styles.header}><center>Company Dashboard</center></h3>       
        </div>
        <div style = {{paddingTop : "50px"}} className = {styles.btn_group}>
            <button className = {styles.btn_guidemng} onClick = {handleClickMsg}>View Customer Messages</button>
        </div>
        </div>
        <DarkFooter />
        </div>
        </>
    );
}

export {
    CDManagement    
};