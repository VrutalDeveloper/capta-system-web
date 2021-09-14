import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({children}) {
    return (
        <>
            <Navbar/>

            <div className="bg-gray-50 pt-20">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-20 ">
                    {children}
                </div>
            </div>


            <Footer/>
        </>
    );
}

export default Layout;
