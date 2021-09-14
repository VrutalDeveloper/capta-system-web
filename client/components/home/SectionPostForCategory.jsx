import React from 'react';
import BtnSecondary from "../layout/BtnSecondary";
import {FaRegClock} from "react-icons/fa";
import Link from "next/link";

function SectionPostForCategory({title, link}) {
    return (
        <div className="mt-20">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl pl-8 border-l-4 font-semibold">{title}</h2>
                <Link href={link ? link : '/'}>
                    <a>
                        <BtnSecondary title="View more"/>
                    </a>
                </Link>
            </div>
            <div className="grid grid-cols-3 mt-16 gap-8">
                <a href="#" className="col-span-1">
                    <article className="cursor-pointer shadow flex flex-col bg-white rounded-2xl overflow-hidden px-2 py-2 transition transform hover:-translate-y-1 hover:shadow-md">
                        <img className="h-64 object-cover rounded-2xl" src="https://res.cloudinary.com/mikunaalli/image/upload/v1631567723/capta/item_j6o4n6.jpg" alt=""/>
                        <div className="mx-4 my-8">
                            <div className="flex">
                                <p className="shadow text-black bg-primary-200 py-1 px-6 rounded-lg w-auto hover:text-white hover:bg-gray-400 transition">Innovation</p>
                            </div>
                            <h3 className="font-semibold my-3 text-xl">Markdown Language Sample Blog Post Styling</h3>
                            <p className="text-text text-sm">Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>
                            <div className="flex items-center mt-10">
                                <img className="h-12 w-12 object-cover rounded-full" src="/img/autor.jpg" alt=""/>
                                <div className="ml-4">
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

                        </div>
                    </article>
                </a>
                <a href="#" className="col-span-1">
                    <article className="cursor-pointer shadow flex flex-col bg-white rounded-2xl overflow-hidden px-2 py-2 transition transform hover:-translate-y-1 hover:shadow-md">
                        <img className="h-64 object-cover rounded-2xl" src="https://res.cloudinary.com/mikunaalli/image/upload/v1631567723/capta/item_j6o4n6.jpg" alt=""/>
                        <div className="mx-4 my-8">
                            <div className="flex">
                                <p className="shadow text-black bg-primary-200 py-1 px-6 rounded-lg w-auto hover:text-white hover:bg-gray-400 transition">Innovation</p>
                            </div>
                            <h3 className="font-semibold my-3 text-xl">Markdown Language Sample Blog Post Styling</h3>
                            <p className="text-text text-sm">Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>
                            <div className="flex items-center mt-10">
                                <img className="h-12 w-12 object-cover rounded-full" src="/img/autor.jpg" alt=""/>
                                <div className="ml-4">
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

                        </div>
                    </article>
                </a>
                <a href="#" className="col-span-1">
                    <article className="cursor-pointer shadow flex flex-col bg-white rounded-2xl overflow-hidden px-2 py-2 transition transform hover:-translate-y-1 hover:shadow-md">
                        <img className="h-64 object-cover rounded-2xl" src="https://res.cloudinary.com/mikunaalli/image/upload/v1631567723/capta/item_j6o4n6.jpg" alt=""/>
                        <div className="mx-4 my-8">
                            <div className="flex">
                                <p className="shadow text-black bg-primary-200 py-1 px-6 rounded-lg w-auto hover:text-white hover:bg-gray-400 transition">Innovation</p>
                            </div>
                            <h3 className="font-semibold my-3 text-xl">Markdown Language Sample Blog Post Styling</h3>
                            <p className="text-text text-sm">Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>
                            <div className="flex items-center mt-10">
                                <img className="h-12 w-12 object-cover rounded-full" src="/img/autor.jpg" alt=""/>
                                <div className="ml-4">
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

                        </div>
                    </article>
                </a>
            </div>
        </div>
    );
}

export default SectionPostForCategory;
