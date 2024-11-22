"use client";
import { FcGoogle } from "react-icons/fc";
import Image from 'next/image';
import image from '../../assests/Frame (2).png'
import image2 from '../../assests/Frame (3).png'
import Link from 'next/link';

const Login = () => {
    return (
        <div className='py-28'>
           <div className='flex justify-center mx-auto gap-12 bg-gray-200 shadow-2xl w-[950px]'>
           
                <div className='bg-[#07332F] h-[650px] flex-1 relative '>

                    <div className='flex justify-center items-center pt-44'>
                        <Image className='w-[360px]' src={image} alt='image' />
                        </div>
                    <div className='absolute bottom-[410px] right-0'>
                    <Image className='w-[350px]' src={image2} alt='image'/>
                    </div>

               </div>

                 <div className='flex-1'>
                    <h1 className='text-[#F7A582]  text-3xl font-semibold py-12'>Sigin in to Doc House</h1>
                
                <div>
                    <form>

                         <div className='space-y-5'>
                                <input placeholder='Enter Name' type='text' className='w-[370px] px-5 h-16 shadow-slate-50 border-b border-[#F7A582] rounded-md' />
                                <input placeholder='Enter Email' type='email' className='w-[370px] px-5 h-16 shadow-slate-50 border-b border-[#F7A582] rounded-md' />
                                <input placeholder='Enter Number' type='number' className='w-[370px] px-5 h-16 shadow-slate-50 border-b border-[#F7A582] rounded-md' />
                                <input placeholder='Enter Password' type='password' className='w-[370px] px-5 h-16 shadow-slate-50 border-b border-[#F7A582] rounded-md' />
                                <button className="w-[370px] ">
                                    <a href="#_" class="relative inline-flex items-center justify-start px-6 w-full py-3 overflow-hidden font-medium transition-all bg-white border border-orange-200 rounded-md hover:bg-white group">
                                        <span class="w-full h-48 rounded rotate-[-40deg] bg-[#07332F] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span class="relative w-full  text-black transition-colors duration-300 ease-in-out group-hover:text-white text-center">Book Appoinment</span>
                                    </a>
                                </button><br/>

                                <button className="w-[80px]">
                                    <a href="#_" class="relative inline-flex items-center justify-start px-6 w-full py-3 overflow-hidden font-medium transition-all bg-white border border-orange-200 rounded-md hover:bg-white group">
                                        <span class="w-[50px] h-48 rounded rotate-[-40deg] bg-[#07332F] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span class="relative w-[40px]  text-black transition-colors duration-300 ease-in-out group-hover:text-white text-center"><FcGoogle className="text-2xl text-center"/></span>
                                    </a>
                                </button>


                                <p className='ml-8'>Please register at first. Go to <span className='text-[#F7A582]'> <Link href="/Signup">SIGN UP</Link></span></p>
                         </div>
                    </form>
                </div>
                
                
                
                 </div>
           
           </div>
        </div>
    );
};

export default Login;