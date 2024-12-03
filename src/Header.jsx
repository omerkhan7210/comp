import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
const navItems = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
];

return (
    <header className="grid grid-cols-12 gap-3 ">
        <div className=" col-span-2 flex items-center justify-center">
            <img src="/assets/img/logo.png" alt="" className='size-16'/>
        </div>
        <nav className=' p-4 col-span-8 flex items-center justify-center '>
            <ul className="flex space-x-16 ">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href} className="text-blue-500 hover:underline text-white">{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <div className=" p-4 col-span-2 flex justify-center">  <button className="bg-gradient-to-r from-purple-500 to-purple-800 text-white py-2 px-4 rounded-full">
        Contact Us
    </button></div>
  
    </header>
);
}


export const BannerSection = () => {
    const [text, setText] = useState('');
    const words = ['Produced', 'Organized', 'Presented'];
    const speed = 150; // typing speed in milliseconds
    const delay = 1000; // delay between words in milliseconds

    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        const typeWord = () => {
            if (charIndex === 0) {
                setText('');
            }
            if (charIndex < words[wordIndex].length && words[wordIndex][charIndex]) {
                setText((prev) => prev + words[wordIndex][charIndex]);
                charIndex++;
            } else {
                setTimeout(() => {
                    charIndex = 0;
                    wordIndex = (wordIndex + 1) % words.length;
                }, delay);
            }
        };

        const interval = setInterval(typeWord, speed);
        return () => clearInterval(interval);
    }, []);


    return (
        <motion.div
            className="flex flex-col justify-center items-center h-[500px] gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-center text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 capitalize">
                {text} <span className='text-white font-semibold'>By</span>
            </h1>

           <div className='flex justify-center flex-col items-center'>
           <button className='bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 mt-5 py-3 px-5 rounded-full text-white'>
                BUDS X SUPERCOMP
            </button>

            <p className="text-white max-w-[550px] text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga quis mollitia maiores, natus eligendi soluta minus eaque nihil amet.
            </p>
           </div>
        </motion.div>
    );
};

// export const CardSection = () => {
//     const cards = [
//         { title: "Card 1", description: "Description for card 1" },
//         { title: "Card 2", description: "Description for card 2" },
//         { title: "Card 3", description: "Description for card 3" },
//         { title: "Card 4", description: "Description for card 4" },
//     ];

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         centerMode: true,
//         centerPadding: '0',
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     centerMode: true,
//                     centerPadding: '0',
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     centerMode: true,
//                     centerPadding: '0',
//                 }
//             }
//         ]
//     };

//     return (
//         <section className='' style={{ background: 'url(/assets/img/bg/bh.jpg)' }}>
//             <Slider {...settings}>
//                 {cards.map((card, index) => (
//                     <div key={index} className="p-4 !bg-white">
//                         <div className=" rounded-lg p-6">
//                             <h2 className="text-xl font-bold mb-2">{card.title}</h2>
//                             <p>{card.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </section>
//     );
// };
export const CardSection = () => {
    const cards = [
        { title: "Card 1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, rerum soluta! Ab accusantium sapiente quibusdam nulla aut? Itaque, error eos!", imgSrc: "/assets/img/cid1.jpg" },
        { title: "Card 2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, rerum soluta! Ab accusantium sapiente quibusdam nulla aut? Itaque, error eos!", imgSrc: "/assets/img/cid2.jpg" },
        { title: "Card 3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, rerum soluta! Ab accusantium sapiente quibusdam nulla aut? Itaque, error eos!", imgSrc: "/assets/img/cid3.jpeg" },
        { title: "Card 4",  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, rerum soluta! Ab accusantium sapiente quibusdam nulla aut? Itaque, error eos!", imgSrc: "/assets/img/cid4.jpg" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '100px',
        arrows: false,
        focusOnSelect:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0',
                }
            }
        ]
    };

    const logos = ["/assets/img/part/l1.png","/assets/img/part/l2.png","/assets/img/part/l3.png","/assets/img/part/l4.png","/assets/img/part/l5.png","assets/img/part/l6.png" ]


    return (
        <div className='bg-black p-10'>
        <section className='max-w-[70%] mx-auto '>
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="p-5 !m-0">
                        <div className="rounded-lg relative !bg-black border-2 border-gradient-to-r from-purple-400 via-pink-500 to-purple-800">
                            <div className="relative">
                                <img src={card.imgSrc} alt={card.title} className="w-full h-48 object-cover rounded-t-lg" />
                                <div className="absolute inset-0 bg-black opacity-50 rounded-t-lg"></div>
                                <button className="absolute inset-0 flex items-center justify-center">
                                    <svg className="size-7 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                          <div className='p-6'>
                          <h2 className=" text-xl font-bold mb-2 mt-4 text-white text-left">{card.title}</h2>
                          <p className='text-white text-sm text-left'>{card.description}</p>
                          </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>

        <section className="max-w-[70%] mx-auto  mt-20">
       <div className="flex justify-center">
       <h1 className="my-16 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 capitalize relative inline-block">
        <span className='text-white font-semibold '>Our</span> Partners
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800"></span>
            </h1>
       </div>
            <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={5}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={2000}
                arrows={false}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    }
                ]}
            >
                {logos.map((logo, index) => (
                    <div key={index} className="p-2">
                        <img src={logo} alt={`Logo ${index + 1}`} className="size-28 object-contain" />
                    </div>
                ))}
            </Slider>
        </section>
        </div>
    );
};

