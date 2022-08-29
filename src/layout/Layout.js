import React from "react"; 
import './Layout.css';
import Footer from "../components/Footer/Footer";

function Layout({children}){
    return(
        <div className="layout">
           {children}
           <Footer/>
        </div>
    )
}
export default Layout;