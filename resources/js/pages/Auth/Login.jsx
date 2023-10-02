
import LoginLayout from "@/layouts/LoginLayout.jsx";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import AlertContext from "@/contexts/AlertContext.js";
export default () => {
    const { _setAlert} = useContext(AlertContext)

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const submit = (e) => {
        e.preventDefault();
        _setAlert(true,'success','');
    }
    return (
        <LoginLayout>
            <form onSubmit={submit} className="bg-white px-3 py-4 text-sm flex flex-col w-10/12 sm:w-6/12 md:w-4/12 xl:w-3/12" >
                <div>
                    <p className="font-bold text-slate-800 mb-1">Логин</p>
                    <input value={name}  onChange={(e) => {setName(e.target.value)}} type="email" placeholder="Email" className="w-full outline-none p-2 border border-slate-300"/>
                </div>

                <div className="my-1">
                    <p className="font-bold text-slate-800 mb-1">Пароль</p>
                    <input value={password}  onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Пароль" className="w-full outline-none p-2 border border-slate-300 "/>

                </div>

                <button type="submit" className="w-full bg-slate-800 mt-3 text-white font-bold outline-none border-none p-3">Войти</button>

                <div className="flex justify-between">
                    <Link className="font-bold text-slate-800 mt-1 cursor-pointer hover:underline" to="/register">Регистрация</Link>
                    <Link className="font-bold text-slate-800 mt-1 cursor-pointer hover:underline" to="/forgot-password">Забыли пароль?</Link>
                </div>

            </form>
        </LoginLayout>
    )
}
