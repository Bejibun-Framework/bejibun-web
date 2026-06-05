"use client";

import {motion} from "framer-motion";

type RoadmapItem = {label: string; done?: boolean; href?: string};

const QUARTERS: Array<{
    title: string;
    status: "done" | "partial" | "planned";
    summary: string;
    items: RoadmapItem[];
}> = [
    {
        title: "Q4 2025",
        status: "done",
        summary: "Framework foundation & core infrastructure.",
        items: [
            {label: "Installation CLI", done: true},
            {label: "Core framework", done: true},
            {label: "Command", done: true},
            {label: "Router", done: true},
            {label: "Rate limiter", done: true},
            {label: "@bejibun/cors", done: true, href: "https://github.com/Bejibun-Framework/bejibun-cors"},
            {label: "@bejibun/redis", done: true, href: "https://github.com/Bejibun-Framework/bejibun-redis"},
            {label: "@bejibun/cache", done: true, href: "https://github.com/Bejibun-Framework/bejibun-cache"},
            {label: "@bejibun/x402", done: true, href: "https://github.com/Bejibun-Framework/bejibun-x402"},
            {label: "Storage: Local", done: true},
            {label: "CoinGecko listing", done: true, href: "https://www.coingecko.com/en/coins/bejibun"}
        ]
    },
    {
        title: "Q1 2026",
        status: "done",
        summary: "Platform growth & essential services.",
        items: [
            {label: "Website Phase 1", done: true},
            {label: "Storage: S3", done: true},
            {label: "Queue: Job dispatch", done: true},
            {label: "Queue: Worker", done: true}
        ]
    },
    {
        title: "Q2 2026",
        status: "partial",
        summary: "Scalability, scheduling & storage expansion.",
        items: [
            {label: "Scheduler / cron", done: true},
            {label: "Route list (Swagger)", done: true},
            {label: "WebSocket", done: true},
            {label: "Unit test", done: true},
            {label: "Website Phase 2", done: true},
            {label: "HTTP client"},
            {label: "Database transaction"},
            {label: "Cache: Memcached"},
            {label: "Storage: Disk management"},
            {label: "Storage: Archive"},
            {label: "Storage: Cross disks"}
        ]
    },
    {
        title: "Q3 2026",
        status: "planned",
        summary: "Testing, real-time features & database expansion.",
        items: [
            {label: "MySQL support"},
            {label: "MongoDB support"},
            {label: "Model relations"},
            {label: "CoinMarketCap listing"}
        ]
    },
    {
        title: "Q4 2026",
        status: "planned",
        summary: "Performance optimization & ecosystem maturity.",
        items: [
            {label: "Mail service"},
            {label: "Own ORM (Bun SQL)"},
            {label: "Authentication"},
            {label: "SEO"},
            {label: "Token utility"},
            {label: "CEX listing"}
        ]
    }
];

const STATUS_META = {
    done: {label: "Shipped", className: "text-success"},
    partial: {label: "In progress", className: "text-warning"},
    planned: {label: "Planned", className: "text-faint"}
} as const;

export function Roadmap() {
    return (
        <section id="roadmap" className="py-[80px] md:py-[112px] border-b border-border">
            <div className="max-w-[1150px] mx-auto px-4 md:px-6">
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-12 md:mb-16"
                >
                    <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-brand mb-4">
                        Roadmap
                    </p>
                    <h2 className="text-[32px] md:text-[44px] leading-[1.15] tracking-[-0.03em] font-medium">
                        Where {process.env.NEXT_PUBLIC_NAME} is heading.
                    </h2>
                </motion.div>

                <div className="flex flex-col">
                    {QUARTERS.map((quarter, i) => {
                        const status = STATUS_META[quarter.status];

                        return (
                            <motion.div
                                key={quarter.title}
                                className={`grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8 py-8 ${i > 0 ? "border-t border-border" : ""}`}
                                initial={{opacity: 0, y: 12}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5}}
                            >
                                <div>
                                    <h3 className="font-mono text-[18px] tracking-[-0.02em] mb-1">{quarter.title}</h3>
                                    <p className={`font-mono text-[12px] uppercase tracking-[0.08em] ${status.className}`}>
                                        {status.label}
                                    </p>
                                    <p className="text-[13.5px] text-muted-foreground mt-2 max-w-[200px]">
                                        {quarter.summary}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 content-start">
                                    {quarter.items.map((item) => {
                                        const chip = (
                                            <span
                                                className={`inline-flex items-center gap-1.5 text-[13px] rounded-full border px-3 py-1.5 transition-colors ${
                                                    item.done
                                                        ? "border-border bg-surface text-dim"
                                                        : "border-border bg-transparent text-faint"
                                                } ${item.href ? "hover:border-brand hover:text-brand cursor-pointer" : ""}`}
                                            >
                                                <span className={`size-[5px] rounded-full ${item.done ? "bg-success" : "bg-elevated"}`}/>
                                                {item.label}
                                            </span>
                                        );

                                        return item.href ? (
                                            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                                                {chip}
                                            </a>
                                        ) : (
                                            <span key={item.label}>{chip}</span>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
