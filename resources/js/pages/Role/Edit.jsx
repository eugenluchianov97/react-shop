import MainLayout from "../../layouts/MainLayout.jsx";
import {useContext, useEffect, useState} from "react";
import UserContext from "@/contexts/UserContext.js";
import {roleShow} from "@/api.js";
import {useNavigate} from "react-router-dom";
import {LocalStorageRemoveItem} from "@/helper.js";
import AlertContext from "@/contexts/UserContext.js";

export default () => {

    // const {user} = useContext(UserContext)
    const navigate = useNavigate();


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [nameEr, setNameEr] = useState([]);
    const [descriptionEr, setDescriptionEr] = useState([]);

    const [laoding, setLoading] =  useState(false);


    useEffect(() => {
        role()
    },[])

    const role = async () => {
        let res = await roleShow(this.props.match.params.id);

        if(res.status === 200) {

        }
    }

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true);
        let data = {
            name:name,
            description:description
        }
        let res = await roleShow(this.props.match.params.id);

        if(res.status === 200){
            navigate('/roles')

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

        setLoading(false);

    }
    return (
        <MainLayout>
            <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card relative">
                        {laoding && (
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 flex items-center justify-center">
                                <div role="status">
                                    <svg aria-hidden="true"
                                         className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"/>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>

                        )}
                        <div className="card-body">
                            <h4 className="card-title">Редактировать роль</h4>
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


                                <button type="submit" className="btn btn-primary me-2">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>

    );
};
