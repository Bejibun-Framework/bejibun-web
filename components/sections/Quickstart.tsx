"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import {CodeBlock} from "@/components/ui/code-block";

function BunInstallStep() {
    const [os, setOs] = useState<"macOS/Linux" | "Windows">("macOS/Linux");

    const commands = {
        "macOS/Linux": "curl -fsSL https://bun.sh/install | bash",
        "Windows": "powershell -c \"irm bun.sh/install.ps1 | iex\""
    } as const;

    return (
        <div>
            <div className="flex gap-1.5 mb-3">
                {(Object.keys(commands) as Array<keyof typeof commands>).map((key) => (
                    <button
                        key={key}
                        onClick={() => setOs(key)}
                        className={`h-[28px] px-3 rounded-full text-[12px] font-medium transition-colors cursor-pointer ${
                            os === key
                                ? "bg-foreground text-background"
                                : "bg-shade hover:bg-shade-hover text-muted-foreground"
                        }`}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <CodeBlock code={commands[os]} title={os === "Windows" ? "powershell" : "bash"} plain/>
        </div>
    );
}

const STEPS = [
    {
        title: "Install Bun",
        description: "Bejibun runs on the Bun runtime.",
        content: <BunInstallStep/>
    },
    {
        title: "Create a project",
        description: `Scaffold a new ${process.env.NEXT_PUBLIC_NAME} app with the CLI.`,
        content: <CodeBlock code={"bunx @bejibun/cli your-project\ncd your-project"} title="bash" plain/>
    },
    {
        title: "Run the dev server",
        description: "Cold starts in under 10ms.",
        content: <CodeBlock code="bun dev" title="bash" plain/>
    },
    {
        title: "Build & Ship",
        description: "Production mode, one command away.",
        content: <CodeBlock code="bun start" title="bash" plain/>
    }
];

export function Quickstart() {
    return (
        <section id="quickstart" className="py-[80px] md:py-[112px] border-b border-border">
            <div className="max-w-[1150px] mx-auto px-4 md:px-6">
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-12 md:mb-16"
                >
                    <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-brand mb-4">
                        Quickstart
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-[32px] md:text-[44px] leading-[1.15] tracking-[-0.03em] font-medium">
                            Zero to API in four steps.
                        </h2>
                        <a
                            href="https://docs.bejibun.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[14px] text-brand hover:text-brand-highlight transition-colors"
                        >
                            Read the full documentation →
                        </a>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{opacity: 0, y: 12}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: i * 0.08}}
                        >
                            <div className="flex items-baseline gap-3 mb-1.5">
                                <span className="font-mono text-[13px] text-brand">0{i + 1}</span>
                                <h3 className="text-[17px] font-medium">{step.title}</h3>
                            </div>
                            <p className="text-[13.5px] text-muted-foreground mb-4 pl-[34px]">{step.description}</p>
                            <div className="pl-0 md:pl-[34px]">{step.content}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
