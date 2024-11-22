import Image from 'next/image';
import React from 'react';
import image1 from '../../assests/Group 34964 (1).png'
import image2 from '../../assests/Flat.png'
import image3 from '../../assests/Group (2).png'
import image4 from '../../assests/Group (3).png'
import image5 from '../../assests/Group 34967.png'
import image7 from '../../assests/Group 34963.png'
const SelectServices = () => {
    return (
        <div className=''>
            <div>
                <div className='text-center py-12'>
                    <p className='text-2xl text-[#F7A582]'>Available Services on April 30, 2022</p>
                    <h1 className='text-6xl font-bold text-[#3B3A3A]'>Please select a service</h1>
                </div>
            </div>

            <div className='mb-32'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 px-4  justify-center items-center max-w-screen-xl mt-12 mx-auto'>
                   
                   
                    <div className='bg-white shadow-2xl w-[370px] h-[120px] rounded-xl  pt-4'>
                        <div className='flex gap-6 items-center justify-center px-5'>
                            <div className='bg-[#f39ea7]   w-[100px] h-[90px]  flex flex-col justify-center items-center rounded-xl'>
                                <Image src={image1} alt='image' />
                            </div>
                            <div>
                                <p className='text-2xl font-semibold'>Teeth  Orthodontics</p>
                            </div>
                        </div>
                    </div>


                   
                    <div className='bg-white shadow-2xl w-[370px] h-[120px] rounded-xl  pt-4'>
                        <div className='flex gap-6 items-center justify-center px-5'>
                            <div className='bg-[#fde6cd]   w-[100px] h-[90px]  flex flex-col justify-center items-center rounded-xl'>
                                <Image src={image2} alt='image' />
                            </div>
                            <div>
                                <p className='text-2xl font-semibold'>Cosmetic Dentisty</p>
                            </div>
                        </div>
                    </div>




                    <div className='bg-white shadow-2xl w-[370px] h-[120px] rounded-xl  pt-4'>
                        <div className='flex gap-6 items-center justify-center px-5 '>
                            <div className='bg-[#f5c9cd]   w-[100px] h-[90px]  flex flex-col justify-center items-center rounded-xl'>
                                <Image src={image3} alt='image' />
                            </div>
                            <div>
                                <p className='text-2xl  font-semibold'>Teeths Cleaniings</p>
                            </div>
                        </div>
                    </div>

                   

                    <div className='bg-white shadow-2xl w-[370px] h-[120px] rounded-xl  pt-4'>
                        <div className='flex gap-6 items-center justify-center px-5'>
                            <div className='bg-[#caf1f6]   w-[100px] h-[90px]  flex flex-col justify-center items-center rounded-xl'>
                                <Image src={image4} alt='image' />
                            </div>
                            <div>
                                <p className='text-2xl font-semibold'>Pediatrics Dentals</p>
                            </div>
                        </div>
                    </div>



                    <div className='bg-white shadow-2xl w-[370px] h-[120px] rounded-xl  pt-4'>
                        <div className='flex gap-6 items-center justify-center px-5'>
                            <div className='bg-[#f8e0e3]   w-[100px] h-[90px]  flex flex-col justify-center items-center rounded-xl'>
                                <Image src={image5} alt='image' />
                            </div>
                            <div>
                                <p className='text-2xl font-semibold'>Pediatrics Dentals</p>
                            </div>
                        </div>
                    </div>


                    <div className='bg-white shadow-2xl w-[370px] h-[120px] rounded-xl  pt-4'>
                        <div className='flex gap-6 items-center justify-center px-5'>
                            <div className='bg-[#efe7d0]   w-[100px] h-[90px]  flex flex-col justify-center items-center rounded-xl'>
                                <Image src={image7} alt='image' />
                            </div>
                            <div>
                                <p className='text-2xl font-semibold'>Orals Surgeery treat</p>
                            </div>
                        </div>
                    </div>



                   
                </div>
              
                
            </div>
        </div>
    );
};

export default SelectServices;