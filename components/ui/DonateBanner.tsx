"use client";

export function DonateBanner() {
    return (
        <div className="w-full bg-brand text-primary-foreground">
            <p className="mx-auto px-4 md:px-6 py-2 text-center text-[12px] md:text-[15px] leading-[1.5]">
                {"\uD83C\uDF31"} Help us scale. Your contribution funds developer hiring, better documentation, and a
                stronger ecosystem for everyone.
                <a
                    href={process.env.NEXT_PUBLIC_DONATE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-2 hover:opacity-80 transition-opacity ml-1"
                >
                    Donate
                </a>
            </p>
        </div>
    );
}
