'use client';
import Link from 'next/link';
import ServiceContactForm from '@/components/ServiceContactForm';
import { useTheme } from '@/components/ThemeProvider';

const cyberServices = [
  {
    title: 'Next-Gen Firewall',
    desc: 'Deployment Security Profiles, proxy, IPAM and HA cluster design for perimeter resilience.',
    href: '/services/next-gen-firewall',
    icon: 'fa-shield-halved',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
  },
  {
    title: 'VPN & Secure Access',
    desc: 'IPSec, remote access and site-to-site connectivity with enterprise-grade encryption.',
    href: '/services/vpn-secure-access',
    icon: 'fa-lock',
    img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80',
  },
  {
    title: 'Endpoint Protection',
    desc: 'Advanced endpoint detection & response across all devices with real-time threat intelligence.',
    href: '/services/endpoint-protection',
    icon: 'fa-laptop-code',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  },
  {
    title: 'Threat Detection',
    desc: 'Continuous threat monitoring with AI-powered analytics and automated incident response.',
    href: '/services/threat-detection',
    icon: 'fa-crosshairs',
    img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&q=80',
  },
  {
    title: 'NOC/SOC Operations',
    desc: 'Centralized logging, threat monitoring and policy governance for complete visibility.',
    href: '/services/noc-operations',
    icon: 'fa-desktop',
    img: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=600&q=80',
  },
  {
    title: 'Redundant Firewall Clusters',
    desc: 'Zero single-point-of-failure security architecture with active-passive HA and load sharing.',
    href: '/services/redundant-firewall-clusters',
    icon: 'fa-clone',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
];

const serverServices = [
  {
    title: 'Data Center Hosting',
    desc: 'Reliable server hosting and colocation services for mission-critical workloads.',
    href: '/services/data-center-hosting',
    icon: 'fa-server',
    img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80',
  },
  {
    title: 'Virtualization & HA',
    desc: 'VMware/Hyper-V environments built for maximum uptime and performance.',
    href: '/services/virtualization-ha',
    icon: 'fa-cubes',
    img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80',
  },
  {
    title: 'Core Service Stability',
    desc: 'Active Directory, DNS and identity services hardened and optimized for performance.',
    href: '/services/core-service-stability',
    icon: 'fa-database',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
  },
  {
    title: 'Server Management',
    desc: 'Complete lifecycle management — provisioning, patching, monitoring, and decommissioning.',
    href: '/services/server-management',
    icon: 'fa-hard-drive',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
];

function ServiceCard({ s, d, ac }: { s: typeof cyberServices[0]; d: boolean; ac: string }) {
  return (
    <Link href={s.href} style={{ textDecoration: 'none', display: 'block' }}>
      <div style={{ background: d ? '#141414' : '#fff', border: `1px solid ${d ? '#1e1e1e' : '#e2e8f0'}`, borderRadius: '1rem', overflow: 'hidden', transition: 'all 0.3s', height: '100%' }} className="service-hover-card">
        <div style={{ height: 170, overflow: 'hidden' }}>
          <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} loading="lazy" />
        </div>
        <div style={{ padding: 'clamp(1rem,2vw,1.5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: 34, height: 34, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: d ? 'rgba(16,185,129,0.1)' : 'rgba(10,100,188,0.08)', color: ac, fontSize: '0.8rem', flexShrink: 0 }}>
              <i className={`fas ${s.icon}`}></i>
            </div>
            <h3 style={{ fontSize: 'clamp(0.85rem,1.2vw,1rem)', fontWeight: 700, color: d ? '#e8e8e8' : '#0a1e3d', margin: 0 }}>{s.title}</h3>
          </div>
          <p style={{ fontSize: 'clamp(0.72rem,1vw,0.82rem)', color: d ? '#888' : '#64748b', lineHeight: 1.6, margin: '0 0 0.75rem' }}>{s.desc}</p>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: ac, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Read More <i className="fas fa-arrow-right" style={{ fontSize: '0.55rem' }}></i>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function CybersecurityPage() {
  const { theme } = useTheme();
  const d = theme === 'dark';
  const ac = d ? '#10b981' : '#0A64BC';

  return (
    <div style={{ background: d ? '#0a0a0a' : '#f8fafc', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: d ? 'linear-gradient(180deg,#0a0a0a,#0f0f0f)' : 'linear-gradient(180deg,#f0f7ff,#e8f0fe,#f0f7ff)', padding: 'clamp(7rem,12vh,10rem) 1.5rem clamp(2.5rem,5vh,4rem)', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <nav style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem', fontSize: 'clamp(0.65rem,1vw,0.8rem)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <Link href="/" style={{ color: d ? '#555' : '#94a3b8', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: d ? '#333' : '#cbd5e1' }}>/</span>
            <Link href="/#services" style={{ color: d ? '#555' : '#94a3b8', textDecoration: 'none' }}>Services</Link>
            <span style={{ color: d ? '#333' : '#cbd5e1' }}>/</span>
            <span style={{ color: ac }}>Cybersecurity</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.8rem,4.5vw,3rem)', fontWeight: 900, color: d ? '#fff' : '#0a1e3d', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Cybersecurity & <span style={{ color: ac }}>Server Infrastructure</span>
          </h1>
          <p style={{ fontSize: 'clamp(0.85rem,1.5vw,1.05rem)', color: d ? '#888' : '#64748b', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Protect your business with comprehensive security solutions and expert server management. We safeguard your critical assets 24/7.
          </p>
        </div>
      </section>

      {/* Cyber Security Cards */}
      <section style={{ padding: 'clamp(2rem,5vh,4rem) 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem,3vh,2.5rem)' }}>
            <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: 900, color: d ? '#fff' : '#0a1e3d' }}>
              Cyber <span style={{ color: ac }}>Security</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(0.75rem,1.5vw,1.25rem)' }}>
            {cyberServices.map((s, i) => <ServiceCard key={i} s={s} d={d} ac={ac} />)}
          </div>
        </div>
      </section>

      {/* Server Infrastructure Cards */}
      <section style={{ padding: 'clamp(2rem,5vh,4rem) 1.5rem', background: d ? '#0f0f0f' : '#f0f7ff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem,3vh,2.5rem)' }}>
            <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: 900, color: d ? '#fff' : '#0a1e3d' }}>
              Server <span style={{ color: ac }}>Infrastructure</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(0.75rem,1.5vw,1.25rem)' }}>
            {serverServices.map((s, i) => <ServiceCard key={i} s={s} d={d} ac={ac} />)}
          </div>
        </div>
      </section>

      <ServiceContactForm serviceName="Cybersecurity" />
    </div>
  );
}
