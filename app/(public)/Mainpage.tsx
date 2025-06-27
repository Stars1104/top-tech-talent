import AccoladesSection from "../components/main/AccoladesSection";
import BusinessImpact from "../components/main/BusinessImpact";
import Career from "../components/main/Career";
import Explore from "../components/main/Explore";
import FindYourNextHire from "../components/main/FindYourNextHire";
import Hero from "../components/main/Hero";
import HRSection from "../components/main/HRsection";
import Organization from "../components/main/Organization";

const MainPage = () => {
    return (
        <>
            <Hero />
            <HRSection />
            <FindYourNextHire />
            <BusinessImpact />
            <Career />
            <Organization />
            <Explore />
            <AccoladesSection />
        </>
    )
}

export default MainPage;