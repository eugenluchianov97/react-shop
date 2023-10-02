import {useContext, useEffect} from "react";
import AlertContext from "@/contexts/AlertContext.js";

export default (props) => {
    const { _setAlert} = useContext(AlertContext)

    useEffect(() => {
        console.log('alert!!!')
        setTimeout(() => {
            _setAlert(false);
        }, 4000)
    },[])

    if(props.params.type === 'success'){
        return (
            <div className="cursor-pointer absolute top-0 right-0 z-50 bg-green-300 m-2 px-4 py-2 text-sm text-green-700 flex items-center">
                <p className="font-bold">{props.params.text}</p>
                <div className="w-8 h-8 border-2 rounded-full border-green-700 flex items-center justify-center ml-4">
                    <i className="fa fa-check text-xl"></i>
                </div>
            </div>
        )
    }

    if(props.params.type === 'error'){
        return (
            <div className="cursor-pointer absolute top-0 right-0 z-50 bg-red-300 m-2 px-4 py-2 text-sm text-red-700 flex items-center">
                <p className="font-bold">{props.params.text}</p>
                <div className="w-8 h-8 border-2 rounded-full border-red-700 flex items-center justify-center ml-4">
                    <i className="fa fa-exclamation-triangle text-md"></i>
                </div>
            </div>
        )
    }

    if(props.params.type === 'warning'){
        return (
            <div className="cursor-pointer absolute top-0 right-0 z-50 bg-yellow-300 m-2 px-4 py-2 text-sm text-yellow-700 flex items-center">
                <p className="font-bold">{props.params.text}</p>
                <div className="w-8 h-8 border-2 rounded-full border-yellow-700 flex items-center justify-center ml-4">
                    <i className="fa fa-exclamation-triangle text-md"></i>
                </div>
            </div>
        )
    }

}
