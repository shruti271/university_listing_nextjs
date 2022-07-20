

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { CustomBorderLinearProgress } from '../../core/CustomMUIComponents';
import Typography from '@mui/material/Typography';


export default function UniAcademics() {
    return (
        <>
            <div className='p-6 bg-[#FFFFFF] rounded-lg'>
                <p className='text-[#000000] text-xl font-semibold'>Admissions Requirements</p>
                <div className="grid grid-cols-1  lg:grid-cols-3 mt-9 ml-4 gap-4 lg:gap-0">
                    <div className='flex items-center justify-start gap-3'>
                        <h4 className='text-lg	font-bold text-[#000000] '>
                            SAT
                        </h4>
                        <Typography className="flex items-center text-[#2DCA72] font-normal text-sm">
                            <CheckCircleOutlineOutlinedIcon fontSize="inherit" sx={{ marginRight: 1 }} />
                            Yes
                        </Typography>
                    </div>
                    <div className='flex items-center justify-start gap-3'>
                        <h4 className='text-lg	font-bold text-[#000000]'>
                            ACT
                        </h4>
                        <Typography className="flex items-center text-[#2DCA72] font-normal text-sm">
                            <CheckCircleOutlineOutlinedIcon fontSize="inherit" sx={{ marginRight: 1 }} />
                            Yes
                        </Typography>
                    </div>
                    <div className='flex items-center justify-start gap-3'>
                        <h4 className='text-lg	font-bold text-[#000000]'>
                            Transcript
                        </h4>

                        <Typography className="flex items-center text-[#2DCA72] font-normal text-sm">
                            <CheckCircleOutlineOutlinedIcon fontSize="inherit" sx={{ marginRight: 1 }} />
                            Yes
                        </Typography>
                    </div>
                </div>
            </div>

            <div className='p-6 bg-[#FFFFFF] rounded-lg mt-8'>
                <p className='text-[#000000] text-xl font-semibold'>Key Academic Stats</p>
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-6 mt-10 ml-4">
                    <div className='gap-6'>
                        <h4 className='text-base font-normal  text-[#000000] '>
                            Highest Degree Offered
                        </h4>
                        <h4 className='text-lg	font-bold text-[#000000]  '>
                            Doctorate
                        </h4>
                    </div>
                    <div className=' gap-6'>
                        <h4 className='text-base font-normal  text-[#000000] '>
                            Total Students
                        </h4>
                        <h4 className='text-lg	font-bold text-[#000000] '>
                            44,589
                        </h4>
                    </div>
                    <div className=' gap-6'>
                        <h4 className='text-base font-normal  text-[#000000] '>
                            Total Undergrads
                        </h4>
                        <h4 className='text-lg	font-bold text-[#000000]  '>
                            31,636
                        </h4>
                    </div>
                    <div className=' gap-6'>
                        <h4 className='text-base font-normal  text-[#000000] '>
                            Academic Calendar
                        </h4>
                        <h4 className='text-lg	font-bold text-[#000000]  '>
                            Quarter
                        </h4>
                    </div>
                </div>

                <div className='mt-20'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <div className="text-[#000000] font-medium text-base">2-19 Students</div>

                            <div className="self-center">
                                <CustomBorderLinearProgress variant="determinate" value={25} setcolor="#5451F9" />
                            </div>
                            <div className="text-[#000000] font-medium text-base">25%</div>

                        </div>
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <div className="text-[#000000] font-medium text-base">20-39 Students</div>

                            <div className="self-center">
                                <CustomBorderLinearProgress variant="determinate" value={55} setcolor="#E64514" />
                            </div>
                            <div className="text-[#000000] font-medium text-base">55%</div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-4 lg:mt-8">
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <div className="text-[#000000] font-medium text-base">40-99 Students</div>

                            <div className="self-center">
                                <CustomBorderLinearProgress variant="determinate" value={90} setcolor="#2AA18A" />
                            </div>
                            <div className="text-[#000000] font-medium text-base">80%</div>

                        </div>
                        <div className="grid grid-cols-3 gap-4  items-center">
                            <div className="text-[#000000] font-medium text-base">100+ Students</div>

                            <div className="self-center">
                                <CustomBorderLinearProgress variant="determinate" value={75} setcolor="#FF7A1A" />
                            </div>
                            <div className="text-[#000000] font-medium text-base">12%</div>

                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}