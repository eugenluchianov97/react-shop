
import LoginLayout from "@/layouts/LoginLayout.jsx";
import {Link} from "react-router-dom";

import {register} from "@/api.js";
import {useState} from "react";

import {useNavigate} from "react-router-dom"
export default () => {

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')

    const [nameEr, setNameEr] = useState([])
    const [emailEr, setEmailEr] = useState([])
    const [passwordEr, setPasswordEr] = useState([])
    const [password_confirmationEr, setPasswordConfirmationEr] = useState([])



    const [loading, setLoading] = useState(false)

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
             name:name,
             email:email,
             password:password,
             password_confirmation:password_confirmation,
        }
        let res = await register(data)

        if(res.status === 200){
            setLoading(false);
            navigate("/register-confirm")
        }

        if(res.response && res.response.status === 422){
            setLoading(false);

            Object.entries(res.response.data.errors).map((er) => {
                if(er[0] === 'email') {
                    setEmailEr(er[1])
                }

                if(er[0] === 'password') {
                    setPasswordEr(er[1])
                }

                if(er[0] === 'name') {
                    setNameEr(er[1])
                }

                if(er[0] === 'password_confirmation') {
                    setPasswordConfirmationEr(er[1])
                }
            })
        }

        console.log(res)

    }

    return (
        <LoginLayout>
            <form onSubmit={submit} className="relative bg-white px-3 py-4 text-sm flex flex-col w-10/12 sm:w-6/12 md:w-4/12 xl:w-3/12" >
                {loading && (
                    <div className="absolute bg-slate-300 opacity-40 top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
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




                <div>
                    <p className="font-bold text-slate-800 mb-1">Имя</p>
                    <input  value={name} onChange={(e) => {setName(e.target.value);setNameEr([])}} type="text" placeholder="Имя" className={"w-full outline-none p-2 border " + (nameEr.length > 0 ? "border-red-400" : "border-slate-300") }/>
                    {nameEr.length > 0 && (
                        <p className="text-red-400">{nameEr[0]}</p>
                    )}

                </div>

                <div className="my-1">
                    <p className="font-bold text-slate-800 mb-1">Email</p>
                    <input value={email} onChange={(e) => {setEmail(e.target.value);setEmailEr([])}} type="email" placeholder="Email"  className={"w-full outline-none p-2 border " + (emailEr.length > 0 ? "border-red-400" : "border-slate-300") }/>
                    {emailEr.length > 0 && (
                        <p className="text-red-400">{emailEr[0]}</p>
                    )}
                </div>

                <div className="my-1">
                    <p className="font-bold text-slate-800 mb-1">Пароль</p>
                    <input value={password} onChange={(e) => {setPassword(e.target.value);setPasswordEr([])}} type="password" placeholder="Пароль" className={"w-full outline-none p-2 border " + (passwordEr.length > 0 ? "border-red-400" : "border-slate-300") }/>
                    {passwordEr.length > 0 && (
                        <p className="text-red-400">{passwordEr[0]}</p>
                    )}
                </div>

                <div className="my-1">
                    <p className="font-bold text-slate-800 mb-1">Подтверждение пароля</p>
                    <input value={password_confirmation} onChange={(e) => {setPasswordConfirmation(e.target.value);setPasswordConfirmationEr([])}} type="password" placeholder="Подтверждение пароля" className={"w-full outline-none p-2 border " + (password_confirmationEr.length > 0 ? "border-red-400" : "border-slate-300") }/>
                    {password_confirmationEr.length > 0 && (
                        <p className="text-red-400">{password_confirmationEr[0]}</p>
                    )}
                </div>

                <button type="submit" className="w-full bg-slate-800 mt-3 text-white font-bold outline-none border-none p-3">Зарегестрироваться</button>

                <div className="flex justify-start">
                    <Link className="font-bold text-slate-800 mt-1 cursor-pointer hover:underline" to="/login">Уже есть аккаунт?</Link>
                </div>

            </form>
        </LoginLayout>
    )
}
