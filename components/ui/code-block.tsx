"use client";

import {Check, Copy} from "lucide-react";
import {ReactNode, useState} from "react";

// Minimal regex tokenizer — enough for marketing code samples, no runtime deps.
const TOKEN_PATTERN = new RegExp(
    [
        "(\\/\\/[^\\n]*)",                                                    // 1 comment
        "(\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)", // 2 string
        "(@\\w+)",                                                            // 3 decorator
        "\\b(import|export|default|from|class|extends|implements|public|private|static|declare|async|await|return|const|let|new|type|interface|function|void|for|of|if|else)\\b", // 4 keyword
        "\\b(\\d+(?:\\.\\d+)?)\\b"                                            // 5 number
    ].join("|"),
    "g"
);

const TOKEN_CLASSES = [
    "text-code-muted italic",   // comment
    "text-success",             // string
    "text-warning",             // decorator
    "text-brand-highlight",     // keyword
    "text-code-fg"              // number
];

export function highlightCode(code: string): ReactNode[] {
    const nodes: ReactNode[] = [];
    let last = 0;
    let key = 0;

    for (const match of code.matchAll(TOKEN_PATTERN)) {
        const index = match.index ?? 0;
        if (index > last) nodes.push(code.slice(last, index));

        const groupIndex = match.slice(1).findIndex((g) => g !== undefined);
        nodes.push(
            <span key={key++} className={TOKEN_CLASSES[groupIndex] ?? ""}>
                {match[0]}
            </span>
        );
        last = index + match[0].length;
    }
    if (last < code.length) nodes.push(code.slice(last));

    return nodes;
}

export function CopyButton({text, className = ""}: { text: string; className?: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 text-[12px] text-code-muted hover:text-code-fg transition-colors cursor-pointer ${className}`}
            aria-label={copied ? "Copied!" : "Copy"}
            title={copied ? "Copied!" : "Copy"}
        >
            {copied ? <Check className="size-3.5 text-success"/> : <Copy className="size-3.5"/>}
            <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
        </button>
    );
}

export function CodeBlock({code, title, plain = false}: {
    code: string;
    title?: string;
    plain?: boolean; // skip TS highlighting (shell commands)
}) {
    return (
        <div className="bg-code-bg border border-code-border rounded-xl overflow-hidden text-left">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-code-border">
                <span className="font-mono text-[12px] text-code-muted">{title ?? "terminal"}</span>
                <CopyButton text={code}/>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-[13px] leading-[1.7] text-code-fg whitespace-pre">
                    <code>{plain ? code : highlightCode(code)}</code>
                </pre>
            </div>
        </div>
    );
}
