import React, {useState} from "react"
import {Row, Input, DatePicker } from "antd"
import Avatar from "./components/uploadPicture"
import {SelectCountry} from "./components/select"
import { openAlertNotification } from "./components/alert"

import {
    invalidNameMsg,
    invalidEmailMsg,
    invalidPassMsg,
    emailReg,
    passReg
} from "helpers/inputValidator"

export const RegisterForm = () => {
    const [inputError, setInputError] = useState({
        firstName: true,
        lastName: true,
        email: true,
        password: true
    })

    const inputValidator = (key, value) => {
        if(key === ("firstName" || "lastName")) {
            value.length < 3 ? 
            setInputError((prevState) => ({
                ...prevState,
                [key]:true
            })) 
            : 
            setInputError((prevState) => ({
                ...prevState,
                [key]: false
            }))
        }

        if(key === "email") {

            emailReg.test(value) && value.length > 0 ? 
            setInputError((prevState) => ({
                ...prevState,
                email:false
            }))  
            :
            setInputError((prevState) => ({
                ...prevState,
                email:true
            }))  
            
        }

        if(key === "password") {
            passReg.test(value) && value.length >= 8 ? 
            setInputError((prevState) => ({
                ...prevState,
                password:false
            }))  
            :
            setInputError((prevState) => ({
                ...prevState,
                password:true
            }))  
        }
    }


    return(
        <>
        <h3 className="title-center">Register Form</h3>
        <form>
            <Row className="form-group">
                    <label>First Name</label>
                    <Input 
                    name="firstName"
                    onBlur={() => inputError.firstName  && openAlertNotification("First Name", invalidNameMsg)}
                    onChange={(ev) => inputValidator(ev.currentTarget.name, ev.currentTarget.value)}
                    />
                    
            </Row>
            <Row className="form-group">
                <label>Last Name</label>
                <Input 
                name="lastName"
                onBlur={() => inputError.lastName  && openAlertNotification("Last Name", invalidNameMsg)}
                onChange={(ev) => inputValidator(ev.currentTarget.name, ev.currentTarget.value)} 
                />
            </Row>
            <Row className="form-group">
                <label>Email</label>
                <Input 
                name="email"
                onBlur={() => inputError.email  && openAlertNotification("Email", invalidEmailMsg)}
                onChange={(ev) => inputValidator(ev.currentTarget.name, ev.currentTarget.value)}
                className={inputError.email ? "test" : ""} 
                />
            </Row>
            <Row className="form-group">
                <label>Password</label>
                <Input
                name="password"
                onBlur={() => inputError.password  && openAlertNotification("Password", invalidPassMsg)}
                onChange={(ev) => inputValidator(ev.currentTarget.name, ev.currentTarget.value)} 
                />
            </Row>
            <Row className="form-group">
                <label>Upload your Profile Picture</label>
                    <Avatar />
                <label>Phone Number</label>
                <Input.Group compact>
                    <Input style={{ width: '20%' }} defaultValue="+58" />
                    <Input style={{ width: '30%' }} defaultValue="0000000" />
                </Input.Group>
            </Row>
            <Row className="form-group">
                <div style={{width: "100%"}}>
                    <label>Birthday Date</label>
                </div>
                <DatePicker />
            </Row>
            <Row className="form-group">
                <div style={{width: "100%"}}>
                    <label>Select your country</label>
                </div>
                <SelectCountry />
            </Row>

        </form>
        </>
    )
}