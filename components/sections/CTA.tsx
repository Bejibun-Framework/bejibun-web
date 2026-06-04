"use client";

import {motion} from "framer-motion";
import {ArrowRight, Github} from "lucide-react";
import {CopyButton} from "@/components/ui/code-block";

const INSTALL_COMMAND = "bunx @bejibun/cli your-project";

export function CTA() {
    return (
        <section className="py-[80px] md:py-[128px] border-b border-border">
            <div className="max-w-[1150px] mx-auto px-4 md:px-6">
                <motion.div
                    className="max-w-[640px] mx-auto text-center"
                    initial={{opacity: 0, y: 16}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="text-[36px] md:text-[48px] leading-[1.15] tracking-[-0.03em] font-medium mb-5">
                        Ship your next backend
                        <br/>
                        on <span className="text-brand">Bun</span>.
                    </h2>
                    <p className="text-[16px] md:text-[17px] leading-[1.6] text-muted-foreground mb-10">
                        Laravel patterns you trust, performance your users feel,
                        and Web3 capabilities your roadmap needs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
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
                            GitHub
                        </a>
                    </div>

                    <div className="inline-flex items-center gap-3 bg-surface border border-border rounded-lg pl-4 pr-3 py-2.5">
                        <code className="font-mono text-[13px] md:text-[14px] text-dim">
                            <span className="text-faint">$ </span>{INSTALL_COMMAND}
                        </code>
                        <span className="[&_button]:text-faint [&_button:hover]:text-foreground">
                            <CopyButton text={INSTALL_COMMAND}/>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
