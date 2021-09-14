import React from 'react';
import BtnPrimary from "../layout/BtnPrimary";

function Newsletter(props) {
    return (
        <div className="bg-white px-8 py-20 rounded-2xl mt-20 text-center flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">Subscribe to our newsletter!</h2>
            <p className="my-4 text-text text-xl font-normal">We'll send you the best of our blog just once a month. We promise.</p>
            <input className="bg-cl_input rounded-xl px-8 py-2 outline-none w-96" type="text" placeholder="Email address"/>
            <div className="w-52 flex justify-center mt-4">
                <BtnPrimary title="Subscriber"/>
            </div>
        </div>
    );
}

export default Newsletter;
