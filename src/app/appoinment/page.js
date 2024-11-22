import Image from 'next/image';
import Groupe  from '../../assests/Group 7.png'
import Appointdetails from '@/components/AppoinmentPage/Appointdetails';
import SelectServices from '@/components/AppoinmentPage/SelectServices';
import AvailableTreat from '@/components/AppoinmentPage/AvailableTreat';
const Appoinment = () => {
    return (
       <div>
            <div className='w-full h-[500px] bg-[#07332f]'>
                <div>

                  

                    <div>

                        <div className='pt-40 max-w-screen-2xl mx-auto pl-9 flex justify-between items-center'>

                            <div>
                                <p className='text-white'>Home / <span> Appoinment</span></p>
                                <h1 className='text-5xl font-semibold text-white'>Appoinment</h1>
                            </div>

                            <div>
                                <Image src={Groupe} alt='image' />
                            </div>
                        </div>

                      

                    </div>

                </div>
            </div>

            <Appointdetails />
            <SelectServices/>
            <AvailableTreat/>
            

       </div>
    );
};

export default Appoinment;