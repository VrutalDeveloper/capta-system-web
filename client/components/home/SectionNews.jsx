import React from 'react';
import {
    FaAngleLeft,
    FaAngleRight, FaClock, FaRegClock,
    FaRegHandshake
} from "react-icons/fa";
import BtnPrimary from "../layout/BtnPrimary";
import ItemNews from "./ItemNews";

function SectionNews(props) {
    return (
        <div className="mt-20 grid grid-cols-8 gap-4">
            <div className="cursor-pointer col-span-6 h-100 relative rounded-2xl overflow-hidden" style={{backgroundImage: '/img/science.jpg'}}>
                <img className="z-10 h-full absolute top-0 left-0 right-0 object-cover w-full" src="https://res.cloudinary.com/mikunaalli/image/upload/v1631564296/capta/science_k040rf.jpg" alt=""/>
                <div className="py-20 px-32 bg-gradient-to-r from-gradiente1 to-pink-500 z-20 h-full absolute top-0 left-0 right-0">
                    <h3 className="text-4xl text-white font-bold">Markdown Language Sample Blog Post Styling</h3>
                    <div className="flex my-10">
                        <img className="h-16 w-16 object-cover rounded-full" src="/img/autor.jpg" alt=""/>
                        <div className="ml-4">
                            <p className="text-white font-semibold">Jane Smith</p>
                            <span className="text-white font-light">May 15, 2021 . 2 min</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center justify-center bg-white rounded-full mr-4 hover:bg-primary-500 transition cursor-pointer shadow-md">
                            <div className="text-gray-400 hover:text-white transition">
                                <FaAngleLeft size="2.2rem"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-white rounded-full hover:bg-primary-500 transition cursor-pointer shadow-md" >
                            <div className="text-gray-400 hover:text-white transition">
                                <FaAngleRight size="2.2rem"/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="absolute top-20 left-10 bottom-0 z-20">
                    <div className="cursor-pointer h-3 w-3 bg-primary-500 rounded-full mb-2"/>
                    <div className="cursor-pointer h-3 w-3 bg-gray-200 rounded-full mb-2"/>
                    <div className="cursor-pointer h-3 w-3 bg-gray-200 rounded-full mb-2"/>
                </div>
            </div>
            <div className="flex flex-col justify-between h-full col-span-2 row-span-3 relative rounded-2xl overflow-hidden px-6 py-8" style={{backgroundColor: '#edf2f7'}}>
                <FaRegHandshake size="4rem" color="#a443ca"/>
                <h2 className="text-3xl font-bold text-text">Best Networking Workshops</h2>
                <h3 className="text-text my-4">In this workshop, learn when and how to network with modern best practices.</h3>
                <div>
                    <div className="my-2 flex items-start justify-between">
                        <div className="mt-2 mr-2">
                            <div className="h-2 w-2 bg-primary-500 rounded-full"/>
                        </div>
                        <span className="w-auto text-sm text-text">Explain the importance of networking for career-building</span>
                    </div>
                    <div className="my-2 flex items-start justify-between">
                        <div className="mt-2 mr-2">
                            <div className="h-2 w-2 bg-primary-500 rounded-full"/>
                        </div>
                        <span className="w-auto text-sm text-text">Practice modern tips for effective networking</span>
                    </div>
                    <div className="my-2 flex items-start justify-between">
                        <div className="mt-2 mr-2">
                            <div className="h-2 w-2 bg-primary-500 rounded-full"/>
                        </div>
                        <span className="w-auto text-sm text-text">Understand the steps towards building your own network</span>
                    </div>
                </div>
                <div className="mt-16 justify-self-end">
                    <BtnPrimary title="Learn more"/>
                </div>
            </div>
            <ItemNews/>
            <ItemNews/>
            <ItemNews/>
            <ItemNews/>
        </div>
    );
}

export default SectionNews;
