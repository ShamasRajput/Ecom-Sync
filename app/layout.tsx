"use client"
import { GoogleAnalytics } from "nextjs-google-analytics";
import "../styles/globals.css"
import { AnalyticsWrapper } from "./analytics";

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-custom_white">
                {children}
                <AnalyticsWrapper />
                <GoogleAnalytics trackPageViews />
            </body>
        </html>
    );
}