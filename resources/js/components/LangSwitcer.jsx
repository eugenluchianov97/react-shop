import {useContext} from "react";
import LangContext from "@/contexts/LangContext.js";

export default () => {

    const {lang,_setLang} = useContext(LangContext)

    const changeLang = (lang) => {
        _setLang(lang)
    }

    return (
        <div className="absolute top-0 right-0 z-50 flex font-bold text-sm bg-white">
            <p className={"cursor-pointer mx-1 " + (lang === 'ru' ? '' : 'opacity-50')} onClick={() => {changeLang("ru")}}>RU</p>
            <p className={"cursor-pointer mx-1 " + (lang === 'en' ? '' : 'opacity-50')} onClick={() => {changeLang("en")}}>EN</p>
        </div>
    )
}
