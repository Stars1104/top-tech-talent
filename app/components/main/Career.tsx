import { Check } from "lucide-react";
import Image from "next/image";

const Career = () => {
    return (
        <section className="w-full lg:h-[800px] h-[1000px] lg:px-0 px-4 py-8 lg:py-16 mx-auto lg:mt-0 mt-16 flex flex-col items-center relative z-10 bg-[#ffc4f8]">
            <div className="w-full max-w-[1600px] h-full relative flex lg:flex-row justify-center flex-col-reverse lg:gap-0 gap-12">
                <div className='lgw-1/2 w-full flex justify-center items-center'>
                    <Image src="/images/mtc-banner.png" alt="MTC-Banner" width={500} height={500} />
                </div>
                <div className="lgw-1/2 w-full flex flex-col justify-center items-center">
                    <h2 className="text-4xl sm:text-4xl lg:text-6xl font-thin lg:mb-20 mb-6 mt-4 text-pink-500 lg:px-0 px-4 lg:text-start text-center">Make the carrer move you want</h2>
                    <div className="w-full flex flex-col lg:gap-8 gap-4">
                        <div className="w-full flex justify-start items-center lg:gap-14 gap-4">
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-black lg:text-2xl text-lg text-center">Get instant job recommendations tailored to your skills and goals</span>
                        </div>
                        <div className="w-full flex justify-start items-center lg:gap-14 gap-4">
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-black lg:text-2xl text-lg text-center">Gain exposure to a range of companies and job types: fully remote, hybrid or on-site, and contract or permanent</span>
                        </div>
                        <div className="w-full flex justify-start items-center lg:gap-0 gap-4">
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-black lg:text-2xl text-lg text-center">Access competitive pay, benefits, and free online training and development</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Career;