'use client';
import Link from 'next/link';
import ServiceContactForm from '@/components/ServiceContactForm';
import { useTheme } from '@/components/ThemeProvider';

const services = [
  {
    title: '24/7 Infrastructure Monitoring',
    desc: 'Proactive real-time oversight across your entire IT environment with alerting and incident response.',
    href: '/services/noc-monitoring',
    icon: 'fa-desktop',
    img: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=600&q=80',
  },
  {
    title: 'Patch & Maintenance Management',
    desc: 'Scheduled patching, preventive maintenance checks, and firmware upgrades enhancing security and stability.',
    href: '/services/patch-management',
    icon: 'fa-wrench',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    title: 'Backup Solutions',
    desc: 'Enterprise backup strategies with automated scheduling, verification, and offsite replication.',
    href: '/services/backup-solutions',
    icon: 'fa-cloud-arrow-up',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
  },
  {
    title: 'Disaster Recovery Planning',
    desc: 'Comprehensive DR planning with documented failover procedures for real-world readiness.',
    href: '/services/disaster-recovery',
    icon: 'fa-shield-halved',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&q=80',
  },
  {
    title: 'HA Failover Testing',
    desc: 'Live validation of network services, security checks with pen testing, and core service continuity.',
    href: '/services/ha-failover-testing',
    icon: 'fa-rotate',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    title: 'Audit-Ready Documentation',
    desc: 'Compliance-friendly records, periodic drill support, and comprehensive documentation for audits.',
    href: '/services/audit-documentation',
    icon: 'fa-file-shield',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
];

export default function MonitoringRecoveryPage() {
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
            <span style={{ color: ac }}>Monitoring & Recovery</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.8rem,4.5vw,3rem)', fontWeight: 900, color: d ? '#fff' : '#0a1e3d', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Monitoring, Continuity & <span style={{ color: ac }}>Disaster Recovery</span>
          </h1>
          <p style={{ fontSize: 'clamp(0.85rem,1.5vw,1.05rem)', color: d ? '#888' : '#64748b', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Ensure business continuity with 24/7 monitoring, backup solutions, and comprehensive disaster recovery planning.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ padding: 'clamp(2rem,5vh,4rem) 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem,3vh,2.5rem)' }}>
            <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: 900, color: d ? '#fff' : '#0a1e3d' }}>
              Our <span style={{ color: ac }}>Monitoring Services</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(0.75rem,1.5vw,1.25rem)' }}>
            {services.map((s, i) => (
              <Link key={i} href={s.href} style={{ textDecoration: 'none', display: 'block' }}>
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
            ))}
          </div>
        </div>
      </section>

      <ServiceContactForm serviceName="Monitoring & Recovery" />
    </div>
  );
}
