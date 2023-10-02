import Layout from "./Layout.jsx";

export default () => {
    return (
       <div className="container  border border-red-400 mx-auto flex justify-between">

           <div>
               <i className="fab fa-whatsapp text-4xl"></i>
               <i className="fab fa-viber text-4xl"></i>
               <i className="fas fa-phone text-3xl"></i>
           </div>

           <ul className="flex">
               <li>Мой аккаунт</li>
               <li>Политика конфиденциальности</li>
               <li>Блог</li>
           </ul>
       </div>

    );
};
