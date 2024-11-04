import { IoTimeOutline } from "react-icons/io5";

const Info = () => {
    return (
        <div className='max-w-screen-xl mx-auto mb-32'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
                <div className='bg-[#07332F] w-[370px] h-[180px] pt-12 rounded-xl'>
                    <div className="flex justify-center items-center gap-4">
                        <IoTimeOutline  className="text-5xl text-white"/>
                        <h4 className="text-xl text-white font-semibold">Opening Hours</h4>

                    </div>
                    <div className="pl-32">
                        <p className="text-white">Open 9.00 am to 5.00pm Everyday</p>
                       
                    </div>
                </div>
                <div className='bg-[#F7A582] w-[370px] h-[180px] pt-12 rounded-xl'>
                    <div className="flex justify-center items-center gap-4">
                        <IoTimeOutline className="text-5xl text-white" />
                        <h4 className="text-xl text-white font-semibold">Our Location</h4>

                    </div>
                    <div className="pl-32">
                        <p className="text-white">Dhanmondi 17, Dhaka -1200, Bangladesh</p>

                    </div>
                </div>
                <div className='bg-[#07332F] w-[370px] h-[180px] pt-12 rounded-xl'>
                    <div className="flex justify-center items-center gap-4">
                        <IoTimeOutline className="text-5xl text-white" />
                        <h4 className="text-xl text-white font-semibold">Opening Hours</h4>

                    </div>
                    <div className="pl-32">
                        <p className="text-white">Open 9.00 am to 5.00pm Everyday</p>

                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Info;