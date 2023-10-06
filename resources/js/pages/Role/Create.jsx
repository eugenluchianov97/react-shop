import MainLayout from "../../layouts/MainLayout.jsx";
import {useContext, useState} from "react";
import UserContext from "@/contexts/UserContext.js";
import {roleStore} from "@/api.js";
import {useNavigate} from "react-router-dom";
import {LocalStorageRemoveItem} from "@/helper.js";

export default () => {

    // const {user} = useContext(UserContext)
    // const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [nameEr, setNameEr] = useState([]);
    const [descriptionEr, setDescriptionEr] = useState([]);



    const submit = async (e) => {
        e.preventDefault()
        let data = {
            name:name,
            description:description
        }
        let res = await roleStore(data);

        if(res.status === 200){

        }

        if(res.response && res.response.status === 422){
            Object.entries(res.response.data.errors).map((er) => {
                if(er[0] === 'name') {
                    setNameEr(er[1])
                }

                if(er[0] === 'description') {
                    setDescriptionEr(er[1])
                }

            })
        }
    }
    return (
        <MainLayout>
            <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Создать роль</h4>
                            <form onSubmit={submit} className="forms-sample">
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername1">Название</label>
                                    <input value={name} onChange={(e) => {setName(e.target.value);setNameEr([])}} type="text" className={"form-control text-white " + (nameEr.length > 0 ? "border-red" : "")} placeholder="Название"/>
                                    {nameEr.length > 0 && (
                                        <p className="text-danger">{nameEr[0]}</p>
                                    )}

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea1">Описание</label>
                                    <textarea value={description} onChange={(e) => {setDescription(e.target.value);setDescriptionEr([])}} placeholder="Описание" className={"form-control text-white " + (descriptionEr.length > 0 ? "border-red" : "")} id="exampleTextarea1" rows="4"></textarea>
                                    {descriptionEr.length > 0 && (
                                        <p className="text-danger">{descriptionEr[0]}</p>
                                    )}
                                </div>


                                <button type="submit" className="btn btn-primary me-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>

    );
};
