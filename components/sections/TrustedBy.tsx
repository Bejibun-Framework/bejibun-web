"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {ArrowUpRight} from "lucide-react";

export function TrustedBy() {
    return (
        <section className="py-[64px] md:py-[88px] border-b border-border">
            <div className="max-w-[1150px] mx-auto px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{opacity: 0, y: 16}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                >
                    <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-faint mb-6">
                        Trusted by
                    </p>

                    <a
                        href="https://www.jejeharapan.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Jeje Harapan Transindo — visit website"
                        className="group relative w-full max-w-[520px] overflow-hidden rounded-xl border border-border
                            bg-surface px-6 py-7 md:px-8 md:py-8 text-left
                            transition-all duration-300 hover:border-brand/40 hover:shadow-[0_8px_40px_-12px_rgba(255,108,2,0.25)]"
                    >
                        {/* subtle brand glow on hover */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full
                                bg-brand/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />

                        <div className="relative flex items-center gap-5">
                            <div className="flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center
                                rounded-lg border border-border bg-surface-dark">
                                <Image
                                    src="/company-jeje.png"
                                    alt="Jeje Harapan Transindo"
                                    width={72}
                                    height={72}
                                    className="h-12 md:h-14 w-auto object-contain"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full
                                    border border-success/30 bg-success/10 px-2.5 py-0.5
                                    font-mono text-[10px] uppercase tracking-[0.1em] text-success">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"/>
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success"/>
                                    </span>
                                    Trusted partner
                                </div>
                                <h3 className="text-[17px] md:text-[18px] font-medium leading-tight">
                                    Jeje Harapan Transindo
                                </h3>
                                <p className="mt-0.5 text-[13px] leading-[1.5] text-muted-foreground">
                                    Building their infrastructure with {process.env.NEXT_PUBLIC_NAME}.
                                </p>
                            </div>

                            <ArrowUpRight
                                className="hidden sm:block h-5 w-5 shrink-0 text-faint
                                    transition-all duration-300 group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}