export const StepsToFollow = ()=>{
   
const steps = [
    { imgSrc: "/assets/img/analyze.gif", title: "Step 1", description: "This is the first step.", icon: "🔍" },
    { imgSrc: "/assets/img/brainstorm.gif", title: "Step 2", description: "This is the second step.", icon: "✏️" },
    { imgSrc: "/assets/img/cat-computer.gif", title: "Step 3", description: "This is the third step.", icon: "✅" }, { imgSrc: "/assets/img/evaluation.gif", title: "Step 4", description: "This is the third step.", icon: "✅" },
];

return (
    <section className="bg-gray-100 p-10" style={{
        background: 'rgb(44,22,97)',
        backgroundSize:'100%',
        backgroundPosition:'cover'
        }}>
            <div className="flex justify-center">
            <h1 className="my-16 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 capitalize relative inline-block">
        <span className='text-white font-semibold '>Steps to</span> Follow
        <span className="absolute left-0 top-14 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800"></span>
            </h1>
            </div>
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
                <div key={index} className="bg-black rounded-lg shadow-lg">
                    <div className="relative">
                        <img src={step.imgSrc} alt={step.title} className="w-full h-48 object-cover rounded-t-lg mb-4 transition-opacity duration-300 hover:opacity-0" />
                        <img src={step.imgSrc.replace('.png', '.gif')} alt={step.title} className="w-full h-48 object-cover rounded-t-lg mb-4 absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    </div>
                  <div className='p-5'>
                  <div className="flex items-center mb-2 ">
                        <span className="text-2xl mr-2 text-purple-600">{step.icon}</span>
                        <h2 className="text-xl font-bold text-purple-600">{step.title}</h2>
                    </div>
                   
                    <p className='text-white/80 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et cupiditate praesentium error veniam unde ex qui voluptas, aspernatur quidem?</p>
                  </div>
                </div>
            ))}
        </div>
    </section>
);
}


export const Competitions = ()=>{
   
    const steps = [
        { imgSrc: "/assets/img/comp/cone.png", title: "Step 1", description: "This is the first step.", icon: "🔍" },
        { imgSrc: "/assets/img/comp/cone.png", title: "Step 2", description: "This is the second step.", icon: "✏️" },
        { imgSrc: "/assets/img/comp/cone.png", title: "Step 3", description: "This is the third step.", icon: "✅" }, { imgSrc: "/assets/img/comp/cone.png", title: "Step 4", description: "This is the third step.", icon: "✅" },
    ];
    
    return (
        <section className="bg-black p-10 relative w-full" >
            <img src="/assets/img/bg/2bg.png" className='absolute size-full' alt="" />
                <div className=" max-w-[90%] mx-right pl-24 flex justify-start">
                <h1 className="my-16 text-left text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 capitalize relative inline-block">
             Competitions
            <span className="absolute left-0 top-14 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800"></span>
                </h1>
                </div>
            <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {steps.map((step, index) => (
                    <div key={index} className="bg-black rounded-lg shadow-lg border">
                        <div className="relative">
                            <img src={step.imgSrc} alt={step.title} className=" w-full -mt-20 h-48 mb-4 transition-opacity duration-300 hover:opacity-0" />
                          
                        </div>
                      <div className='p-5'>
                      <div className="flex items-center mb-2 ">
                            <span className="text-2xl mr-2 text-purple-600">{step.icon}</span>
                            <h2 className="text-xl font-bold text-purple-600">{step.title}</h2>
                        </div>
                       
                        <p className='text-white/80 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et cupiditate praesentium error veniam unde ex qui voluptas, aspernatur quidem?</p>
                      </div>
                    </div>
                ))}
            </div>
        </section>
    );
    }

  

export default Header
