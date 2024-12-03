import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TestimonialsAndCard = () => {
    const testimonials = [
        { text: "This is the best service I have ever used.", author: "John Doe" },
        { text: "Amazing experience, highly recommend!", author: "Jane Smith" },
        { text: "Exceptional quality and fantastic support.", author: "Sam Wilson" },
    ];

    const card = {
        title: "Special Offer",
        description: "Get 50% off on your first purchase. Limited time offer!",
        imgSrc: "/assets/img/buds.png"
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="bg-black p-10">
             
               <div className="flex justify-center">
   <h1 className="my-16 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 capitalize relative inline-block">
    <span className='text-white font-semibold '>Dare to</span> Create
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800"></span>
        </h1>
   </div>

            <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="bg-black border border-purple-400 rounded-lg shadow-lg p-6 col-span-9">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-4">
                             <div className='min-h-[300px]'>  <img src="/assets/img/buds.png" alt="" className='size-10' /></div>
                                <div className="flex items-center gap-2">
                                    <img src="/assets/img/shahood.png" className='size-8' alt="" />
                                <p className="text-gray-700 text-sm text-center">"{testimonial.text}"</p>
                                <p className="text-purple-900 font-bold text-xs mt-2">- {testimonial.author}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 col-span-3">
                    <img src={card.imgSrc} alt={card.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                    <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                    <p>{card.description}</p>
                </div>
            </div>
        </section>
    );
};