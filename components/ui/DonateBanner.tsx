"use client";

const DONATE_URL = "https://donatr.ee/bejibun-framework/";

export function DonateBanner() {
    return (
        <div className="w-full bg-brand text-primary-foreground border-b border-black/15">
            <p className="max-w-[1150px] mx-auto px-4 md:px-6 py-1.75 text-center text-[12px] md:text-[15px] leading-[1.5]">
                <span aria-hidden="true">🌱</span>{" "}
                Help us scale. Your contribution funds developer hiring, better documentation, and a stronger ecosystem for everyone.{" "}
                <a
                    href={DONATE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                    Donate
                </a>
            </p>
        </div>
    );
}
