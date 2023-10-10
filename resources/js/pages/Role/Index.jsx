import MainLayout from "../../layouts/MainLayout.jsx";
import {useContext, useEffect, useState} from "react";
import UserContext from "@/contexts/UserContext.js";
import {logout} from "@/api.js";
import {Link, useNavigate} from "react-router-dom";
import {LocalStorageRemoveItem} from "@/helper.js";
import {roleIndex} from "./../../api.js"

import DataTable from "@/components/DataTable.jsx";

export default () => {

    const {user} = useContext(UserContext)
    const navigate = useNavigate();

    const [roles, setRoles] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState(false)


    const [search, setSearch] = useState('')



    useEffect(() => {
        getRoles()
    }, [currentPage])


    const getRoles = async () => {
        const res = await roleIndex(currentPage,search);
        if(res.status === 200){
            setRoles(res.data.roles.data)
            setLastPage(res.data.roles.last_page);
        }
    }

    const submit = async (e) => {
        e.preventDefault();
        await getRoles()
    }

    return (
        <MainLayout>

            <div className="row">
                <div className="col-lg-12 my-3">
                    <Link to="/roles/create" className="btn btn-inverse-primary btn-fw">Добавить роль</Link>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Роли</h4>

                            <div className="flex  mb-3">
                                <form className="search w-5/12 mr-2 flex" onSubmit={submit}>
                                    <input value={search} onChange={(e) => {setSearch(e.target.value)}} type="text" className="form-control text-white" placeholder="Поиск"/>
                                    <button type="submit" className="btn btn-secondary mx-2">Поиск</button>
                                </form>

                            </div>


                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th> #</th>
                                        <th>
                                            Название
                                        </th>
                                        <th>
                                            Дата создания

                                        </th>
                                        <th> Действия</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {roles.length > 0 && roles.map((role,key) => {
                                        return (
                                            <tr key={role.id}>
                                                <td>{key + 1}</td>
                                                <td>{role.name}</td>
                                                <td> {role.created_at}</td>
                                                <td>
                                                    <span className="text-lg text-red-600 mdi mdi-delete mx-1 cursor-pointer"></span>
                                                    <span className="text-lg mdi mdi-eye text-blue-600 mx-1 cursor-pointer"></span>
                                                    <span className="text-lg mdi mdi-lead-pencil text-yellow-600 mx-1 cursor-pointer"></span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    {roles.length === 0 && (
                                        <tr>
                                            <td colSpan={4}> <p className="mx-auto my-0 text-center">Нет записей</p> </td>

                                        </tr>
                                    )}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="flex ">
                        <div onClick={() => {if(currentPage > 1) setCurrentPage(currentPage - 1)}} className={"w-8 h-8 bg-slate-700 font-medium text-sm cursor-pointer flex items-center justify-center mx-1 " + (currentPage > 1 ? '' : 'opacity-50')}>
                            <span className="mdi mdi-arrow-left-bold"></span>
                        </div>

                        { Array.from(Array(lastPage), (e, i) => {
                            return  (
                                <div onClick={() => {setCurrentPage(i + 1)}} className={"w-8 h-8  font-medium text-sm cursor-pointer flex items-center justify-center mx-1 " + (currentPage === i + 1 ? 'bg-blue-400' : 'bg-slate-700') }>
                                    {i + 1}
                                </div>
                            )
                        })}

                        <div onClick={() => {if(currentPage < lastPage) setCurrentPage(currentPage + 1)}} className={"w-8 h-8 bg-slate-700 font-medium text-sm cursor-pointer flex items-center justify-center mx-1 " + (currentPage < lastPage ? '' : 'opacity-50')}>
                            <span className="mdi mdi-arrow-right-bold"></span>
                        </div>

                    </div>
                </div>
            </div>




        </MainLayout>

    );
};
