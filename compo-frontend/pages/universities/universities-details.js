import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import CoverImage from '../../assets/universities-page/hero-section/hero-bg1.png';
import uniLogo from '../../assets/uniLogo.svg';
import heartIcon from '../../assets/heart.svg';

import * as React from 'react';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import { CustomTab, CustomBorderLinearProgress, TabPanel, a11yProps } from '../../components/core/CustomMUIComponents';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import CabinOutlinedIcon from '@mui/icons-material/CabinOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';

import AliceCarousel from "react-alice-carousel";
import Gallery1 from "../../assets/gallery1.png";
import Gallery2 from "../../assets/gallery2.png";
import Gallery3 from "../../assets/gallery3.png";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import 'react-alice-carousel/lib/alice-carousel.css';
import UniversityCard from '../../components/university-sections/universities-section/UniversityCard';
import dubaiUniLogo from '../../assets/universities-page/universities-section/uni-dubai.jpg';
import floridaUniLogo from '../../assets/universities-page/universities-section/uni-florida.jpg';
import withAuth from '../../components/core/PrivateRoute';

const UniversitiesDetails = () => {

    const [value, setValue] = React.useState(0);
    const universities = [
        {
            id: 1,
            logo: dubaiUniLogo,
            location: 'Dubai, United Arab Emirates',
            type: 'public',
            acceptanceRate: '59',
            name: 'University of Dubai',
            description:
                'The University of Dubai has been home to talented students and faculty drawn from around the world to teach, create, and study.',
            stats: { ranking: 10, numberOfStudents: 8000, avgCost: 2300, avgACT: 29 },
            linkApply: '/universities',
            linkView: '/universities',
        },
        {
            id: 2,
            logo: floridaUniLogo,
            location: 'Florida, United States',
            type: 'private',
            acceptanceRate: '76',
            name: 'University of Central Florida',
            description:
                'The University of Central Florida has been home to talented students and faculty drawn from around the world to teach, create, and study.',
            stats: { ranking: 8, numberOfStudents: 2300, avgCost: 22300, avgACT: 78 },
            linkApply: '/universities',
            linkView: '/universities',
        },
        {
            id: 3,
            logo: floridaUniLogo,
            location: 'Florida, United States',
            type: 'private',
            acceptanceRate: '76',
            name: 'University of Central Florida',
            description:
                'The University of Central Florida has been home to talented students and faculty drawn from around the world to teach, create, and study.',
            stats: { ranking: 8, numberOfStudents: 2300, avgCost: 22300, avgACT: 78 },
            linkApply: '/universities',
            linkView: '/universities',
        },
        {
            id: 4,
            logo: dubaiUniLogo,
            location: 'Dubai, United Arab Emirates',
            type: 'public',
            acceptanceRate: '59',
            name: 'University of Dubai',
            description:
                'The University of Dubai has been home to talented students and faculty drawn from around the world to teach, create, and study.',
            stats: { ranking: 10, numberOfStudents: 8000, avgCost: 2300, avgACT: 29 },
            linkApply: '/universities',
            linkView: '/universities',
        },
        {
            id: 5,
            logo: dubaiUniLogo,
            location: 'New York, United Arab Emirates',
            type: 'private',
            acceptanceRate: '59',
            name: 'University of New York',
            description:
                'The University of New York has been home to talented students and faculty drawn from around the world to teach, create, and study.',
            stats: { ranking: 10, numberOfStudents: 8000, avgCost: 2300, avgACT: 29 },
            linkApply: '/universities',
            linkView: '/universities',
        },
    ];

    console.log("universities......", universities);



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };


    const items = [Gallery1, Gallery2, Gallery3].map((img) => {

        return (
            <div className='flex items-center cursor-pointer text-white carousel-image' key={img}>
                <Image
                    src={img}
                    alt={img}

                />

            </div>
        );
    });
    return (
        <>
            <Header />
            <div className="bg-colorPale pb-20 md:pb-28">


                <div className="animate__animated animate__zoomIn mt-[112px] bg-cover bg-no-repeat">
                    <Image src={CoverImage} alt="CoverImage" />
                </div>
                <div className="bg-[#F9F9FA]">
                    <div className='flex items-center justify-center -mt-12 lg:-mt-16 relative '>
                        <div className='rounded-xl bg-white  w-full  sm:w-10/12'>
                            <div className="grid grid-cols-5">

                                <div className='uni-logo col-span-1'>
                                    <Image src={uniLogo} alt="uniLogo" />
                                </div>
                                <div className="col-span-4 mt-5" >
                                    <div className="grid grid-cols-3 items-center ml-4">
                                        <div className='col-span-2 xl:col-span-1'>
                                            <div className='font-semibold text-2xl lg:text-3xl text-[#000000] ml-4 lg:ml-0'>
                                                University of Dubai.
                                            </div>
                                            <div className=' text-[#363848] ml-4 lg:ml-0'>
                                                Specialty: Creative Design, Arts,
                                                Arts and Design
                                            </div>
                                        </div>
                                        <div className="items-center col-span-1 xl:col-span-2 justify-end gap-4 lg:gap-8 flex xl:mr-20 mr-4">
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
                                        <ul className="flex items-center justify-start gap-4 flex-wrap mb-8">
                                            <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
                                                Location: <span className="font-bold">Dubai,UAE</span>
                                            </li>
                                            <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
                                                University Type:
                                                <span className="font-bold"> Public</span>
                                            </li>
                                            <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
                                                Campus Setting: <span className="font-bold"> Major City</span>
                                            </li>
                                            <li className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem]">
                                                Acceptance Rate: <span className="font-bold">12 percent</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full  sm:w-10/12 mx-auto">

                        <div className="grid grid-cols-3 gap-4">

                            <div className='col-span-1 mt-6'>
                                <Box className="rounded-lg"
                                    sx={{ bgcolor: 'white', display: 'flex', height: 300 }}
                                >
                                    <CustomTab
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs example"
                                        className='w-full'
                                    >
                                        <Tab label="Overview" icon={<AutoAwesomeMosaicOutlinedIcon />} iconPosition="start"  {...a11yProps(0)} />
                                        <Tab label="Academics" icon={<WorkOutlineOutlinedIcon />} iconPosition="start" {...a11yProps(1)} />
                                        <Tab label="Majors" {...a11yProps(2)} icon={<CrisisAlertOutlinedIcon />} iconPosition="start" />
                                        <Tab label="Tution" {...a11yProps(3)} icon={<AccountTreeOutlinedIcon />} iconPosition="start" />
                                        <Tab label="Admissions" {...a11yProps(4)} icon={<SupervisorAccountOutlinedIcon />} iconPosition="start" />
                                        <Tab label="Campus Life" {...a11yProps(5)} icon={<CabinOutlinedIcon />} iconPosition="start" />
                                        <Tab label="After Graduation" {...a11yProps(6)} icon={<SchoolOutlinedIcon />} iconPosition="start" />
                                        <Tab label="Reviews" {...a11yProps(7)} icon={<ReviewsOutlinedIcon />} iconPosition="start" />
                                    </CustomTab>
                                </Box>
                                <Box className="rounded-lg bg-white mt-4">
                                    <div className="p-4 pb-7 border-b border-colorGrey">
                                        <h4 className="font-semibold text-2xl">
                                            Important Deadlines
                                        </h4>

                                    </div>
                                    <div className="p-4">

                                        <p className='text-[#000000] text-sm font-normal'>
                                            Application Type
                                        </p>
                                        <p className='text-[#0364FF] text-lg font-bold	mt-1'>
                                            Fall Regular Decision
                                        </p>

                                        <p className='text-[#000000] text-sm font-normal mt-5'>
                                            Application Deadline
                                        </p>
                                        <p className='text-[#0364FF] text-lg font-bold	mt-1'>
                                            November 12, 2022
                                        </p>
                                        <button type="button" className="mt-6 inline-block w-full px-6 py-2 border capitalize border-[#0364FF] text-[#0364FF] font-semibold text-sm rounded hover:scale-95 transition-all duration-300">
                                            Apply Now
                                        </button>
                                    </div>
                                </Box>
                            </div>

                            <div className="col-span-2 mt-6" >

                                <TabPanel value={value} index={0}>
                                    <div className='p-6 bg-[#FFFFFF] rounded-lg'>
                                        <p className='text-[#000000] text-xl font-semibold'>About University</p>
                                        <p className='text-[#717171] font-normal text-sm mt-2 tracking-wide'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum



                                        </p>
                                        <p className='text-[#717171] font-normal text-sm mt-8 mb-2 tracking-wide'>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, ss.
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                                        </p>
                                    </div>
                                    <div className='p-6 bg-[#FFFFFF] rounded-lg mt-8'>
                                        <p className='text-[#000000] text-xl font-semibold'>Gallery</p>
                                        <div className='flex items-center mt-6' >
                                            <AliceCarousel
                                                mouseTracking
                                                infinite
                                                autoPlayInterval={1000}
                                                animationDuration={1500}
                                                disableDotsControls
                                                disableButtonsControls
                                                responsive={responsive}
                                                autoPlay
                                                items={items}
                                            />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
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
                                                        <CustomBorderLinearProgress variant="determinate" value={25} setColor="#5451F9" />
                                                    </div>
                                                    <div className="text-[#000000] font-medium text-base">25%</div>

                                                </div>
                                                <div className="grid grid-cols-3 gap-4 items-center">
                                                    <div className="text-[#000000] font-medium text-base">20-39 Students</div>

                                                    <div className="self-center">
                                                        <CustomBorderLinearProgress variant="determinate" value={55} setColor="#E64514" />
                                                    </div>
                                                    <div className="text-[#000000] font-medium text-base">55%</div>

                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-4 lg:mt-8">
                                                <div className="grid grid-cols-3 gap-4 items-center">
                                                    <div className="text-[#000000] font-medium text-base">40-99 Students</div>

                                                    <div className="self-center">
                                                        <CustomBorderLinearProgress variant="determinate" value={90} setColor="#2AA18A" />
                                                    </div>
                                                    <div className="text-[#000000] font-medium text-base">80%</div>

                                                </div>
                                                <div className="grid grid-cols-3 gap-4  items-center">
                                                    <div className="text-[#000000] font-medium text-base">100+ Students</div>

                                                    <div className="self-center">
                                                        <CustomBorderLinearProgress variant="determinate" value={75} setColor="#FF7A1A" />
                                                    </div>
                                                    <div className="text-[#000000] font-medium text-base">12%</div>

                                                </div>
                                            </div>



                                        </div>

                                    </div>
                                </TabPanel>
                                {
                                    [2, 3, 4, 5, 6, 7].map((tabVal) => (
                                        <TabPanel value={value} index={tabVal}>
                                            {value + 1} Tab
                                        </TabPanel>
                                    )
                                    )
                                }
                            </div>
                        </div>


                    </div>
                    <div className="w-full  sm:w-10/12 mx-auto flex mt-24 justify-between">
                        <h4 className="font-semibold text-4xl text-[#363848]">
                            Related univeristies
                        </h4>
                        <button

                            className="bg-[#0364FF] hover:bg-[#0364FF] text-white px-9 py-3 rounded-xl font-semibold shadow-lg hover:scale-95 transition-all duration-300"
                        >
                            View More
                        </button>
                    </div>
                    <div className="w-full  sm:w-10/12 mx-auto mt-24">

                        <div className="grid grid-cols-4 gap-4">
                            {universities.slice(0, 4).map((university) => (
                                <UniversityCard key={university.id} university={university} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}


export default UniversitiesDetails;
// export default withAuth(UniversitiesDetails);