"use client";

import {Navigation} from "@/components/ui/Navigations";
import {Hero} from "@/components/sections/Hero";
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
            <Navigation/>
            <main>
                <Hero/>
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