"use client";

import Image from "next/image";
import {Github, Menu, X} from "lucide-react";
import * as React from "react";

import {ThemeToggle} from "./theme-toggle";

const NAV_LINKS = [
    {label: "Web3", href: "#web3"},
    {label: "DX", href: "#dx"},
    {label: "Performance", href: "#performance"},
    {label: "Quickstart", href: "#quickstart"},
    {label: "Roadmap", href: "#roadmap"}
];

export function Navigation() {
    const [open, setOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
            <div className="max-w-[1150px] mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-[64px]">
                    <a href="#hero" className="flex items-center gap-2.5">
                        <Image src="/logo.png" alt="Bejibun" width={28} height={28} className="rounded-md" priority/>
                        <span className="text-[16px] font-medium tracking-[-0.02em]">Bejibun</span>
                        <span className="hidden sm:inline font-mono text-[11px] text-faint border border-border rounded-full px-2 py-0.5">
                            v0.4
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-7">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle/>
                        <a
                            href="https://github.com/Bejibun-Framework/bejibun"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="text-muted-foreground hover:text-foreground transition-colors p-1.5"
                        >
                            <Github className="size-[18px]"/>
                        </a>
                        <a
                            href="https://docs.bejibun.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Docs
                        </a>
                        <a
                            href="https://docs.bejibun.com"
                            target="_blank"
                            rel="noreferrer"
                            className="h-[34px] inline-flex items-center px-4 rounded-full bg-brand hover:bg-brand-highlight text-[13px] font-medium text-primary-foreground transition-colors"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="md:hidden flex items-center gap-1">
                        <ThemeToggle/>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="p-2 text-muted-foreground hover:text-foreground"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        {open ? <X className="size-5"/> : <Menu className="size-5"/>}
                    </button>
                    </div>
                </div>

                {open && (
                    <div className="md:hidden pb-4 border-t border-border pt-3 flex flex-col gap-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-[15px] text-muted-foreground hover:text-foreground transition-colors py-1"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex items-center gap-4 pt-2">
                            <a
                                href="https://github.com/Bejibun-Framework/bejibun"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[15px] text-muted-foreground hover:text-foreground"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://docs.bejibun.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[15px] text-muted-foreground hover:text-foreground"
                            >
                                Docs
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
