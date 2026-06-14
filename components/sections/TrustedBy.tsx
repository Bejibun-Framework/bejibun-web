"use client";

import Image from "next/image";
import {motion} from "framer-motion";

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
                    <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-faint mb-8">
                        Trusted in production by
                    </p>

                    <a
                        href="https://www.jejeharapan.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Jeje Harapan Transindo"
                        className="inline-flex hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/company-jeje.png"
                            alt="Jeje Harapan Transindo"
                            width={72}
                            height={72}
                            className="h-16 md:h-20 w-auto object-contain"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
