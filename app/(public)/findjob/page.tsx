'use client'
import JobCareer from "@/app/components/findjob/Career";
import EasyWay from "@/app/components/findjob/Easyway";
import FindJobHero from "@/app/components/findjob/FindJobHero";
import NextCareerMove from "@/app/components/findjob/NextCareerMove";
import NextJob from "@/app/components/findjob/NextJob";
import Footer from "@/app/components/Footer";
import HireTalent from "@/app/components/hiring/HireTalent";
import TalentInsight from "@/app/components/hiring/TalentInsight";
import Navbar from "@/app/components/navbar";

const FindJob = () => {
    return (
        <>
            <Navbar bgColor="bg-[#3758F9]" />
            <FindJobHero/>
            <NextJob/>
            <JobCareer/>
            <NextCareerMove/>
            <HireTalent/>
            <EasyWay/>
            <TalentInsight/>
            <Footer />
        </>
    )
}

export default FindJob;