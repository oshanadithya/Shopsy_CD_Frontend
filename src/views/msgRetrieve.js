import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import {
    Input
} from "reactstrap";
import { ReactSession } from "react-client-session";
import { useHistory } from "react-router";

function msgRetrieve () {

    const [messages, setMessages] = useState([]);
    const [searchVal , setSearchVal] = useState("");

    let history = useHistory();

    useEffect(() => {
        function getMessages() {
          axios.get("http://localhost:8070/ContactusRoute/").then((res) => {
            setMessages(res.data);
            console.log(res);
          }).catch((err) => {
            alert("Something went wrong :(");
            alert(err.message);
          });
        };
        getMessages();
    },[]);

    var number1 = 1;

    return (
        <>
        <IndexNavbar />
        <div className="wrapper">
        <IndexHeader />
        <div className="main">
        <h3 style = {{marginLeft:"430px"}}>Contact Us Messages</h3>
            <Input placeholder="Search " type="text"  value={searchVal}
                onChange = {(e) =>{
                    setSearchVal(e.target.value);
                }}
            />
        {messages
            .filter((ContactUs) => {
                let Name = ContactUs.fname;
                if (searchVal === "") {
                return ContactUs;
                } else {
                if (Name) {
                    if (
                    Name.toLowerCase().includes(searchVal.toLowerCase())
                    ) {
                    return ContactUs;
                    }
                }
                }
            })

            .map((ContactUs) => {
                <div>
                    <table className = "table table-striped">
                    <thead>

                    <th scope = "col"> Name </th>
                    <th scope = "col"> Email Addrers </th>
                    <th scope = "col"> Subject </th>
                    <th scope = "col"> Message </th>

                    </thead>
                    <tbody>
                        <tr>                          
                        <th scope = "row">{number1++}</th>
                        
                        <td>{ContactUs.name}</td>
                        
                        <td>{ContactUs.email}</td>
                        
                        <td>{ContactUs.subject}</td>
                        
                        <td>{ContactUs.message}</td>

                        </tr>
                    </tbody>
                    </table>
                </div>
            })
        }
            
        </div>
        <DarkFooter />
        </div>     
        </>
    );
}

export {
    msgRetrieve
}