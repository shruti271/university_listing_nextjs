import * as React from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";
import WaveElement from "../../components/svg/WaveElement";
import { Box, Rating, Tab, TextField, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import majorImage from "../../assets/major-img.png"
import majorImage1 from "../../assets/major-img1.png"
import dubaiUniLogo from '../../assets/universities-page/universities-section/uni-dubai.jpg';
import floridaUniLogo from '../../assets/universities-page/universities-section/uni-florida.jpg';
import UniversityCard from '../../components/university-sections/universities-section/UniversityCard';

import {
    CustomMajorsTab,
    a11yProps,
} from "../../components/core/CustomMUIComponents";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


export default function Majors() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
    return (
        <>
            <div className="pb-20">
                <Header />

                <div className="pb-10 lg:pb-20 container mx-auto relative mt-32 ">
                    <div className="mt-[112px] grid grid-cols-8 gap-8 mx-[5%] sm:mx-[0%]">
                        <div className="col-span-8  pr-0 lg:col-span-5 lg:pr-16">
                            <div className="font-bold text-2xl sm:text-3xl text-[#000000]">Art/Art Studies, General</div>

                            <div className="font-normal text-base text-[#000000] mt-5">
                                “Art” covers a broad range of topics, from landscape architecture to art education, from fashion design to game and interactive media design. In general, arts majors prepare individuals to succeed as creative artists. The first step in choosing what type of art major to pursue is figuring out where you want to end up. Broad categories include fashion/textiles, graphic design, spatial design, 3D product design, digital/multimedia, photography, fine art, and arranging/display. Majoring in art can also translate to organization and people management, such as becoming an Art Therapist, Private Art Instructor, or Artist Agent. Art degrees are offered at every level, and many can be completed online.
                            </div>

                            <div className="mt-10 flex items-center justify-start flex-wrap gap-8">
                                <div className="flex items-center">
                                    <Rating
                                        name="text-feedback"
                                        value="5"
                                        readOnly
                                        precision={0.5}

                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    <div className="ml-2 text-[#000000]" ><b>5</b> (231)</div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <li className="text-[#000000]">14 Users Enrolled</li>
                                    <li className="text-[#000000]">English</li>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full  h-full left-[0%] bottom-[-5%] translate-x-[-10%]  absolute -z-10 rotate-6">
                        <WaveElement />
                    </div>
                    <div className="w-full  h-full left-[10%] bottom-[70%] translate-x-[-50%] absolute -z-10 -rotate-6">
                        <WaveElement />
                    </div>
                </div>
                <div className="grid grid-cols-8  container mx-auto">
                    <div className='col-span-8 lg:col-span-5 container mx-auto'>

                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
                                scrollButtons={false}
                            > */}

                            <CustomMajorsTab
                                variant="scrollable"
                                scrollButtons={false}
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                setwidth="auto"
                                setjustifycontent="center"
                                className="w-full"
                            >

                                <Tab label="Overview" {...a11yProps(0)} />
                                <Tab label="Univeristies offering this course" {...a11yProps(1)} />
                                <Tab label="Announcements" {...a11yProps(2)} />
                            </CustomMajorsTab>
                            {/* </Tabs> */}
                        </Box>
                    </div>
                </div>
                <div className="grid grid-cols-8 gap-2 container mx-auto">

                    <div className="col-span-8 sm:col-span-4 lg:col-span-5 sm:mt-8">


                        <TabPanel value={value} index={0}>
                            <div className="pb-10 border-b border-[#1C1D1F] border-opacity-25	">
                                <div className='font-bold text-2xl	text-[#000000]'>About this Course</div>
                                <div className='font-normal text-base mt-4	text-[#1C1D1F]'>Hello there! Ed here and welcome to the new tutorial. I am a subscriber of @Pencilmation and I laugh and enjoy their animation. I thought of making a tutorial just like theirs, and here it is! I have another video on the works and hopefully be done on or before Christmas. I've been pushing myself to finish it, but for safety, I made this. I hope you guys are doing great and for the upcoming new year. Cheers! -ed</div>
                            </div>

                            <div className="pb-10 border-b border-[#1C1D1F] border-opacity-25 mt-10	">
                                <div className='font-bold text-2xl	text-[#000000]'>Description</div>
                                <div className='font-normal text-base mt-4	text-[#1C1D1F]'>This course is continually updated in response to student suggestions - it has been completely updated to Blender 2.8 or later.
                                    Blender is a fantastic platform which enables you to make AAA-quality models which can be exported to any game engine, 3D printer, or other software. Here are some of the reasons why you want to learn Blender with this online tutorial...
                                </div>
                                <div className='mt-7 font-normal text-base	text-[#1C1D1F] flex flex-col gap-2'>
                                    <li>Create assets for video games.</li>
                                    <li>Make unique 3D printed gifts.</li>
                                    <li>Design your dream house, car, etc</li>
                                    <li>Express yourself through 3D artwork.</li>
                                </div>
                            </div>

                            <div className='mt-14 '>
                                <div className='font-bold text-2xl	text-[#000000]'>Recently added majors</div>

                                <div className="grid grid-cols-3 border mt-8 sm:w-[200%] lg:w-full">
                                    <div className='col-span-3 sm:col-span-1 major'>
                                        <Image src={majorImage} alt="majorImage" />
                                    </div>
                                    <div className='col-span-3 sm:col-span-2 p-4'>
                                        <div className='font-normal text-[#1C1D1F] text-base'>Adobe Photoshop from scratch for Beginner</div>
                                        <div className='flex items-center mt-3 gap-2 justify-start flex-wrap'>
                                            <p className="text-[#757575] font-normal text-base">Last Update</p>
                                            <p className='text-[#1C1D1F] font-normal text-base'>7 September 2021</p>
                                        </div>
                                        <div className='flex items-center gap-4 mt-3 justify-start flex-wrap'>
                                            <Rating
                                                name="text-feedback"
                                                value="5"
                                                readOnly
                                                precision={0.5}

                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                            <li className='text-[#1C1D1F] font-normal text-base'>14 Univeristy offerings</li>
                                        </div>
                                        <div className="mt-4 lg:mt-7">
                                            <button
                                                type="button"
                                                className="bg-[#0038FF] hover:bg-[#0038FF] text-[#FFFFFF] px-5 py-2 rounded tracking-wide
                                                        font-bold  focus:outline-none focus:shadow-outline 
                                                        shadow-lg flex items-center justify-center w-full sm:w-auto text-sm	leading-[140%]"
                                            >
                                                Enroll Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 border mt-8 sm:w-[200%] lg:w-full" >
                                    <div className='col-span-3 sm:col-span-1 major'>
                                        <Image src={majorImage1} alt="majorImage" />
                                    </div>
                                    <div className='col-span-3 sm:col-span-2 p-4'>
                                        <div className='font-normal text-[#1C1D1F] text-base'>Adobe Photoshop from scratch for Beginner</div>
                                        <div className='flex items-center mt-3 gap-2 justify-start flex-wrap'>
                                            <p className="text-[#757575] font-normal text-base">Last Update</p>
                                            <p className='text-[#1C1D1F] font-normal text-base'>7 September 2021</p>
                                        </div>
                                        <div className='flex items-center gap-4 mt-3 justify-start flex-wrap'>
                                            <Rating
                                                name="text-feedback"
                                                value="5"
                                                readOnly
                                                precision={0.5}

                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                            <li className='text-[#1C1D1F] font-normal text-base'>14 Univeristy offerings</li>
                                        </div>
                                        <div className="mt-4 lg:mt-7">
                                            <button
                                                type="button"
                                                className="bg-[#0038FF] hover:bg-[#0038FF] text-[#FFFFFF] px-5 py-2 rounded tracking-wide
                                                        font-bold  focus:outline-none focus:shadow-outline 
                                                        shadow-lg flex items-center justify-center w-full sm:w-auto text-sm	leading-[140%]"
                                            >
                                                Enroll Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 border mt-8 sm:w-[200%] lg:w-full">
                                    <div className='col-span-3 sm:col-span-1 major'>
                                        <Image src={majorImage1} alt="majorImage" />
                                    </div>
                                    <div className='col-span-3 sm:col-span-2 p-4'>
                                        <div className='font-normal text-[#1C1D1F] text-base'>Adobe Photoshop from scratch for Beginner</div>
                                        <div className='flex items-center mt-3 gap-2 justify-start flex-wrap'>
                                            <p className="text-[#757575] font-normal text-base">Last Update</p>
                                            <p className='text-[#1C1D1F] font-normal text-base'>7 September 2021</p>
                                        </div>
                                        <div className='flex items-center gap-4 mt-3 justify-start flex-wrap'>
                                            <Rating
                                                name="text-feedback"
                                                value="5"
                                                readOnly
                                                precision={0.5}

                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                            <li className='text-[#1C1D1F] font-normal text-base'>14 Univeristy offerings</li>
                                        </div>
                                        <div className="mt-4 lg:mt-7">
                                            <button
                                                type="button"
                                                className="bg-[#0038FF] hover:bg-[#0038FF] text-[#FFFFFF] px-5 py-2 rounded tracking-wide
                                                        font-bold  focus:outline-none focus:shadow-outline 
                                                        shadow-lg flex items-center justify-center w-full sm:w-auto text-sm	leading-[140%]"
                                            >
                                                Enroll Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </TabPanel>

                    </div>

                    <div className="col-span-8 sm:col-span-4 lg:col-span-3 sm:mt-8 p-2 lg:relative lg:top-[-34%]">
                        <TabPanel value={value} index={0} className="border ">



                            <div className='major  '>
                                <Image src={majorImage} alt="majorImage" />
                            </div>
                            <div className='font-bold text-xl text-[#1C1D1F] mt-2 	leading-[140%]' >Design & Development</div>
                            <div className='font-normal line-through text-sm text-[#C2C2C2] mt-2' >Univeristy of Dubai</div>
                            <div className="mt-5 ">
                                <button
                                    type="button"
                                    className="bg-[#0038FF] hover:bg-[#0038FF] text-[#FFFFFF] p-2 w-full rounded tracking-wide
                                                        font-semibold focus:outline-none focus:shadow-outline shadow-lg text-sm leading-[140%]">
                                    Enroll Now
                                </button>
                            </div>
                            <div className='mt-7'>
                                <div className="font-bold text-[#1C1D1F] text-lg 	leading-[140%]">This Course Includes</div>
                                <div className='flex flex-col gap-2 mt-5'>
                                    <Typography className="flex items-center text-[#757575]  font-normal text-base	">
                                        <AccessTimeIcon fontSize="inherit" sx={{ marginRight: 3 }} className="text-[#0038FF]" />
                                        Anytime, Anywhere
                                    </Typography>
                                    <Typography className="flex items-center text-[#757575]  font-normal text-base	">
                                        <FileDownloadOutlinedIcon fontSize="inherit" sx={{ marginRight: 3 }} className="text-[#0038FF]" />
                                        Downloadable Resources
                                    </Typography>
                                    <Typography className="flex items-center text-[#757575]  font-normal text-base	">
                                        <VpnKeyOutlinedIcon fontSize="inherit" sx={{ marginRight: 3 }} className="text-[#0038FF]" />
                                        Full Lifetime Access
                                    </Typography>
                                </div>
                            </div>
                            <div className='mt-8 border-b pb-9'>
                                <div className='font-bold text-[#1C1D1F] text-lg'>Tags</div>
                                <ul className='flex items-center justify-start flex-wrap gap-2 mt-4'>
                                    <li className='text-[#000000] font-normal bg-[#e0e0e0] rounded px-3 py-2 text-sm	leading-[140%]'>
                                        3D
                                    </li>
                                    <li className='text-[#000000] font-normal text-sm	leading-[140%] bg-[#e0e0e0] rounded px-3 py-2'>
                                        3D Modelling
                                    </li>
                                    <li className='text-[#000000] font-normal text-sm	leading-[140%] bg-[#e0e0e0] rounded px-3 py-2'>
                                        Blender App
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="bg-[#FFFFFF] w-full hover:bg-[#FFFFFF] text-[#1C1D1F] border-[#e0e0e0] border  py-2 items-center text-lg rounded font-semibold whitespace-nowrap  ">
                                    Share
                                </button>
                            </div>
                        </TabPanel>
                    </div>


                </div>

                <div className='grid grid-cols-8 gap-2 sm:gap-4 container mx-auto'>
                    <div className="col-span-8 sm:col-span-4 lg:col-span-3 ">
                        <TabPanel value={value} index={1}>
                            <div className='font-semibold text-[#000000] text-xl xl:text-2xl'>Univeristies Offering this Major</div>
                            <div className="p-6 mt-4 bg-[#FFFFFF] rounded border border-[#F0F0F0]">
                                <div className='pb-5 border-b text-[#000000] font-semibold text-2xl'>Search univeristy</div>
                                <div className='mt-4'>

                                    <TextField
                                        id="outlined-search"
                                        label="Search"
                                        type="search"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                    <div className="col-span-8 sm:col-span-4 lg:col-span-5  ">
                        <TabPanel value={value} index={1}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                {universities.map((university) => (
                                    <UniversityCard key={university.id} university={university} />
                                ))}
                            </div>
                        </TabPanel>
                    </div>
                </div>

            </div>
            <NewsletterSection />
            <Footer />
        </>

    )
}