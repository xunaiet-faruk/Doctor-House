import Image from "next/image";
import Image1 from '../../../assests/Rectangle 15.png'
import Image2 from '../../../assests/Rectangle 15 (1).png'
import Image3 from '../../../assests/Rectangle 15 (2).png'
import Star from '../../../assests/star.png'
import Home from '../../../assests/Home.png'
import location from '../../../assests/Frame.png'
import Money from '../../../assests/Vector (4).png'


const Expert = () => {
    return (
        <div className="mb-32">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-semibold">Our Expert Doctors</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br/> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div className=" max-w-screen-xl  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center mx-auto">
               
            <div className="bg-white shadow-slate-200 h-[570px] shadow-xl  border border-gray-2 w-[360px] rounded-md">
                <div className="flex justify-center items-center pt-3">
                    <Image src={Image1} alt=""/>
                </div>
                <div>
                      <div className="pl-5 py-6">
                            <h1 className="text-2xl font-semibold">Karyen Anderson</h1>
                            <p className="text-sm text-[#6C6B6B] pb-3 pt-2">BTP -  Senior Physiotherapist</p>
                            <Image src={Star} alt="star" />
                            <hr className="border-[#dedede]  mt-5 mb-5 w-[310px]  border-1"/>
                         <div className="space-y-2">
                                <div className="flex gap-5 items-center">
                                    <Image src={Home} alt="" />
                                    <p className="text-sm text-[#6C6B6B]">Dhanmondi, Dhaka, Bangladesh</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <Image src={location} alt="" />
                                    <p className="text-sm text-[#6C6B6B]">Available On Mon, 22 December</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <Image src={location} alt="" />
                                    <p className="text-sm text-[#6C6B6B]">$200</p>
                                </div>
                         </div>
                      </div>

                        <button className="w-full px-6">
                            <a href="#_" class="relative inline-flex items-center justify-start px-6 w-full py-3 overflow-hidden font-medium transition-all bg-white border border-orange-200 rounded-md hover:bg-white group">
                                <span class="w-full h-48 rounded rotate-[-40deg] bg-[#F7A582] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full  text-black transition-colors duration-300 ease-in-out group-hover:text-white text-center">View Profile</span>
                            </a>
                        </button>
                        

                </div>
            </div>

            {/* /////card -2    -------------------- */}
                <div className="bg-white shadow-slate-200 h-[570px] shadow-xl  border border-gray-2 w-[360px] rounded-md">
                    <div className="flex justify-center items-center pt-3">
                        <Image src={Image2} alt="" />
                    </div>
                    <div>
                        <div className="pl-5 py-6">
                            <h1 className="text-2xl font-semibold">Karyen Anderson</h1>
                            <p className="text-sm text-[#6C6B6B] pb-3 pt-2">BTP -  Senior Physiotherapist</p>
                            <Image src={Star} alt="star" />
                            <hr className="border-[#dedede] mt-5 mb-5 w-[310px]  border-1" />
                            <div className="space-y-2">
                                <div className="flex gap-5 items-center">
                                    <Image src={Home} alt="" />
                                    <p className="text-sm text-[#6C6B6B]">Dhanmondi, Dhaka, Bangladesh</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <Image src={location} alt="" />
                                    <p className="text-sm text-[#6C6B6B]">Available On Mon, 22 December</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <Image src={location} alt="" />
                                    <p className="text-sm text-[#6C6B6B]">$63</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full px-6">
                            <a href="#_" class="relative inline-flex items-center justify-start px-6 w-full py-3 overflow-hidden font-medium transition-all bg-white border border-orange-200 rounded-md hover:bg-white group">
                                <span class="w-full h-48 rounded rotate-[-40deg] bg-[#F7A582] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full  text-black transition-colors duration-300 ease-in-out group-hover:text-white text-center">View Profile</span>
                            </a>
                        </button>


                    </div>
                </div>

            {/* /////card -3    -------------------- */}
                <div className="bg-white shadow-slate-200 h-[570px] shadow-xl  border border-gray-2 w-[360px] rounded-md">
                    <div className="flex justify-center items-center pt-3">
                        <Image src={Image3} alt="" />
                    </div>
                    <div>
                        <div className="pl-5 py-6">
                            <h1 className="text-2xl font-semibold">Karyen Anderson</h1>
                            <p className="text-sm text-[#6C6B6B] pb-3 pt-2">BTP -  Senior Physiotherapist</p>
                            <Image src={Star} alt="star" />
                            <hr className="border-[#dedede] mt-5 mb-5 w-[310px]  border-1" />
                            <div className="space-y-2">
                                <div className="flex gap-5 items-center">
                                    <Image src={Home} alt="" />
                                    <p className="text-sm text-[#6C6B6B]">Dhanmondi, Dhaka, Bangladesh</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <Image src={location} alt="" />
                                    <p className="text-sm text-[#6C6B6B]">Available On Mon, 22 December</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <Image src={location} alt="" />
                                    <p className="text-sm text-[#6C6B6B]">$15</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full px-6">
                            <a href="#_" class="relative inline-flex items-center justify-start px-6 w-full py-3 overflow-hidden font-medium transition-all bg-white border border-orange-200 rounded-md hover:bg-white group">
                                <span class="w-full h-48 rounded rotate-[-40deg] bg-[#F7A582] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full  text-black transition-colors duration-300 ease-in-out group-hover:text-white text-center">View Profile</span>
                            </a>
                        </button>


                    </div>
                </div>

              
           </div>
        </div>
    );
};

export default Expert;