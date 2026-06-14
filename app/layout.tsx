import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_NAME} - A modern TypeScript framework powered by Bun`,
    description: `${process.env.NEXT_PUBLIC_NAME} is a high-performance framework built on the Bun runtime.`,
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png"
    }
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            {/* Apply persisted theme before first paint — default is light */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        try {
                            if (localStorage.getItem("bejibun:theme") === "dark") document.documentElement.classList.add("dark")
                        } catch (e) {}
                    `
                }}
            />
        </head>
        <body
            suppressHydrationWarning={true}
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        >
            {children}
        </body>
        </html>
    );
};