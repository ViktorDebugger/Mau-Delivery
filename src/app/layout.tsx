import type { Metadata } from 'next';
import { Karantina, Katibeh } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const karantina = Karantina({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-karantina',
});

const katibeh = Katibeh({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-katibeh',
});

export const metadata: Metadata = {
    title: 'MAU Delivery',
    description: 'Delivery service',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${karantina.variable} ${katibeh.variable} bg-[#FBE7BB]`}>
                <Header />
                {children}
            </body>
        </html>
    )
}