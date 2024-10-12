import { Inter } from 'next/font/google';
import { Share_Tech_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import 'loaders-ui/dist/main/index.min.css';
import './globals.scss';
import '../styles/index.scss';

// Import the Inter font
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter', // Use CSS variable
});

// Import the Share Tech Mono font
const shareTechMono = Share_Tech_Mono({
    subsets: ['latin'],
    variable: '--font-share-tech-mono',
    weight: '400'
});

export const metadata: Metadata = {
    title: 'Loaders-ui',
    description: 'The fastest way to add the loading elements to your site.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${shareTechMono.variable}`}>
            <body>
                {/* <h2 style={{ fontSize: 100, textAlign: "center" }}>COMING SOON</h2> */}
                {children}
            </body>
        </html>
    );
}
