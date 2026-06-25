"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {ExternalLink} from "lucide-react";

type Company = {
    name: string;
    logo: string;
    href: string;
    description?: string;
    invert?: boolean;
};

const companies: Array<Company> = [
    {
        name: "Jeje Harapan Transindo",
        logo: "/companies/jeje-harapan-transindo.png",
        href: "https://www.jejeharapan.com",
        description: "Transportation & Logistics"
    }
];

const cardVariants = {
    hidden: {opacity: 0, y: 16},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.5, ease: [0.19, 1, 0.22, 1]}
    }
};

function CompanyCard({company}: { company: Company }) {
    return (
        <motion.a
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.1}}
            href={company.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${company.name} — visit website`}
            className="group relative flex flex-col gap-4 p-6 bg-surface border border-border rounded-xl hover:border-border-solid hover:shadow-sm transition-all duration-300 w-64"
        >
            {/* Logo */}
            <div className="flex items-center justify-center w-full">
                <Image
                    src={company.logo}
                    alt={company.name}
                    width={64}
                    height={64}
                    className={`object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${company.invert ? "invert" : ""}`}
                />
            </div>

            {/* Info */}
            <div className="border-t border-border pt-4 flex items-start justify-between gap-2">
                <div>
                    <p className="text-sm font-medium text-foreground leading-snug">{company.name}</p>
                    {company.description && (
                        <p className="text-xs text-faint mt-0.5">{company.description}</p>
                    )}
                </div>
                <ExternalLink
                    size={14}
                    className="shrink-0 mt-0.5 text-faint opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
            </div>
        </motion.a>
    );
}

export function TrustedBySmall() {
    return (
        <section className="border-b border-border">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.1}}
                >
                    <div className="text-center mb-12">
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand mb-3">
                            Trusted by
                        </p>
                        <h2 className="text-2xl md:text-3xl text-foreground mb-2">
                            Built for teams that move fast
                        </h2>
                        <p className="text-[13.5px] text-muted-foreground">
                            From startups to scale-ups, teams use bejibun to ship products with confidence
                        </p>
                    </div>
                </motion.div>

                {/* Cards — centered, wraps naturally as clients grow */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-60px"}}
                    transition={{staggerChildren: 0.1}}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {companies.map((company) => (
                        <CompanyCard key={company.name} company={company}/>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}