"use client";

import {motion} from "framer-motion";
import {ArrowUpRight} from "lucide-react";
import {useState} from "react";
import {CodeBlock, CopyButton} from "@/components/ui/code-block";

const SDK_TABS = [
    {
        key: "Wallet",
        file: "@bejibun/web3 — Wallet",
        code: `import {WalletService} from "@bejibun/web3";

const wallet = new WalletService();

// Connect wallet
const address = await wallet.connect({
    provider: "metamask"
});

// Sign message
const signature = await wallet.sign(
    "Welcome to Bejibun!"
);`
    },
    {
        key: "RPC",
        file: "@bejibun/web3 — Rpc",
        code: `import {Rpc} from "@bejibun/web3";

const rpc = new Rpc({
    network: "mainnet",
    provider: Bun.env.RPC_URL
});

// Get block number
const blockNumber = await rpc.call("eth_blockNumber");

// Get balance
const balance = await rpc.getBalance(address);`
    },
    {
        key: "Contract",
        file: "@bejibun/web3 — Contract",
        code: `import {Contract} from "@bejibun/web3";

const token = new Contract({
    address: "0x...",
    abi: ERC20_ABI
});

// Read contract
const balance = await token.balanceOf(userAddress);

// Write contract
await token.transfer(recipientAddress, amount);`
    }
];

const WEB3_CARDS = [
    {
        tag: "x402",
        status: "Shipped",
        statusClass: "text-success border-success/30",
        title: "On-chain payments, per request",
        detail: "HTTP-native payments via @bejibun/x402. Charge for API calls at the route level — no payment gateway, no invoices.",
        href: "https://github.com/Bejibun-Framework/bejibun-x402"
    },
    {
        tag: "@bejibun/web3",
        status: "Coming soon",
        statusClass: "text-warning border-warning/30",
        title: "Wallet, RPC & contracts in one SDK",
        detail: "Connect wallets, call nodes, and interact with smart contracts through type-safe interfaces. One import away.",
        href: null
    },
    {
        tag: "$BJBN",
        status: "Live on Solana",
        statusClass: "text-brand border-brand/30",
        title: "The token behind the ecosystem",
        detail: "Listed on CoinGecko. Token utility and CEX listing on the roadmap.",
        href: "https://www.coingecko.com/en/coins/bejibun"
    }
];

// "+" corner markers — quiet structural detail
function CornerCross({className}: {
    className: string;
}) {
    return (
        <span aria-hidden="true" className={`absolute font-mono text-[14px] text-elevated/40 select-none ${className}`}>
            +
        </span>
    );
}

function Web3Card({card, index}: {
    card: typeof WEB3_CARDS[number];
    index: number;
}) {
    const inner = (
        <div
            className="group relative h-full bg-code-bg border border-code-border rounded-xl p-7 overflow-hidden transition-all duration-300 hover:border-brand/50 hover:shadow-[0_0_32px_rgba(255,108,2,0.10),0_1px_0_rgba(255,108,2,0.25)_inset]">
            {/* top sheen */}
            <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-code-fg/15 to-transparent"/>

            <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[13px] text-brand">{card.tag}</span>
                <span
                    className={`font-mono text-[10.5px] uppercase tracking-[0.1em] border rounded-full px-2.5 py-1 ${card.statusClass}`}>
                    {card.status}
                </span>
            </div>

            <h3 className="text-[17px] font-medium text-code-fg tracking-[-0.01em] mb-2.5 flex items-start gap-1.5">
                {card.title}
                {card.href && (
                    <ArrowUpRight
                        className="size-3.5 text-code-muted shrink-0 mt-1 transition-colors group-hover:text-brand"/>
                )}
            </h3>
            <p className="text-[13.5px] leading-[1.65] text-code-muted">{card.detail}</p>
        </div>
    );

    return (
        <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="h-full"
        >
            {card.href ? (
                <a href={card.href} target="_blank" rel="noreferrer" className="block h-full">
                    {inner}
                </a>
            ) : inner}
        </motion.div>
    );
}

