"use client";

import { useState } from "react";
import Image from "next/image";
import about from '../../../assests/Rectangle 20078.png';
import Teath from '../../../assests/Rectangle 10.png';
import Teath2 from '../../../assests/pngtree-dental-floss-cleaning-teeth-model-studio-shot-still-life-photography-picture-image_856537.jpg';
import Teath3 from '../../../assests/teat2.jpg';

const Aboutus = () => {
    const [activeTab, setActiveTab] = useState('cavity');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const selectedImage = activeTab === 'cavity'
        ? Teath
        : activeTab === 'cosmetic'
            ? Teath2
            : Teath3;


    return (
        <div>
            <div className='flex max-w-screen-xl mx-auto gap-8 mb-36'>
                <div>
                    <Image className="w-[530px]" src={about} alt="about" />
                </div>
                <div>
                    <div className="space-y-7">
                        <h1 className="text-3xl font-bold">Our Services</h1>
                        <p className="w-[438px]">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>

                    <div className="mt-7">
                        <div className="w-[520px] rounded-xl h-[60px] space-y-12">
                            <div className="flex flex-row gap-4">
                                <button
                                    className={`py-4 px-3 rounded-xl -ml-2 ${activeTab === 'cavity' ? 'bg-[#F7A582]' : 'bg-gray-100'}`}
                                    onClick={() => handleTabClick('cavity')}
                                >
                                    Cavity Protection
                                </button>
                                <button
                                    className={`px-4 rounded-xl ${activeTab === 'cosmetic' ? 'bg-[#F7A582]' : 'bg-gray-100'}`}
                                    onClick={() => handleTabClick('cosmetic')}
                                >
                                    Cosmetic Dentistry
                                </button>
                                <button
                                    className={`px-5 -mr-4 rounded-xl ${activeTab === 'surgery' ? 'bg-[#F7A582]' : 'bg-gray-100'}`}
                                    onClick={() => handleTabClick('surgery')}
                                >
                                    Oral Surgery
                                </button>
                            </div>
                        </div>

                        <div>
                            {/* Display the selected image */}
                            <Image className="w-[510px] mt-12 mb-12 rounded-md" src={selectedImage} alt="service image" />
                        </div>

                        {/* Content for each tab */}
                        {activeTab === 'cavity' && (
                            <div>
                                <h1 className="text-3xl font-bold">Cavity Protection</h1>
                                <p className="w-[558px] pb-5 pt-5">
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error                                 </p>
                                <p className="w-[558px]">
                                    Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis voluptatem accusantium doloremque laudantium, totam rem aperiam 
                                </p>
                            </div>
                        )}

                        {activeTab === 'cosmetic' && (
                            <div>
                                <h1 className="text-3xl font-bold">Cosmetic Dentistry</h1>
                                <p className="w-[558px] pb-5 pt-5">
                                    Cosmetic dentistry is focused on improving the appearance of your teeth, mouth, and smile...
                                </p>
                                <p className="w-[558px]">
                                    From subtle changes to major repairs, there are various options available...
                                </p>
                            </div>
                        )}

                        {activeTab === 'surgery' && (
                            <div>
                                <h1 className="text-3xl font-bold">Oral Surgery</h1>
                                <p className="w-[558px] pb-5 pt-5">
                                    Oral surgery involves surgical procedures in and around your mouth and jaw...
                                </p>
                                <p className="w-[558px]">
                                    Common types include wisdom tooth removal, dental implants, and jaw alignment...
                                </p>
                            </div>
                        )}

                        <button className="border-2 border-[#F7A582] rounded-md mt-6">
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#F7A582] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">More Details</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
