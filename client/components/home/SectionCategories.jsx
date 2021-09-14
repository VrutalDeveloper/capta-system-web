import React from 'react';
import { FaJenkins } from "react-icons/fa";

function SectionCategories(props) {
    return (
        <div className="grid grid-cols-4 gap-6">
            <a href="#" className="cursor-pointer px-5 py-6 bg-white xl:shadow-sm hover:shadow-md rounded-2xl flex flex-col justify-center items-center transform transition hover:-translate-y-2">
                <FaJenkins size="3rem" color="#a443ca"/>
                <h2 className="text-gray-400 font-semibold mt-4">Innovations</h2>
            </a>
            <a href="#" className="cursor-pointer px-5 py-6 bg-white xl:shadow-sm hover:shadow-md rounded-2xl flex flex-col justify-center items-center transform transition hover:-translate-y-2">
                <FaJenkins size="3rem" color="#a443ca"/>
                <h2 className="text-gray-400 font-semibold mt-4">Innovations</h2>
            </a>
            <a href="#" className="cursor-pointer px-5 py-6 bg-white xl:shadow-sm hover:shadow-md rounded-2xl flex flex-col justify-center items-center transform transition hover:-translate-y-2">
                <FaJenkins size="3rem" color="#a443ca"/>
                <h2 className="text-gray-400 font-semibold mt-4">Innovations</h2>
            </a>
            <a href="#" className="cursor-pointer px-5 py-6 bg-white xl:shadow-sm hover:shadow-md rounded-2xl flex flex-col justify-center items-center transform transition hover:-translate-y-2">
                <FaJenkins size="3rem" color="#a443ca"/>
                <h2 className="text-gray-400 font-semibold mt-4">Innovations</h2>
            </a>
        </div>
    );
}

export default SectionCategories;
