import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Zap, Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  React.useEffect(() => setOpen(false), [loc.pathname]);
  const links = [['Home','/'],['About Us','/about'],['Services','/services'],['Projects','/projects'],['Gallery','/gallery'],['Contact','/contact']];
  return <header className="header"><div className="container nav-wrap"><Link to="/" className="brand" aria-label="Raju Electrical Works home"><span className="brand-mark"><Zap size={27}/></span><span><strong>RAJU</strong><small>ELECTRICAL WORKS</small></span></Link><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button><nav className={open ? 'nav open' : 'nav'}>{links.map(([name,url]) => <NavLink key={url} to={url} end={url==='/'}>{name}</NavLink>)}<Link className="nav-cta" to="/contact">Get a Quote <ArrowUpRight size={16}/></Link></nav></div></header>;
}

export function Footer() { return <footer className="footer"><div className="container footer-grid"><div><Link to="/" className="brand footer-brand"><span className="brand-mark"><Zap size={25}/></span><span><strong>RAJU</strong><small>ELECTRICAL WORKS</small></span></Link><p>Powering infrastructure with excellence, safety and reliability.</p></div><div><h4>Explore</h4><Link to="/about">About Us</Link><Link to="/services">Our Services</Link><Link to="/projects">Projects</Link><Link to="/contact">Contact</Link></div><div><h4>Contact</h4><a href="tel:+919769049289"><Phone size={16}/> +91 97690 49289</a><a href="tel:+919869105714"><Phone size={16}/> +91 98691 05714</a><a href="mailto:rajuelectricalwork@gmail.com"><Mail size={16}/> rajuelectricalwork@gmail.com</a><span><MapPin size={16}/> Shop No. 08, Pragati Heights, Plot No. 82–86, Sector 34, Kamothe, Navi Mumbai – 410209</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Raju Electrical Works. All rights reserved.</span><span>Built by Sitecrafterz</span></div></footer> }
