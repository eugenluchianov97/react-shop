import {useContext, useEffect} from "react";
import UserContext from "@/contexts/UserContext.js";
import {LocalStorageHasItem, LocalStorageSetItem} from "@/helper.js";
import {me} from "@/api.js";
import {Link} from "react-router-dom";

export default  ({children}) => {
    const {user,_setUser} = useContext(UserContext)

    useEffect(() => {
        async function fetchData() {

            if (!user){
                let res = await me();

                if(res.status === 200){
                    _setUser(res.data.user)
                    LocalStorageSetItem('user_obj',res.data.user)
                }
            }
        }

        fetchData();

    },[])

    return (
        <div className="border border-red-500 absolute top-0 left-0 right-0 bottom-0">
            <div className="bg-slate-800 ">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>

            {children}
        </div>
    );
}
