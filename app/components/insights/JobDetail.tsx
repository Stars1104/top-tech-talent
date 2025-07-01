import React from "react";

const JobDetail = () => {
    return (
        <section className="w-full min-h-[480px] mt-24 flex flex-col items-center justify-start bg-white py-10 px-4 md:px-0 relative">
            <div className="max-w-5xl w-full">
                <h1 className="text-3xl md:text-4xl font-thin mb-6 text-gray-900">Controller</h1>
                <h2 className="text-xl md:text-2xl font-thin mb-4 text-gray-800">Controller Job Description</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Controllers must possess solid communication, technology, analytical and management skills. Candidates should possess knowledge of all aspects of GAAP. Public companies also require knowledge of SEC regulations and provisions of the Sarbanes-Oxley Act. The role usually requires at least seven years of relevant experience and a bachelor's degree in accounting or finance. Many organizations prefer candidates who have an MBA or professional certification such as the CPA, CGMA or CMA. Experience in public accounting is highly valued.
                </p>
                <h3 className="text-lg md:text-xl font-thin mb-3 text-gray-800">Typical controller duties<span className="font-normal">:</span></h3>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                    <li>Overseeing the organization's daily accounting functions accounting functions</li>
                    <li>Managing the accounting, payroll, accounts payable and accounts receivable departments</li>
                    <li>Working with executive team to guide the organization's financial decisions</li>
                    <li>Communicating regularly with (and often reporting to) the CFO</li>
                    <li>Coordinating and preparing internal and external financial statements</li>
                    <li>Coordinating activities of external auditors</li>
                    <li>Managing the budget process</li>
                    <li>Assessing current accounting operations, offering recommendations for improvement and implementing new processes</li>
                    <li>Developing and monitoring financial performance metrics</li>
                    <li>Overseeing regulatory reporting, frequently including tax planning and compliance</li>
                    <li>Hiring, training and retaining accounting staff</li>
                </ul>
                <div className="mb-2 text-gray-900 text-base md:text-lg font-thin">Looking for a controller or a controller job?</div>
                <div className="text-gray-700 mb-2">
                    <a href="#" className="text-blue-600 underline hover:text-blue-800">Submit your resume</a> or <a href="#" className="text-blue-600 underline hover:text-blue-800">request talent now</a> and our expert recruiters will be with you shortly.
                </div>
                <div className="text-gray-700">
                    Robert Half can help you with your <a href="#" className="text-blue-600 underline hover:text-blue-800">controller staffing</a> needs.
                </div>
            </div>
        </section>
    )
}

export default JobDetail;