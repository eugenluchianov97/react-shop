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
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Создать пользователя</h4>
                            <form className="forms-sample">
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername1">Username</label>
                                    <input type="text" className="form-control" id="exampleInputUsername1"
                                           placeholder="Username"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputConfirmPassword1"
                                           placeholder="Password"/>
                                </div>

                                <button type="submit" className="btn btn-primary me-2">Submit</button>
                                <button className="btn btn-dark">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>

    );
};
