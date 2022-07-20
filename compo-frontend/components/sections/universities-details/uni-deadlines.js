export default function ImportantDeadlines() {
    return (
        <>
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
        </>
    )
}