import React from 'react';
import {FaMoon, FaSearch, FaSun} from "react-icons/fa";

function Navbar(props) {
    return (
        <nav className="h-20  shadow-md z-10 absolute top-0 left-0 right-0 flex items-center justify-between">
            <div className="w-full">
                <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="">
                        <img src="https://flexiblog-agency.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/a15e9/logo.png" alt=""/>
                    </div>
                    <div className="bg-cl_input flex items-center w-96 px-4 py-2 rounded-full shadow-md">
                        <FaSearch/>
                        <input className="w-full bg-transparent outline-none ml-4" type="text" placeholder="Search your post"/>
                    </div>
                    <div>
                        <a className="font-semibold mx-2 text-primary-500 transition" href="#">Home</a>
                        <a className="font-semibold text-gray-500 mx-2 hover:text-primary-500 transition" href="#">Posts</a>
                        <a className="font-semibold text-gray-500 mx-2 hover:text-primary-500 transition" href="#">Categories</a>
                        <a className="font-semibold text-gray-500 mx-2 hover:text-primary-500 transition" href="#">Team</a>
                    </div>
                    <div className="bg-gradient-to-r from-gradiente2 to-yellow-600 rounded-full h-07 w-14 flex items-center px-05 xl:shadow-md">

                        <div className="flex items-center w-full justify-between relative">
                            <div className="w-6 h-6 flex items-center justify-center text-white ">
                                <FaMoon/>
                            </div>
                            <div className="w-6 h-6 flex items-center justify-center text-white">
                                <FaSun/>
                            </div>
                            <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-white cursor-pointer transform hover:scale-110 transition"></div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
