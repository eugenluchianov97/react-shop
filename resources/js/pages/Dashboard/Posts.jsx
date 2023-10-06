import MainLayout from "../../layouts/MainLayout.jsx";
import {useContext} from "react";
import UserContext from "@/contexts/UserContext.js";
import {logout} from "@/api.js";
import {useNavigate} from "react-router-dom";
import {LocalStorageRemoveItem} from "@/helper.js";

export default () => {

    const {user} = useContext(UserContext)
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault()

        let res = await logout();

        if(res.status === 200){
            LocalStorageRemoveItem('token')
            LocalStorageRemoveItem('user_obj')
            navigate("/login")
        }
    }
    return (
        <MainLayout>
            <div className="row">
                Posts
            </div>

        </MainLayout>

    );
};
