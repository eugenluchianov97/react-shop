import MainLayout from "../../layouts/MainLayout.jsx";
import {useContext} from "react";
import UserContext from "@/contexts/UserContext.js";
import {logout} from "@/api.js";
import {Link, useNavigate} from "react-router-dom";
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
                <div className="col-lg-12 my-3">
                    <Link to="/users/create" className="btn btn-inverse-primary btn-fw">Добавить пользователя</Link>
                </div>
                <div className="col-lg-12 grid-margin stretch-card">

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Пользователи</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th> #</th>
                                        <th> First name</th>
                                        <th> Progress</th>
                                        <th> Amount</th>
                                        <th> Deadline</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td> 1</td>
                                        <td> Herman Beck</td>
                                        <td>
                                            <div className="progress">
                                                <div className="progress-bar bg-success w-1/4" role="progressbar"></div>
                                            </div>
                                        </td>
                                        <td> $ 77.99</td>
                                        <td> May 15, 2015</td>
                                    </tr>
                                    <tr>
                                        <td> 2</td>
                                        <td> Messsy Adam</td>
                                        <td>
                                            <div className="progress">
                                                <div className="progress-bar bg-danger w-3/4" role="progressbar"></div>
                                            </div>
                                        </td>
                                        <td> $245.30</td>
                                        <td> July 1, 2015</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>

    );
};
