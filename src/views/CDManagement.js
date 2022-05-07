import styles from "../assets/css/CD.module.css"
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";

function CDManagement () {

    let history = useHistory();

    /*useEffect(() => {
        ReactSession.setStoreType("localStorage");
        if(ReactSession.get("employee") == null){
            history.push("/login")
        }
    })*/



    return (
        <>
        <IndexNavbar />
        <div className="wrapper">
        <IndexHeader />
        <div className="main">
            
        </div>
        <DarkFooter />
        </div>
        </>
    );
}

export default CDManagement;