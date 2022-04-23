import React from 'react'
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


const Services = () => {
    return (
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flew-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                        Services that we offer
                        <br />
                        and continue to improve
                    </h1>
                    <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                        the various services we offer are the best way to buy and sell your crypto assets
                    </p>
                </div>
                <div className="flex-1 flex flex-col justify-start items-center">

                </div>
            </div>

        </div>
    )
}

export default Services