import React from "react";

const testimonials = [
    {
        text: "Anyone searching knows how hard it is to find a position that aligns with your goals. They connected me with the perfect job.",
        author: "Sales assistant",
    },
    {
        text: "Robert Half was able to get the person we needed to do the project in less than a week.",
        author: "Billing analyst",
    },
];

const Explore = () => {
    return (
        <div className="w-full min-h-[800px] flex flex-col relative md:justify-center items-center justify-start px-2 sm:px-4 py-8">
            <div className="w-full max-w-[1600px] flex flex-col gap-8 justify-center items-center">
                <h2 className="text-pink-500 text-4xl md:text-5xl font-light text-center mb-12 mt-4">Explore testimonials</h2>
                <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center mb-10">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-[#d3d9fd] rounded-[100px] px-8 py-4 flex-1 min-w-[280px] max-w-3xl flex items-center shadow-sm"
                            style={{ minHeight: 220 }}
                        >
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-800 text-base md:text-xl mb-2">"{t.text}"</p>
                                <p className="text-gray-700 text-sm md:text-lg mt-2">- {t.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-4 mt-2">
                    <span className="w-5 h-5 rounded-full bg-pink-500 inline-block cursor-pointer"></span>
                    <span className="w-5 h-5 rounded-full bg-pink-200 inline-block cursor-pointer"></span>
                </div>
            </div>
        </div>
    );
};

export default Explore;