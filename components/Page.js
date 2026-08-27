import Link from 'next/link';
export function Grid(){return <div className="grid"/>}
export function Label({children}){return <div className="eyebrow"><span className="dot"/>{children}</div>}
export function PageIntro({kicker,title,children}){return <section className="pageIntro"><Label>{kicker}</Label><h1>{title}</h1>{children&&<p>{children}</p>}</section>}
export function Footer(){return <footer><span>© 2026 AXLORI TECH</span><span>INTELLIGENT TECHNOLOGY <b>●</b></span><Link href="/contact">LET'S BUILD <span>↗</span></Link></footer>}
