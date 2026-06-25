"use client";

import {DonateBanner} from "@/components/ui/DonateBanner";
import {Navigation} from "@/components/ui/Navigations";
import {Hero, HeroPillars} from "@/components/sections/Hero";
// import {TrustedBy} from "@/components/sections/TrustedBy";
import {TrustedBySmall} from "@/components/sections/TrustedBySmall";
import {DeveloperExperiences} from "@/components/sections/DeveloperExperiences";
import {Performances} from "@/components/sections/Performances";
import {Web3} from "@/components/sections/Web3";
import {Quickstart} from "@/components/sections/Quickstart";
import {Roadmap} from "@/components/sections/Roadmap";
import {CallToAction} from "@/components/sections/CallToAction";
import {Footer} from "@/components/sections/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-clip">
            <header className="fixed top-0 inset-x-0 z-50">
                <DonateBanner/>
                <Navigation/>
            </header>
            <main>
                <Hero/>
                {/*<TrustedBy/>*/}
                <TrustedBySmall/>
                <HeroPillars/>
                <Web3/>
                <DeveloperExperiences/>
                <Performances/>
                <Quickstart/>
                <Roadmap/>
                <CallToAction/>
            </main>
            <Footer/>
        </div>
    );
}