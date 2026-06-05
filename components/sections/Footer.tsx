"use client";

import Image from "next/image";

const LINK_GROUPS = [
    {
        title: "Framework",
        links: [
            {label: "Documentation", href: "https://docs.bejibun.com"},
            {label: "GitHub", href: "https://github.com/Bejibun-Framework/bejibun"},
            {label: "Releases", href: "https://github.com/Bejibun-Framework/bejibun/releases"}
        ]
    },
    {
        title: "Ecosystem",
        links: [
            {label: "@bejibun/x402", href: "https://github.com/Bejibun-Framework/bejibun-x402"},
            {label: "@bejibun/redis", href: "https://github.com/Bejibun-Framework/bejibun-redis"},
            {label: "@bejibun/cache", href: "https://github.com/Bejibun-Framework/bejibun-cache"},
            {label: "@bejibun/cors", href: "https://github.com/Bejibun-Framework/bejibun-cors"}
        ]
    },
    {
        title: "Community",
        links: [
            {label: "X / Twitter", href: "https://x.com/bjbnframework"},
            {label: "Telegram", href: "https://t.me/BejibunPortal"},
            {label: "$BJBN on CoinGecko", href: "https://www.coingecko.com/en/coins/bejibun"}
        ]
    }
];

export function Footer() {
    return (
        <footer className="py-16 md:py-20">
            <div className="max-w-[1150px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12">
                    <div className="max-w-[280px]">
                        <div className="flex items-center gap-2.5 mb-3">
                            <Image src="/logo.png" alt={process.env.NEXT_PUBLIC_NAME as string} width={28} height={28} className="rounded-md"/>
                            <span className="text-[16px] font-medium tracking-[-0.02em]">
                                {process.env.NEXT_PUBLIC_NAME}
                            </span>
                        </div>
                        <p className="text-[13.5px] leading-[1.6] text-muted-foreground">
                            A Bun-native TypeScript framework for building fast APIs and Web3 backends.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16">
                        {LINK_GROUPS.map((group) => (
                            <div key={group.title}>
                                <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-faint mb-4">
                                    {group.title}
                                </p>
                                <ul className="flex flex-col gap-2.5">
                                    {group.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-[13.5px] text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-2 pt-10 mt-12 border-t border-border">
                    <p className="text-[13px] text-faint">&copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NAME}. MIT License.</p>
                    <p className="font-mono text-[12px] text-faint">Built with Bun. Obviously.</p>
                </div>
            </div>
        </footer>
    );
}
