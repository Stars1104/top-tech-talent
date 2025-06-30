'use client'
import AreasExpertise from "@/app/components/consulting/Areas";
import ConsultingHero from "@/app/components/consulting/Hero";
import Scalable from "@/app/components/consulting/Scalable";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/navbar";
import BusinessChallengeForm from "@/app/components/consulting/businessChallenge";
import Strategy from "@/app/components/consulting/Strategy";

const ConsultingSolutions = () => {
    return (
        <>
            <Navbar bgColor="bg-[#3758F9]" />
            <ConsultingHero />
            <Scalable />
            <AreasExpertise />
            <BusinessChallengeForm />
            <Strategy />
            <Footer />
        </>
    )
}

export default ConsultingSolutions;