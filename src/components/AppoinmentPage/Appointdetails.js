"use client";
import Image from "next/image";
import chair from "../../assests/chair 1.png";
import BackgroundImage from "../../assests/landing-bg.png";
import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const Appointdetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const datePickerRef = useRef(null);

    const handleIconClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setFocus();
        }
    };

    return (
        <div className="relative w-full ">
            {/* Background Image */}
            <Image
                src={BackgroundImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
            />


            <div className="relative z-10 flex gap-32 justify-center  py-32 max-w-screen-2xl mx-auto">

                <div className="flex flex-col items-center  p-5 rounded-lg ">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="p-3 w-72 text-black focus:ring focus:ring-blue-300"
                            calendarClassName="custom-calendar w-62"
                            dayClassName={() => "hover:bg-red-300 text-black rounded-full"}
                            ref={datePickerRef}
                        />
                        <button
                            onClick={handleIconClick}
                            className="p-3 bg-gray-300 hover:bg-gray-400 text-gray-700"
                        >
                            <FaCalendarAlt size={20} />
                        </button>
                    </div>
                </div>

                {/* Chair Image */}
                <div>
                    <Image alt="chair" src={chair} />
                </div>
            </div>




        </div>
    );
};

export default Appointdetails;
