"use client";

import {motion} from "framer-motion";
import {ArrowRight, Github} from "lucide-react";
import {CopyButton} from "@/components/ui/code-block";

const INSTALL_COMMAND = "bunx @bejibun/cli your-project";

const TERMINAL_LINES = [
    {text: "$ bunx @bejibun/cli your-project", className: "text-code-fg"},
    {text: "✔ Pulling starter kit.", className: "text-success"},
    {text: "✔ Installing dependencies.", className: "text-success"},
    {text: "✔ Setup environment.", className: "text-success"},
    {text: "ℹ Update 1 file: .env", className: "text-code-muted"},
    {text: "Success! Project initialization completed.", className: "text-code-fg"},
    {text: "", className: ""},
    {text: "$ bun dev", className: "text-code-fg"},
    {text: "🚀 Server running at http://localhost:3000", className: "text-brand-highlight"}
];

const PILLARS = [
    {
        index: "01",
        title: "Built for Web3 builders",
        description: "x402 payments shipped, wallet/RPC/contract SDK on the way. Designed for dApp backends from day one."
    },
    {
        index: "02",
        title: "Laravel developer experience",
        description: "Controllers, models, migrations, validators, and an ace CLI. Every pattern you already know — in TypeScript."
    },
    {
        index: "03",
        title: "Fast by default",
        description: "Bun runtime under everything: <10ms cold starts, 5x faster builds, built for high-throughput APIs."
    }
];

function TerminalDemo() {
    return (
        <div className="bg-code-bg border border-code-border rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(0,0,0,0.12)] text-left">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-code-border">
                <span className="font-mono text-[12px] text-code-muted">terminal</span>
                <CopyButton text={INSTALL_COMMAND}/>
            </div>
            <div className="p-5 font-mono text-[13px] md:text-[14px] leading-[1.9]">
                {TERMINAL_LINES.map((line, i) => (
                    <motion.div
                        key={i}
                        className={line.className}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.2, delay: 0.4 + i * 0.18}}
                    >
                        {line.text || " "}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section id="hero" className="relative pt-[140px] md:pt-[170px] border-b border-border">
            <div className="max-w-[1150px] mx-auto px-4 md:px-6">
                <motion.div
                    className="max-w-[820px] mx-auto text-center"
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    {/* Eyebrow */}
                    <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-muted-foreground mb-6">
                        <span className="text-brand">●</span> Bun-native TypeScript framework · MIT
                    </p>

                    {/* Headline */}
                    <h1 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.04em] font-medium mb-6">
                        <span className="text-brand">Web3 backends</span>,
                        <br/>
                        at Bun speed.
                    </h1>

                    <p className="text-[16px] md:text-[18px] leading-[1.6] text-muted-foreground max-w-[560px] mx-auto mb-10">
                        Bejibun brings Laravel-grade DX to blockchain builders —
                        familiar patterns, instant cold starts, dApp-ready out of the box.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
                        <a
                            href="https://docs.bejibun.com"
                            target="_blank"
                            rel="noreferrer"
                            className="h-[44px] inline-flex items-center gap-2 px-6 rounded-full bg-brand hover:bg-brand-highlight text-[14px] font-medium text-primary-foreground transition-colors shadow-[0_2px_12px_rgba(255,109,5,0.25)]"
                        >
                            Get Started
                            <ArrowRight className="size-4"/>
                        </a>
                        <a
                            href="https://github.com/Bejibun-Framework/bejibun"
                            target="_blank"
                            rel="noreferrer"
                            className="h-[44px] inline-flex items-center gap-2 px-6 rounded-full bg-shade hover:bg-shade-hover border border-border-solid text-[14px] font-medium text-dim transition-colors"
                        >
                            <Github className="size-4"/>
                            Star on GitHub
                        </a>
                    </div>

                    {/* Install one-liner */}
                    <div className="inline-flex items-center gap-3 bg-surface border border-border rounded-lg pl-4 pr-3 py-2.5 mb-16">
                        <code className="font-mono text-[13px] md:text-[14px] text-dim">
                            <span className="text-faint">$ </span>{INSTALL_COMMAND}
                        </code>
                        <span className="[&_button]:text-faint [&_button:hover]:text-foreground flex items-center">
                            <CopyButton text={INSTALL_COMMAND}/>
                        </span>
                    </div>
                </motion.div>

                {/* Terminal demo */}
                <motion.div
                    className="max-w-[720px] mx-auto"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.15}}
                >
                    <TerminalDemo/>
                </motion.div>

                {/* Pillars strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 mt-16 md:mt-20 border-t border-border">
                    {PILLARS.map((pillar, i) => (
                        <motion.div
                            key={pillar.index}
                            className={`py-8 md:py-10 md:px-8 ${i > 0 ? "border-t md:border-t-0 md:border-l border-border" : ""} ${i === 0 ? "md:pl-0" : ""} ${i === 2 ? "md:pr-0" : ""}`}
                            initial={{opacity: 0, y: 12}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: i * 0.1}}
                        >
                            <p className="font-mono text-[12px] text-brand mb-3">{pillar.index}</p>
                            <h3 className="text-[17px] font-medium tracking-[-0.02em] mb-2">{pillar.title}</h3>
                            <p className="text-[14px] leading-[1.6] text-muted-foreground">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
