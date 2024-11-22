"use client";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";
import image1 from "../../assests/Group 34978.png";
import image2 from "../../assests/Group 34978 (1).png";
import image3 from "../../assests/Group 34978 (2).png";
import image4 from "../../assests/Group 34978 (3).png";
import image5 from "../../assests/Group 34978 (4).png";

const AvailableTreat = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState("");

    const openModal = (slot) => {
        setSelectedSlot(slot);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSlot("");
    };

    return (
        <div>
            <h1 className="text-5xl font-bold text-black text-center py-20">
                Available slots for Teeth Orthodontics
            </h1>

            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-32 max-w-screen-xl mx-auto gap-12">
                    {[
                        { id: 1, name: "Teeth Orthodontics", time: "8:00 AM - 9:00 AM", image: image1 },
                        { id: 2, name: "Cosmetic Dentistry", time: "10:05 AM - 11:30 AM", image: image2 },
                        { id: 3, name: "Teeth Cleaning", time: "8:00 AM - 9:00 AM", image: image3 },
                        { id: 4, name: "Teeth Orthodontics", time: "8:00 AM - 9:00 AM", image: image5 },
                        { id: 5, name: "Teeth Cleaning", time: "8:00 AM - 9:00 AM", image: image4 },
                    ].map((slot) => (
                        <div
                            key={slot.id}
                            className="space-y-4 rounded-lg bg-white p-6 shadow-2xl h-[479px] pt-20"
                        >
                            <div className="flex justify-center items-center">
                                <Image width={"100%"} height={"100%"} src={slot.image} alt={slot.name} />
                            </div>
                            <div className="space-y-6">
                                <p className="text-center text-3xl font-bold">{slot.name}</p>
                                <p className="text-md text-center">{slot.time}</p>

                                <button onClick={() => openModal(slot)} className="w-full px-12">
                                    <a href="#_" class="relative inline-flex items-center justify-start px-6 w-full py-3 overflow-hidden font-medium transition-all bg-white border border-orange-200 rounded-md hover:bg-white group">
                                        <span class="w-[420px] h-48 rounded rotate-[-40deg] bg-[#F7A582] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span class="relative w-full  text-black transition-colors duration-300 ease-in-out group-hover:text-white text-center">Book Appoinment</span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl h-[500px] w-[500px]">
                        <div className=" flex justify-end ">
                            <button
                                onClick={closeModal}
                                className="  text-[#07332F]  rounded-md hover:text-red-600"
                            >
                                <MdOutlineCancel className="text-5xl" />

                            </button>
                        </div>
                        <div className="pt-5 space-y-5">
                            <input className="bg-gray-200 w-full py-3 rounded-md px-5"/>
                            <input className="bg-gray-200 w-full py-3 rounded-md px-5"/>
                            <input className="bg-gray-200 w-full py-3 rounded-md px-5"/>
                            <input className="bg-gray-200 w-full py-3 rounded-md px-5"/>
                            <input className="bg-gray-200 w-full py-3 rounded-md px-5"/>

                            <button className="w-full ">
                                <a href="#_" class="relative inline-flex items-center justify-start px-6 w-full py-3 overflow-hidden font-medium transition-all bg-white border border-orange-200 rounded-md hover:bg-white group">
                                    <span class="w-full h-48 rounded rotate-[-40deg] bg-[#07332F] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span class="relative w-full  text-black transition-colors duration-300 ease-in-out group-hover:text-white text-center">Book Appoinment</span>
                                </a>
                            </button>

                            </div>
                      
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default AvailableTreat;
