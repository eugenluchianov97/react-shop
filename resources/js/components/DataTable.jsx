import {useContext, useEffect} from "react";
import AlertContext from "@/contexts/AlertContext.js";

export default () => {
    const data = {
        columns:[
            {title:"#",name:"idx"},
            {title:"Имя",name:"name"},
            {title:"Дата создания",name:"created_at"},
        ],
        data:[
            {name:"idx",}
        ]
    }

    return (
        <>
            <form className="search mb-3">
                <input type="text" className="form-control text-white" placeholder="Поиск"/>
            </form>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        {data.columns.map(column => {
                            return (
                                <th>{column.title}</th>
                            )
                        })}
                        <th> Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {data.columns.map(column => {
                            return (
                                <th>{column.title}</th>
                            )
                        })}
                        <td colSpan={4}> <p className="mx-auto my-0 text-center">Нет записей</p> </td>

                    </tr>



                    </tbody>
                </table>
            </div>
        </>
    )
}
