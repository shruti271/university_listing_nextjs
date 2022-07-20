import Image from "next/image";
import uniLogo from '../../../assets/uniLogo.svg';
import heartIcon from '../../../assets/heart.svg';

export default function UniHeaderSection() {
    return (
        <div className='flex items-center justify-center -mt-8 sm:-mt-12 lg:-mt-16 relative '>
            <div className='rounded-xl bg-white w-full sm:w-10/12'>
                <div className="grid grid-cols-5">

                    <div className='uni-logo col-span-1'>
                        <Image src={uniLogo} alt="uniLogo" />
                    </div>
                    <div className="col-span-4 mt-5" >
                        <div className="grid grid-cols-3 items-center ml-4">
                            <div className='col-span-3 sm:col-span-2 xl:col-span-1'>
                                <div className='font-semibold text-2xl lg:text-3xl text-[#000000] ml-4 lg:ml-0'>
                                    University of Dubai.
                                </div>
                                <div className=' text-[#363848] ml-4 lg:ml-0'>
                                    Specialty: Creative Design, Arts,
                                    Arts and Design
                                </div>
                            </div>
                            <div className="items-center col-span-3 sm:col-span-1 xl:col-span-2 justify-end gap-8 sm:gap-2 lg:gap-8 flex xl:mr-20 mr-4 mt-4 sm:mt-0">
                                <button
                                    className="bg-[#1E75FF] hover:bg-[#1E75FF] text-[#FAFAFB] px-6 py-1.5 items-center text-xs rounded font-semibold whitespace-nowrap hover:scale-95 transition-all duration-300 ">
                                    Apply Now
                                </button>
                                <button
                                    className={`w-7 h-7 rounded-md transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D]`}
                                >
                                    <Image src={heartIcon} alt="heart" width="12" height="12" />
                                </button>
                            </div>
                        </div>
                        <div className='mt-8 ml-4'>
                            <ul className="flex items-center justify-start gap-4 flex-wrap mb-8 ml-4 lg:ml-0">
                                <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
                                    Location : <span className="font-bold"> Dubai,UAE </span>
                                </li>
                                <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
                                    University Type :
                                    <span className="font-bold"> Public </span>
                                </li>
                                <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
                                    Campus Setting : <span className="font-bold"> Major City </span>
                                </li>
                                <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
                                    Acceptance Rate : <span className="font-bold"> 12 percent </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}