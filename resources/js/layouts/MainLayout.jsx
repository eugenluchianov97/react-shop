import  "./../../css/assets/vendors/mdi/css/materialdesignicons.min.css"
import  "./../../css/assets/vendors/css/vendor.bundle.base.css"
import  "./../../css/assets/vendors/jvectormap/jquery-jvectormap.css"
import  "./../../css/assets/vendors/flag-icon-css/css/flag-icon.min.css"
import  "./../../css/assets/vendors/owl-carousel-2/owl.carousel.min.css"
import  "./../../css/assets/vendors/owl-carousel-2/owl.theme.default.min.css"
import  "./../../css/assets/css/style.css"


// import  "./../../css/assets/vendors/chart.js/Chart.min.js"
// import  "./../../css/assets/vendors/progressbar.js/progressbar.min.js"
// import  "./../../css/assets/vendors/jvectormap/jquery-jvectormap.min.js"
// import  "./../../css/assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js"
// import  "./../../css/assets/vendors/owl-carousel-2/owl.carousel.min.js"
// import  "./../../css/assets/vendors/owl-carousel-2/owl.carousel.min.js"
// import  "./../../css/assets/js/jquery.cookie.js"
// import  "./../../css/assets/js/dashboard.js"


import {useContext, useEffect, useState} from "react";
import UserContext from "@/contexts/UserContext.js";
import {LocalStorageHasItem, LocalStorageRemoveItem, LocalStorageSetItem} from "@/helper.js";
import {logout, me} from "@/api.js";
import {Link, useNavigate} from "react-router-dom";
import LangContext from "@/contexts/LangContext.js";

import translate from "./../translates/layouts/mainLayout.js"

export default  ({children}) => {
    const {user,_setUser} = useContext(UserContext);

    const {lang} = useContext(LangContext);

    const navigate = useNavigate();

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

    const [hidePanel, setHidePanel] = useState(false)
    const [hideProfile, setHideProfile] = useState(false)


    const submit = async (e) => {
        e.preventDefault()

        let res = await logout();

        if(res.status === 200){
            LocalStorageRemoveItem('token')
            LocalStorageRemoveItem('user_obj')
            navigate("/login")
        }
    }


    return (
        <div className={hidePanel ? "sidebar-icon-only" : ''}>
            <div className="container-scroller">
                <nav className={"sidebar sidebar-offcanvas " + (hidePanel ? "active": "")} id="sidebar">
                    <ul className="nav pt-0">
                        <li className="nav-item profile">
                            <div className="profile-desc">
                                <div className="profile-pic">
                                    <div className="profile-name">
                                        <h5 className="mb-0 font-weight-normal">{user.name}</h5>
                                    </div>
                                </div>
                                <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                                    <a href="#" className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-settings text-primary"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-onepassword  text-info"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-calendar-today text-success"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item menu-items">
                            <a className="nav-link" href="index.html">
                            <span className="menu-icon">
                                 <i className="mdi mdi-speedometer"></i>
                            </span>
                                <span className="menu-title">{translate[lang].dashboard}</span>
                            </a>
                        </li>

                        <li className="nav-item menu-items">
                            <a className="nav-link" href="index.html">
                            <span className="menu-icon">
                                 <i className="mdi mdi-account-multiple"></i>
                            </span>
                                <span className="menu-title">{translate[lang].users}</span>
                            </a>
                        </li>

                        <li className="nav-item menu-items">
                            <a className="nav-link" href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html">
                            <span className="menu-icon">
                               <i className="mdi mdi-file-document-box"></i>
                            </span>
                                <span className="menu-title">{translate[lang].posts}</span>
                            </a>
                        </li>

                    </ul>
                </nav>

                <div className="container-fluid page-body-wrapper">

                    <nav className="navbar p-0 fixed-top d-flex flex-row">

                        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                            <button onClick={() => {setHidePanel(!hidePanel)}} className="navbar-toggler navbar-toggler align-self-center" type="button">
                                <span className="mdi mdi-menu"></span>
                            </button>
                            <ul className="navbar-nav w-100">
                                <li className="nav-item w-100">
                                    <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                                        <input type="text" className="form-control" placeholder="Search products"/>
                                    </form>
                                </li>
                            </ul>
                            <ul className="navbar-nav navbar-nav-right">

                                <li className="nav-item dropdown">
                                    <a className="nav-link" onClick={() => {setHideProfile(!hideProfile)}} id="profileDropdown" href="#" data-bs-toggle="dropdown">
                                        <div className="navbar-profile">
                                            <p className="mb-0 d-none d-sm-block navbar-profile-name">{user.name}</p>
                                            <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                                        </div>
                                    </a>
                                    <div className={"dropdown-menu dropdown-menu-right navbar-dropdown preview-list " + (hideProfile ? 'show' : "")}>

                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-dark rounded-circle">
                                                    <i className="mdi mdi-settings text-success"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <p className="preview-subject mb-1">{translate[lang].settings}</p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-dark rounded-circle">
                                                    <i className="mdi mdi-logout text-danger"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content" onClick={submit}>
                                                <p className="preview-subject mb-1" >{translate[lang].logout}</p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                    </div>
                                </li>
                            </ul>
                            <button onClick={() => {setHidePanel(!hidePanel)}} className="navbar-toggler navbar-toggler-right d-lg-none align-self-center">
                                <span className="mdi mdi-format-line-spacing"></span>
                            </button>
                        </div>
                    </nav>

                    <div className="main-panel">
                        <div className="content-wrapper">
                            {children}
                        </div>

                    </div>

                </div>

            </div>
        </div>


    )

}
