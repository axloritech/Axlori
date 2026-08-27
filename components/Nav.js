'use client';
import Link from 'next/link'; import { usePathname } from 'next/navigation';
const links=[['Home','/'],['About','/about'],['Services','/services'],['Projects','/projects'],['Contact','/contact']];
export default function Nav(){ const path=usePathname(); return <header className="nav"><Link href="/" className="brand"><span className="mark">A</span><span>AXLORI <i>TECH</i></span></Link><nav>{links.map(([label,href])=><Link key={href} className={path===href?'active':''} href={href}>{label}</Link>)}</nav><Link href="/contact" className="navCta">Start a project <span>↗</span></Link></header> }
