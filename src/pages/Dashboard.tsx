

export const Dashboard = () => {
    return (
        <div className="bg-purple-50 flex flex-col items-center w-full min-h-screen">
            <div className="flex flex-wrap justify-center items-center w-full max-w-7xl px-4 sm:px-6 py-12 lg:flex-nowrap">
                <div className="flex flex-col w-full lg:w-1/2 gap-4 text-center lg:text-left">
                    <h4 className="text-lg sm:text-xl md:text-2xl text-black font-semibold">20+ years of experience</h4>
                    <h1 className="text-purple-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Compassionate Care for Every Stage of Womanhood
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                        Your health and well-being are our top priorities. We provide compassionate and comprehensive gynecological care for women of all ages.
                    </p>
                    <div className="bg-purple-950 p-3 rounded-md text-white w-40 mt-5 flex items-center justify-center cursor-pointer hover:opacity-85">
                        <button className="text-sm sm:text-base md:text-lg">Learn More</button>
                    </div>
                </div>
                <div className="flex w-full lg:w-[550px] justify-center lg:justify-end mt-9">
                    <img src="https://i.pinimg.com/736x/ba/a0/0d/baa00d44eafbd51609a1d6f61a8faa25.jpg" alt="" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl" />
                </div>
            </div>
            
        </div>
    );
};
