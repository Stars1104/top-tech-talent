import { MapPin } from "lucide-react";
import Image from "next/image";

const FindOffice = () => {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-center py-16 md:py-24 px-4 md:px-12 bg-white">
            <div className="w-full max-w-[1200px] flex justify-between items-center md:flex-row flex-col-reverse">
                {/* Left: Text and Search */}
                <div className="flex flex-col items-start justify-center max-w-xl z-10">
                    <h1 className="text-pink-500 text-3xl sm:text-4xl md:text-5xl font-thin mb-6">
                        Find an office near you
                    </h1>
                    <p className="text-black text-base md:text-lg mb-8">
                        Work with experienced recruiters in your area to<br />
                        find jobs or hire talent.
                    </p>
                    <form className="w-full flex flex-col sm:flex-row items-stretch gap-4 mb-6">
                        <div className="flex items-center bg-[#e6e6e6] rounded-full px-4 py-3 w-full max-w-xs">
                            <MapPin className="text-gray-400 mr-2" size={20} />
                            <input
                                type="text"
                                placeholder="City, State, or Zip Code"
                                className="bg-transparent outline-none w-full text-gray-700 text-base placeholder-gray-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#3d5afe] hover:bg-[#2a3eb1] text-white font-medium px-8 py-3 rounded-full shadow transition-all text-base whitespace-nowrap"
                        >
                            Search
                        </button>
                    </form>
                    <div className="text-black text-base mt-2">
                        Or contact us by phone{' '}
                        <a href="tel:18554320924" className="text-[#00a2d4] underline hover:text-[#008bb9] transition-colors">
                            1.855.432.0924
                        </a>
                    </div>
                </div>
                {/* Right: Image and Shapes */}
                <div className="flex items-center justify-center relative mt-12 md:mt-0 md:ml-8">
                    <Image
                        src="/images/office-finder-banner.png"
                        alt="Person using AR technology"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default FindOffice;