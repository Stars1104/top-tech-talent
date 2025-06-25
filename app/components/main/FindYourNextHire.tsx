import { Check, Ticket } from "lucide-react";
import Image from "next/image";

const FindYourNextHire = () => {
    return (
        <div className="w-full min-h-[1087px] flex flex-col bg-no-repeat bg-[95%_center] lg:bg-center bg-cover relative md:justify-start items-center justify-start px-2 sm:px-4" style={{ backgroundImage: "url('/images/find-your-next-hire-bg.png')" }}>
            <Image src="/images/fynh-b.png" alt="Fyng-b" width={800} height={800} className="absolute bottom-4 w-[23%] right-36 lg:block hidden" />

            <div className="w-full max-w-[1600px] h-full items-start justify-center flex lg:flex-row flex-col">
                <div className="lg:w-1/2 w-full flex justify-start items-start lg:h-full lg:pt-64 py-8">
                    <Image src="/images/fynh-banner.png" alt="banner" width={550} height={550} />
                </div>
                <div className="lg:w-1/2 w-full lg:h-full lg:pt-44 pt-8 flex flex-col justify-start items-center">
                    <h2 className="text-4xl lg:text-6xl font-thin text-center lg:mb-12 mb-6 mt-4 text-pink-500 lg:px-0 px-4">Find Your Next Hire</h2>
                    <div className="w-full flex flex-col justify-center items-center gap-24">
                        <div className="w-full flex justify-start items-center gap-8">
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-white text-2xl text-center">Preview recruiter-assessed and AI-matched candidates</span>
                        </div>
                        <div className="w-full flex justify-start items-center gap-4">
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-white text-2xl text-center">Book a consultation with one of  our recruiters to discuss your hiring needs</span>
                        </div>
                        <div className="w-full flex justify-start items-center gap-8">
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-white text-2xl text-center">Get dedicated expert support at every step of the way</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindYourNextHire;