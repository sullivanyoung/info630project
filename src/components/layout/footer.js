import React from "react";

function footer() {
    return (
        <>
            <div className=" bg-linear-pink-invert pb-12">
                <div className="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full m-8" />
                    <div className="flex">
                        <img src="/images/organic-logo.jpg" alt="store logo"/>
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">EAT HEALTHY FOOD</h1>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:underline">Home</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:underline">Shop</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:underline">Careers</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:underline">About</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:underline">Sign In</li>
                                <li className="cursor-pointer pt-4 lg:py-0 hover:underline">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2020 OFS. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default footer;