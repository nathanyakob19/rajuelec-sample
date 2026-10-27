import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { services } from '../data/siteContent.js';
import { PageHero, ServiceCard } from '../components/PageElements.jsx';

export default function Services() { return <><PageHero eyebrow="OUR CAPABILITIES" title={<>Services for every<br/><em>stage of the project.</em></>} desc="Electrical contracting, busbar systems, fabrication and maintenance solutions for industrial and infrastructure requirements."/><section className="section"><div className="container"><div className="service-grid service-grid-large">{services.map(s=><ServiceCard key={s.title} service={s}/>)}</div><div className="service-note"><ShieldCheck size={26}/><div><strong>Quality and safety are central to our work.</strong><p>Project scope, timelines and technical specifications are confirmed with the client before work begins.</p></div></div></div></section></> }