export function Web3() {
    const [active, setActive] = useState(0);

    return (
        <section id="web3" className="relative px-3 md:px-6 py-8 md:py-12">
            {/* Island panel — rounded dark canvas inset on the light page, so the
                light→dark hand-off reads as a deliberate panel, not a hard cut */}
            <div
                className="relative bg-night rounded-[28px] md:rounded-[40px] border border-night-border overflow-hidden py-[88px] md:py-[120px] max-w-[1400px] mx-auto shadow-[0_32px_80px_-48px_rgba(4,4,4,0.5)]">
                {/* Accent aura — single chromatic glow, BaseHub-style */}
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[-340px] -translate-x-1/2 size-[760px] rounded-full pointer-events-none
                               bg-[radial-gradient(circle,rgba(255,108,2,0.16)_0%,rgba(255,108,2,0.05)_40%,transparent_68%)]"
                />
                {/* hairline halo ring */}
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[-540px] -translate-x-1/2 size-[1080px] rounded-full border border-code-border/60 pointer-events-none"
                />

                <div className="relative max-w-[1150px] mx-auto px-4 md:px-6">
                    <CornerCross className="top-[-60px] left-4 md:left-6"/>
                    <CornerCross className="top-[-60px] right-4 md:right-6"/>

                    {/* Header */}
                    <motion.div
                        className="text-center max-w-[720px] mx-auto mb-16 md:mb-20"
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.14em] text-brand mb-5">
                            01 — Web3 · Blockchain Native
                        </p>
                        <h2 className="text-[36px] md:text-[52px] leading-[1.12] tracking-[-0.035em] font-medium text-code-fg mb-5">
                            Built for the{" "}
                            <span
                                className="bg-gradient-to-r from-brand via-brand-highlight to-brand bg-clip-text text-transparent">
                            on-chain
                        </span>{" "}
                            economy.
                        </h2>
                        <p className="text-[15px] md:text-[17px] leading-[1.65] text-code-muted max-w-[560px] mx-auto">
                            Blockchain isn&apos;t a plugin here. x402 payments shipped,
                            a full wallet/RPC/contract SDK is on the way — your dApp backend,
                            first-class from line one.
                        </p>
                    </motion.div>

                    {/* Capability cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-20">
                        {WEB3_CARDS.map((card, i) => (
                            <Web3Card key={card.tag} card={card} index={i}/>
                        ))}
                    </div>

                    {/* SDK preview */}
                    <motion.div
                        className="max-w-[760px] mx-auto"
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.15}}
                    >
                        <div className="flex items-center justify-center gap-2 mb-5">
                            {SDK_TABS.map((t, i) => (
                                <button
                                    key={t.key}
                                    onClick={() => setActive(i)}
                                    className={`h-[32px] px-4 rounded-full text-[13px] font-medium transition-colors cursor-pointer ${
                                        active === i
                                            ? "bg-code-fg text-night"
                                            : "bg-code-fg/5 hover:bg-code-fg/10 text-code-muted border border-code-border"
                                    }`}
                                >
                                    {t.key}
                                </button>
                            ))}
                        </div>

                        <div className="relative">
                            {/* glow under the code window */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-10 bottom-[-24px] h-[60px] bg-[radial-gradient(ellipse,rgba(255,108,2,0.14),transparent_70%)] pointer-events-none"
                            />
                            <div
                                className="relative shadow-[0_0_0_1px_rgba(255,108,2,0.12),0_24px_64px_-32px_rgba(255,108,2,0.25)] rounded-xl">
                                <CodeBlock code={SDK_TABS[active].code} title={SDK_TABS[active].file}/>
                            </div>
                        </div>
                    </motion.div>

                    {/* $BJBN contract plaque */}
                    <motion.div
                        className="max-w-[760px] mx-auto mt-12"
                        initial={{opacity: 0, y: 12}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.1}}
                    >
                        <div
                            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-code-bg border border-code-border rounded-xl px-5 py-4"
                        >
                            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand shrink-0">
                                $BJBN · Solana CA
                            </span>
                            <code className="font-mono text-[12px] md:text-[13px] text-code-muted break-all flex-1">
                                {process.env.NEXT_PUBLIC_CA}
                            </code>
                            <CopyButton text={process.env.NEXT_PUBLIC_CA as string}/>
                        </div>
                    </motion.div>

                    <CornerCross className="bottom-[-64px] left-4 md:left-6"/>
                    <CornerCross className="bottom-[-64px] right-4 md:right-6"/>
                </div>
            </div>
        </section>
    );
}
