'use client';
import Footer from "@/app/components/Footer";
import HireTalent from "@/app/components/hiring/HireTalent";
import NewestControllerJob from "@/app/components/insights/NewestControllerJob";
import JobDetail from "@/app/components/insights/JobDetail";
import Navbar from "@/app/components/navbar";
import WeHiring from "@/app/components/insights/WeHiring";

const Insights = () => {
    return (
        <>
            <Navbar bgColor="bg-[#3758F9]" />
            <JobDetail />
            <HireTalent title="Explore exclusive insights" />
            <NewestControllerJob />
            <WeHiring />
            <Footer />
        </>
    )
}

export default Insights;