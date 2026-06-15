"use client";

import Image from "next/image";
import type {CSSProperties} from "react";

type Company = {
    name: string;
    logo: string;
    href: string;
    invert?: boolean; // for dark logos that need inverting on the dark background
};

const companies: Company[] = [
    {
        name: "Jeje Harapan Transindo",
        logo: "/company-jeje.png",
        href: "https://www.jejeharapan.com/",
    },
    {
        name: "Sakar Jenius Logistik",
        logo: "/sakar.png",
        href: "#",
    },
];

function CompanyLogo({company}: {company: Company}) {
    return (
        <a
            href={company.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${company.name} — visit website`}
            title={company.name}
            className="group flex shrink-0 items-center justify-center
                px-8 md:px-12 h-[120px] md:h-[150px]
                border-r border-border"
        >
            <Image
                src={company.logo}
                alt={company.name}
                width={320}
                height={120}
                className={`h-16 md:h-20 w-auto object-contain
                    opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105
                    ${company.invert ? "invert" : ""}`}
            />
        </a>
    );
}

export function TrustedBy() {
    // Repeat to fill the row, then duplicate that set so the marquee (-50%) loops seamlessly.
    const base = Array.from({length: Math.max(6, companies.length)}, (_, i) => companies[i % companies.length]);
    const track = [...base, ...base];

    return (
        <section className="border-y border-border">
            <div className="relative flex">
                {/* Label cell */}
                <div className="hidden md:flex shrink-0 w-[260px] lg:w-[300px] items-center
                    px-8 lg:px-10 h-[150px] border-r border-border">
                    <p className="font-mono text-[12px] uppercase tracking-[0.14em] leading-[1.7] text-faint">
                        Powering teams that
                        <br/>
                        ship at full speed
                    </p>
                </div>

                {/* Logos marquee */}
                <div
                    className="marquee-pause relative flex-1 overflow-hidden
                        [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]
                        [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
                >
                    <div
                        className="animate-marquee flex w-max"
                        style={{"--marquee-duration": "30s"} as CSSProperties}
                    >
                        {track.map((company, i) => (
                            <CompanyLogo key={`${company.name}-${i}`} company={company}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
