import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer(props) {
    return (
        <footer className=" py-8">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-4">
                    <div className="flex flex-col justify-end">
                        <p>© { new Date().getFullYear() }, All Rights Reserved.</p>
                        <span className="font-semibold">Developed By CAPTA</span>
                    </div>
                    <div className="">
                        <h4 className="text-black font-bold text-lg">CAPTA</h4>
                        <div className="flex flex-col ml-2">
                            <a className="text-text hover:text-primary-500 transition" href="#">Home</a>
                            <a className="text-text hover:text-primary-500 transition" href="#">Blogs</a>
                            <a className="text-text hover:text-primary-500 transition" href="#">Categories</a>
                            <a className="text-text hover:text-primary-500 transition" href="#">Team</a>
                            <a className="text-text hover:text-primary-500 transition" href="#">We</a>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-black font-bold text-lg">Quick Link</h4>
                        <div className="flex flex-col ml-2">
                            <a className="text-text hover:text-primary-500 transition" href="#">Advertins</a>
                            <a className="text-text hover:text-primary-500 transition" href="#">Advertins</a>
                            <a className="text-text hover:text-primary-500 transition" href="#">Advertins</a>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-black font-bold text-lg">Quick Link</h4>
                        <div className="flex flex-col ml-2">
                            <a href="#" className="flex items-center text-text hover:text-primary-500 transition">
                                <FaFacebook/> <span className="ml-2">Facebook</span>
                            </a>
                            <a href="#" className="flex items-center text-text hover:text-primary-500 transition">
                                <FaInstagram/> <span className="ml-2">Instagram</span>
                            </a>
                            <a href="#" className="flex items-center text-text hover:text-primary-500 transition">
                                <FaLinkedin/> <span className="ml-2">Linkedin</span>
                            </a>
                            <a href="#" className="flex items-center text-text hover:text-primary-500 transition">
                                <FaTwitter/> <span className="ml-2">Titter</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>Hecho con ❤️ en Perú para todo el mundo de habla hispana</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
