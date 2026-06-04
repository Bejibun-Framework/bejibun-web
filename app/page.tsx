"use client";

import {Navigation} from "@/components/ui/Navigations";
import {Hero} from "@/components/sections/Hero";
import {KeyFeatures} from "@/components/sections/KeyFeatures";
import {Stats} from "@/components/sections/Stats";
import {BlockchainReadiness} from "@/components/sections/BlockchainReadiness";
import {Quickstart} from "@/components/sections/Quickstart";
import {Roadmap} from "@/components/sections/Roadmap";
import {CTA} from "@/components/sections/CTA";
import {Footer} from "@/components/sections/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-clip">
            <Navigation/>
            <main>
                <Hero/>
                <BlockchainReadiness/>
                <KeyFeatures/>
                <Stats/>
                <Quickstart/>
                <Roadmap/>
                <CTA/>
            </main>
            <Footer/>
        </div>
    );
}
