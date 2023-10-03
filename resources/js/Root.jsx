import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

import Login from "./pages/Auth/Login.jsx"
import Register from "./pages/Auth/Register.jsx"
import ConfirmRegister from "./pages/Auth/ConfirmRegister.jsx"
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx"
import NotFound from "./pages/404.jsx"
import Main from "./pages/Main.jsx"
import Blog from "./pages/Blog.jsx"

import * as ReactDOM from "react-dom/client";

import Alert from "@/components/Alert.jsx";

import AlertContext from "@/contexts/AlertContext.js";
import {useContext, useEffect, useState} from "react";
import UserContext from "@/contexts/UserContext.js";
import {LocalStorageHasItem, LocalStorageSetItem} from "@/helper.js";
import {me} from "@/api.js";

function Root() {


    const [alertType, setAlert] = useState({
        display:false,
        type:"success",
        text:''
    })

    const [user,setUser] = useState(false)

    const _setAlert = (display = false, type = '',text = '') => {
        setAlert({
            display:display,
            type:type,
            text:text,
        })
    }

    const _setUser = (user_obj) => {
        setUser(user_obj)
    }


    return (
            <UserContext.Provider value={{user,_setUser}}>
                <AlertContext.Provider value={{alertType,_setAlert}}>
                    <BrowserRouter>
                        {alertType.display && (
                            <Alert params={alertType} />
                        )}

                        <Routes>
                            <Route path="/login" element={<Login />}/>
                            <Route path="/register" element={<Register />}/>
                            <Route path="/register-confirm" element={<ConfirmRegister />}/>
                            <Route path="/forgot-password" element={<ForgotPassword />}/>
                            <Route path="/" element={<Main />}/>
                            <Route path="/blog" element={<Blog />}/>
                            <Route path="*" element={<NotFound />}/>

                        </Routes>
                    </BrowserRouter>
                </AlertContext.Provider>
            </UserContext.Provider>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <Root />
);

