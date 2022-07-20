

import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";

import Gallery1 from "../../../assets/gallery1.png";
import Gallery2 from "../../../assets/gallery2.png";
import Gallery3 from "../../../assets/gallery3.png";


export default function UniOverview() {

    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1240: {
            items: 4,
        },
    };


    const items = [Gallery1, Gallery2, Gallery3, Gallery3].map((img) => {

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
        </>
    )
}