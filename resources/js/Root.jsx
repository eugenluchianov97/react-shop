import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Main from "./pages/Main.jsx"
 import Blog from "./pages/Blog.jsx"
 import Contact from "./pages/Contact.jsx"
 import Layout from "./pages/Layout.jsx";
import * as ReactDOM from "react-dom/client";

function Root() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/blog" element={<Blog/>} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>


    );
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <Root />
);

