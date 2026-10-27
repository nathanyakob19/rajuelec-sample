import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function PageHero({eyebrow,title,desc}) { return <section className="page-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{desc}</p></div></section> }

export function ServiceCard({service}) { const Icon=service.icon; return <article className="service-card"><div className="service-icon"><Icon size={25}/></div><h3>{service.title}</h3><p>{service.text}</p><Link to="/contact" className="text-link">Discuss your requirement <ArrowUpRight size={16}/></Link></article> }
