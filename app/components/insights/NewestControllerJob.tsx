import React from "react";

const jobs = [
    {
        location: "Boulder, CO",
        title: "Controller",
        type: "Permanent",
        salary: "$150,000.00 - $165,000.00 / Yearly",
        posted: "1 week ago",
        link: "#",
    },
    {
        location: "Somerset, WI",
        title: "Controller",
        type: "Permanent",
        salary: "$100,000.00 - $150,000.00 / Yearly",
        posted: "3 days ago",
        link: "#",
    },
    {
        location: "Ballston Spa, NY",
        title: "Controller",
        type: "Permanent",
        salary: "$90,000.00 - $110,000.00 / Yearly",
        posted: "1 week ago",
        link: "#",
    },
    {
        location: "Chester, SC",
        title: "Controller",
        type: "Contract / Temporary to Hire",
        salary: "DOE",
        posted: "2 weeks ago",
        link: "#",
    },
];

const NewestControllerJob = () => {
    return (
        <section className="w-full flex flex-col items-center py-10 px-2 md:px-0 bg-white">
            <h2 className="text-2xl md:text-4xl font-thin text-gray-900 mb-4 text-center">Explore exclusive insights</h2>
            <h3 className="text-xl md:text-3xl font-thin text-gray-800 mb-10 text-center">Newest Controller jobs</h3>
            <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                {jobs.map((job, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-100 rounded-2xl shadow-sm p-6 w-full max-w-xs flex flex-col justify-between min-h-[200px]"
                    >
                        <div>
                            <div className="text-sm text-gray-600 mb-1">{job.location}</div>
                            <a href={job.link} className="text-blue-600 text-base font-medium hover:underline mb-2 block">{job.title}</a>
                            <div className="flex items-center text-xs text-gray-700 mb-2">
                                <span className="mr-2">💼</span>
                                {job.type}
                            </div>
                            <div className="flex items-center text-xs text-gray-700 mb-2">
                                <span className="mr-2">💵</span>
                                {job.salary}
                            </div>
                        </div>
                        <div className="text-xs text-right text-gray-400 mt-4">{job.posted}</div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center gap-6 w-full">
                <button className="bg-[#3758F9] hover:bg-blue-700 text-white rounded-2xl px-10 py-8 text-lg font-medium shadow-md transition-all w-full max-w-xs flex flex-col items-center justify-center">
                    Get insights <span className="ml-2">→</span>
                </button>
                <a
                    href="#"
                    className="mt-2 text-blue-600 border border-blue-600 rounded-full px-6 py-2 text-base hover:bg-blue-50 transition-all text-center"
                >
                    Search all jobs
                </a>
            </div>
        </section>
    );
};

export default NewestControllerJob;
