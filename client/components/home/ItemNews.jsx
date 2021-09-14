import React from 'react';
import {FaRegClock} from "react-icons/fa";

function ItemNews() {
    return (
        <a href="#" className="col-span-3">
            <article className="cursor-pointer shadow flex border-l-4 border-primary-400 bg-white rounded-2xl overflow-hidden px-2 py-2 transition transform hover:-translate-y-1 hover:shadow-md">
                <img className="h-40 w-40 object-cover" src="https://res.cloudinary.com/mikunaalli/image/upload/v1631567723/capta/item_j6o4n6.jpg" alt=""/>
                <div className="ml-4 mt-2 flex-1">
                    <div className="flex">
                        <p className="shadow text-black bg-primary-200 py-1 px-6 rounded-lg w-auto hover:text-white hover:bg-gray-400 transition">Innovation</p>
                    </div>
                    <h3 className="font-semibold my-3">Markdown Language Sample Blog Post Styling</h3>
                    <div className="">
                        <p className="text-text text-sm font-semibold">Jane Smith</p>
                        <div className="flex items-center mt-1">
                            <span className="text-text text-xs font-light">May 15, 2021 .</span>
                            <span className="text-text text-xs font-light mx-2">
                                <FaRegClock/>
                            </span>
                            <span className="text-text text-xs font-light"> 2 min</span>
                        </div>
                    </div>
                </div>
            </article>
        </a>
    );
}

export default ItemNews;
