import Layout from "@/components/layout";
import AboutHero from "@/components/sections/about/about-hero";

import ConfidenceSection from "@/components/sections/about/confidence-section";
import InnovationSection from "@/components/sections/about/innovation-section";
import JourneySection from "@/components/sections/about/journey-section";

import TeamGrid from "@/components/sections/about/team-grid";

import JoinJourney from "@/components/sections/about/join-journey";

const About = () => {
    return (
        <Layout>
            <AboutHero />

            <ConfidenceSection />
            <InnovationSection />
            <JourneySection />

            <TeamGrid />

            <JoinJourney />
        </Layout>
    );
};

export default About;