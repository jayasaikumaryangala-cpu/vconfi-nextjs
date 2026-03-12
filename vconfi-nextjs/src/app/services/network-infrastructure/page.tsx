'use client';
import Link from 'next/link';
import ServiceContactForm from '@/components/ServiceContactForm';
import { useTheme } from '@/components/ThemeProvider';

const services = [
  {
    title: 'Core & Access Architecture',
    desc: 'Campus or office LAN/WAN built for performance and clean segmentation with enterprise-grade reliability.',
    href: '/services/core-access-architecture',
    icon: 'fa-sitemap',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    title: 'Redundant Fiber Backbone',
    desc: 'Multi-path uplink design eliminating single point of failure with automated failover capabilities.',
    href: '/services/redundant-fiber-backbone',
    icon: 'fa-diagram-project',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
  },
  {
    title: 'Network Modernization',
    desc: 'Low-risk migration planning with structured validation at every stage of your infrastructure upgrade.',
    href: '/services/network-modernization',
    icon: 'fa-arrows-spin',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
  {
    title: 'Multi-Layer Segmentation',
    desc: 'Intelligent segmentation, VLANs, VRFs and QoS for enhanced security across all network layers.',
    href: '/services/multi-layer-segmentation',
    icon: 'fa-layer-group',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
];

export default function NetworkInfrastructurePage() {
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
            <span style={{ color: ac }}>Network Infrastructure</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.8rem,4.5vw,3rem)', fontWeight: 900, color: d ? '#fff' : '#0a1e3d', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Enterprise Network <span style={{ color: ac }}>Infrastructure</span>
          </h1>
          <p style={{ fontSize: 'clamp(0.85rem,1.5vw,1.05rem)', color: d ? '#888' : '#64748b', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Building robust, scalable, and secure network architectures for modern enterprises. From core backbone to edge access, we design infrastructure that performs.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ padding: 'clamp(2rem,5vh,4rem) 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(1rem,2vw,1.5rem)' }}>
            {services.map((s, i) => (
              <Link key={i} href={s.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ background: d ? '#141414' : '#fff', border: `1px solid ${d ? '#1e1e1e' : '#e2e8f0'}`, borderRadius: '1rem', overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer' }}
                  className="service-hover-card">
                  <div style={{ height: 180, overflow: 'hidden' }}>
                    <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} loading="lazy" />
                  </div>
                  <div style={{ padding: 'clamp(1rem,2vw,1.5rem)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: 36, height: 36, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: d ? 'rgba(16,185,129,0.1)' : 'rgba(10,100,188,0.08)', color: ac, fontSize: '0.85rem' }}>
                        <i className={`fas ${s.icon}`}></i>
                      </div>
                      <h3 style={{ fontSize: 'clamp(0.9rem,1.3vw,1.05rem)', fontWeight: 700, color: d ? '#e8e8e8' : '#0a1e3d', margin: 0 }}>{s.title}</h3>
                    </div>
                    <p style={{ fontSize: 'clamp(0.75rem,1vw,0.85rem)', color: d ? '#888' : '#64748b', lineHeight: 1.6, margin: '0 0 1rem' }}>{s.desc}</p>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: ac, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      Read More <i className="fas fa-arrow-right" style={{ fontSize: '0.6rem' }}></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceContactForm serviceName="Network Infrastructure" />
    </div>
  );
}
