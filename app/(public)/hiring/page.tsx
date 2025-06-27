"use client";
import Footer from "@/app/components/Footer";
import BookConsultion from "@/app/components/hiring/BookConsultion";
import ConsultingExpertise from "@/app/components/hiring/Expertise";
import ExporeTalent from "@/app/components/hiring/ExporeTalet";
import FindOffice from "@/app/components/hiring/FindOffice";
import HiringHero from "@/app/components/hiring/Hero";
import HireTalent from "@/app/components/hiring/HireTalent";
import TalentInsight from "@/app/components/hiring/TalentInsight";
import Organization from "@/app/components/main/Organization";
import Navbar from "@/app/components/navbar";

const HiringPage = () => {
    return (
        <>
            <Navbar />
            <HiringHero />
            <ExporeTalent />
            <FindOffice />
            <BookConsultion />
            <Organization />
            <ConsultingExpertise />
            <HireTalent />
            <TalentInsight />
            <Footer />
        </>
    )
}

export default HiringPage;