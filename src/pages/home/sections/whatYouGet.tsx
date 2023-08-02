import React from "react";
import "../../../styles/pages/home.scss";
import Images from "../../../assets";

const WhatYouGet = () => {

    const data = [
        {
            icon: Images.personalisedUniversities,
            text: 'Personalized university shortlisted'
        },
        {
            icon: Images.profileEvaluation,
            text: 'Profile Evaluation'
        },
        {
            icon: Images.ansToAll,
            text: 'Answers to all your questions'
        }
    ]
    return (
        <div className="container mx-auto  what-you-get-container">
            <h1 className="text-center text-2xl text-white font-bold">What You get from Your first Call</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
                {data.map((item, i) => (
                    <div key={i} className="py-4 px-8 flex flex-col justify-center items-center">
                        <img src={item.icon} className="rounded-lg" alt="info-icon" />
                        <h2 className='text-white text-center text-xl mt-4 sm:px-10 md:px-0 lg:px-4 xl:px-20'>{item.text} </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatYouGet;
