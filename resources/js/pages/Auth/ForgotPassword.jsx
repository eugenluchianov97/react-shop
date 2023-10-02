
import LoginLayout from "@/layouts/LoginLayout.jsx";
import {Link} from "react-router-dom";
export default () => {
    return (
        <LoginLayout>
            <form className="bg-white px-3 py-4 text-sm flex flex-col w-10/12 sm:w-6/12 md:w-4/12 xl:w-3/12" >
                <div>
                    <p className="font-bold text-slate-800 mb-1">Логин</p>
                    <input type="email" placeholder="Email" className="w-full outline-none p-2 border border-slate-300"/>
                </div>

                <button type="submit" className="w-full bg-slate-800 mt-3 text-white font-bold outline-none border-none p-3">Выслать код</button>

                <div className="flex justify-between">
                    <Link className="font-bold text-slate-800 mt-1 cursor-pointer hover:underline" to="/login">Войти</Link>
                    <Link className="font-bold text-slate-800 mt-1 cursor-pointer hover:underline" to="/register">Регистрация</Link>
                </div>

            </form>
        </LoginLayout>
    )
}
