"use client";
import Footer from "@/app/components/Footer";
import BookConsultion from "@/app/components/hiring/BookConsultion";
import ConsultingExpertise from "@/app/components/hiring/Expertise";
import ExporeTalent from "@/app/components/hiring/ExporeTalet";
import FindOffice from "@/app/components/hiring/FindOffice";
import HiringHero from "@/app/components/hiring/Hero";
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
            <Footer />
        </>
    )
}

export default HiringPage;