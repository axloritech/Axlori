import './globals.css';
import { Space_Grotesk, DM_Mono } from 'next/font/google';
import Nav from '../components/Nav';
const space = Space_Grotesk({ subsets:['latin'], variable:'--font-space' });
const mono = DM_Mono({ subsets:['latin'], variable:'--font-mono', weight:['400','500'] });
export const metadata = { title:'Axlori Tech — We build what’s next.', description:'Axlori Tech creates intelligent digital experiences, AI-powered systems, and innovative technology designed for the future.' };
export default function RootLayout({children}) { return <html lang="en"><body className={`${space.variable} ${mono.variable}`}><div className="noise"/><Nav />{children}</body></html> }
