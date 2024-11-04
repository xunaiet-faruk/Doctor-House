import Image from "next/image";
import banner from '../../../assests/Banner.png'

const Banner = () => {
    return (
        <div>
            <div className="w-full h-[800px] bg-[#07332f] mb-32">
                <div className="flex justify-evenly pt-32 max-w-screen-3xl mx-auto">
                    <div className="w-[650px] space-y-12 pt-32">
                        <h1 className="text-white text-7xl font-medium">Your Best Medical Help Center</h1>
                        <p className="text-white">Lorem Ipsum is simply dummy text they are printing typesetting has <br /> been the industry’s stardard.</p>
                        <button>
                            <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#F7A582] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">All Service</span>
                            </a>
                        </button>
                    </div>
                    <div>
                        <Image src={banner} alt="banner"/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;