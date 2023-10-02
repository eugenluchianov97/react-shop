
import LoginLayout from "@/layouts/LoginLayout.jsx";
import {Link} from "react-router-dom";
export default () => {
    return (
        <LoginLayout>
            <form className="bg-white px-3 py-4 text-sm flex flex-col w-10/12 sm:w-6/12 md:w-4/12 xl:w-3/12" >
                <div>
                    <p className="font-bold text-slate-800 mb-1">Имя</p>
                    <input type="text" placeholder="Имя" className="w-full outline-none p-2 border border-slate-300"/>
                </div>

                <div className="my-1">
                    <p className="font-bold text-slate-800 mb-1">Email</p>
                    <input type="text" placeholder="Email" className="w-full outline-none p-2 border border-slate-300"/>
                </div>

                <div className="my-1">
                    <p className="font-bold text-slate-800 mb-1">Пароль</p>
                    <input type="password" placeholder="Пароль" className="w-full outline-none p-2 border border-slate-300 "/>

                </div>

                <div className="my-1">
                    <p className="font-bold text-slate-800 mb-1">Подтверждение пароля</p>
                    <input type="password" placeholder="Подтверждение пароля" className="w-full outline-none p-2 border border-slate-300 "/>

                </div>

                <button type="submit" className="w-full bg-slate-800 mt-3 text-white font-bold outline-none border-none p-3">Зарегестрироваться</button>

                <div className="flex justify-start">
                    <Link className="font-bold text-slate-800 mt-1 cursor-pointer hover:underline" to="/login">Уже есть аккаунт?</Link>
                </div>

            </form>
        </LoginLayout>
    )
}
