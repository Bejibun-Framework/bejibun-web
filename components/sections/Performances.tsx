"use client";

import {motion} from "framer-motion";
import {NumberTicker} from "../ui/number-ticker";

const performances = [
    {
        render: () => <NumberTicker value={10} prefix="<" suffix="ms" startWhenInView/>,
        label: "Cold start",
        description: "Bun's native runtime and bundler — no JIT warm-up tax."
    },
    {
        render: () => <NumberTicker value={5} suffix="x" startWhenInView/>,
        label: "Faster builds",
        description: "Compared to traditional Node.js runtimes."
    },
    {
        render: () => <NumberTicker value={100} suffix="%" startWhenInView/>,
        label: "TypeScript",
        description: "Native TS execution. No transpile step, no config."
    },
    {
        render: () => <span>High</span>,
        label: "Throughput",
        description: "Concurrent requests with minimal overhead for real-time Web3."
    }
];

export function Performances() {
    return (
        <section id="performance" className="py-[80px] md:py-[112px] border-b border-border bg-surface-dark">
            <div className="max-w-[1150px] mx-auto px-4 md:px-6">
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-12 md:mb-16"
                >
                    <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-brand mb-4">
                        03 — Performance
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-[32px] md:text-[44px] leading-[1.15] tracking-[-0.03em] font-medium max-w-[560px]">
                            Fast where it counts.
                        </h2>
                        <p className="text-[15px] leading-[1.6] text-muted-foreground max-w-[400px]">
                            {process.env.NEXT_PUBLIC_NAME} runs on Bun — ideal for DeFi protocols, NFT marketplaces,
                            and any API where latency is a feature.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border
                    [&>*]:border-border
                    max-sm:[&>*+*]:border-t
                    sm:max-lg:[&>*:nth-child(even)]:border-l sm:max-lg:[&>*:nth-child(even)]:pl-8
                    sm:max-lg:[&>*:nth-child(n+3)]:border-t
                    lg:[&>*+*]:border-l lg:[&>*+*]:pl-8">
                    {performances.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="py-8 md:py-10 sm:pr-8"
                            initial={{opacity: 0, y: 12}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: i * 0.08}}
                        >
                            <div className="font-mono text-[44px] md:text-[52px] leading-none tracking-[-0.03em] text-foreground mb-4">
                                {stat.render()}
                            </div>
                            <p className="text-[15px] font-medium mb-1.5">{stat.label}</p>
                            <p className="text-[13.5px] leading-[1.6] text-muted-foreground">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
