import React from 'react';

const BtnSecondary = ({title}) => {
    return (
        <button className="shadow ml-4 inline-flex bg-btnSecondary items-center px-7 py-2 rounded-full font-semibold text-xs text-gray-500 uppercase tracking-widest hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:border-gray-100 focus:ring focus:ring-gray-200 disabled:opacity-25 transition">
            { title }
        </button>

    )
}

export default BtnSecondary;
