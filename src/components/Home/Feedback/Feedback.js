"use client";
import icon from '../../../assests/Logo.png'
import icon2 from '../../../assests/Group 17.png'
import Image from "next/image";
import { useEffect, useState } from "react";

const Feedback = () => {
    const array = [{ name: 'John Doe', designation: 'Student', testimonialDescription: 'Being a student, Taskiee has been my go-to tool for organizing assignments and study schedules. The visual timeline and reminder features have helped me stay on top of my coursework', keyWord: 'Child' }, { name: 'Jane Doe', designation: 'Freelancer', testimonialDescription: 'Taskiee has been a game-changer for my freelance work. It allows me to effortlessly prioritize tasks, set realistic deadlines, and maintain a healthy work-life balance', keyWord: 'Gentlewoman' }, { name: 'Shiyam Sarker', designation: 'Entrepreneur', testimonialDescription: "Taskiee's collaborative features have been instrumental in streamlining tasks for my startup. The ability to share projects and track progress with the team has enhanced our efficiency.", keyWord: 'Gentleman' }, { name: 'Bob Smith', designation: 'Creative Professional', testimonialDescription: 'As a creative professional, Taskiee has simplified my project management. The clean design and goal tracking feature keep me inspired and organized throughout the creative process.', keyWord: 'Child' }, { name: 'Eva Williams', designation: 'Remote Worker', testimonialDescription: "Taskiee's mobile app has made remote work a breeze for me. I can seamlessly manage tasks on the go, ensuring that I stay productive regardless of my location.", keyWord: 'Individual' }, { name: 'Chris Brown', designation: 'Parent', testimonialDescription: 'Managing family schedules is no easy task, but Taskiee has made it seamless. From school activities to household chores, Taskiee keeps our family organized and on track.', keyWord: 'Boy' }, { name: 'Olivia Davis', designation: 'Health Professional', testimonialDescription: 'In the healthcare field, where time is crucial, Taskiee has become my ally. Its time tracking feature has allowed me to optimize patient care and manage administrative tasks efficiently.', keyWord: 'Girl' }, { name: 'Liam Wilson', designation: 'Researcher', testimonialDescription: "Taskiee's analytics feature has proven invaluable in my research endeavors. It provides insightful data on my productivity patterns, helping me refine my workflow and achieve research goals", keyWord: 'Toddler' }];

    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider,nextSlider]);
    
    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className='mb-32'>
           <div className="text-center space-y-5">
                <h1 className="text-3xl font-semibold">What Our Patients Says</h1>
                <p className="font-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br/> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
           </div>

            <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
                <div className="relative overflow-hidden">
                    <div className="absolute w-full h-full flex gap-3 justify-end z-50 px-5">
                        {/* arrow left */}
                        <button
                            onClick={prevSlider}
                            className="flex justify-center items-center border-2 border-[#F7A582] rounded-full w-8 h-8 md:w-8 md:h-8 hover:bg-red-500"
                        >
                            <svg
                                viewBox="0 0 1024 1024"
                                className="w-4 h-4 md:w-4 md:h-4 icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                stroke="currentColor"
                            >
                                <g strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fill="#F7A582"
                                        d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                                        className="hover:fill-white"
                                    ></path>
                                </g>
                            </svg>
                        </button>

                        {/* arrow right */}
                        <button
                            onClick={prevSlider}
                            className="flex justify-center items-center border-2 border-[#F7A582] rounded-full w-8 h-8 md:w-8 md:h-8 hover:bg-red-500"
                        >
                            <svg
                                viewBox="0 0 1024 1024"
                                className="w-4 h-4 md:w-4 md:h-4 icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                transform="rotate(180)"
                                stroke="currentColor"
                            >
                                <g strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fill="#F7A582"
                                        d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                                        className="hover:fill-white"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                    </div>

                    {/* slider container */}
                    <div
                        className="ease-linear duration-300 flex"
                        style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }}>
                        {/* sliders */}
                        {array.map((each, idx) => (
                            <div key={idx} className="p-4 min-w-full md:min-w-[50%] rounded-xl">
                                <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                                   <div className='flex justify-end items-end mb-4'>
                                        <Image className='' src={icon2} alt='icon' />
                                    </div>
                                    <p className="leading-relaxed mb-6 ml-4 text-gray-500">{each?.testimonialDescription}</p>
                                    <a className="inline-flex items-center">
                                        <Image
                                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                            src={icon}
                                            alt="carousel navigate ui"
                                            width={48} // Specify width as 48 (or 200 if you want full size)
                                            height={48} // Specify height as 48 (or 200 if you want full size)
                                        />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">{each.name}</span>
                                            <span className="text-gray-500 text-sm">{each?.designation}</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;