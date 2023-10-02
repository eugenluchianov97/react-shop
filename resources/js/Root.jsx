import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/Auth/Login.jsx"
import Register from "./pages/Auth/Register.jsx"
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx"
import NotFound from "./pages/404.jsx"
import Main from "./pages/Main.jsx"

import * as ReactDOM from "react-dom/client";

import Alert from "@/components/Alert.jsx";

import AlertContext from "@/contexts/AlertContext.js";
import {useContext, useState} from "react";

function Root() {

    const [alertType, setAlert] = useState({
        display:false,
        type:"success",
        text:''
    })

    const _setAlert = (display = false, type = '',text = '') => {
        setAlert({
            display:display,
            type:type,
            text:text,
        })
    }


    return (

        <AlertContext.Provider value={{alertType,_setAlert}}>
            <BrowserRouter>
                {alertType.display && (
                    <Alert params={alertType} />
                    )}

                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/forgot-password" element={<ForgotPassword />}/>
                    <Route path="/" element={<Main />}/>
                    <Route path="*" element={<NotFound />}/>

                </Routes>
            </BrowserRouter>
        </AlertContext.Provider>




    );
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <Root />
);

