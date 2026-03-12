'use client';
import Link from 'next/link';
import ServiceContactForm from '@/components/ServiceContactForm';
import { useTheme } from '@/components/ThemeProvider';

interface Capability {
  icon: string;
  title: string;
  desc: string;
}

interface IncludedCard {
  icon: string;
  title: string;
  items: string[];
}

interface ServiceSubPageProps {
  breadcrumbs: { label: string; href?: string }[];
  title: string;
  titleAccent: string;
  description: string;
  heroImage: string;
  capabilities: Capability[];
  includedTitle: string;
  includedTitleAccent: string;
  includedDesc: string;
  includedCards: IncludedCard[];
  serviceName: string;
}

export default function ServiceSubPage(props: ServiceSubPageProps) {
  const { theme } = useTheme();
  const d = theme === 'dark';
  const ac = d ? '#10b981' : '#0A64BC';

  return (
    <div style={{ background: d ? '#0a0a0a' : '#f8fafc', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: d ? 'linear-gradient(180deg,#0a0a0a,#0f0f0f)' : 'linear-gradient(180deg,#f0f7ff,#e8f0fe,#f0f7ff)', padding: 'clamp(7rem,12vh,10rem) 1.5rem clamp(2.5rem,5vh,4rem)', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <nav style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem', fontSize: 'clamp(0.65rem,1vw,0.8rem)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', flexWrap: 'wrap' }}>
            {props.breadcrumbs.map((b, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {i > 0 && <span style={{ color: d ? '#333' : '#cbd5e1' }}>/</span>}
                {b.href ? (
                  <Link href={b.href} style={{ color: d ? '#555' : '#94a3b8', textDecoration: 'none' }}>{b.label}</Link>
                ) : (
                  <span style={{ color: ac }}>{b.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 style={{ fontSize: 'clamp(1.8rem,4.5vw,3rem)', fontWeight: 900, color: d ? '#fff' : '#0a1e3d', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            {props.title} <span style={{ color: ac }}>{props.titleAccent}</span>
          </h1>
          <p style={{ fontSize: 'clamp(0.85rem,1.5vw,1.05rem)', color: d ? '#888' : '#64748b', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            {props.description}
          </p>
        </div>
      </section>

      {/* Content: Image + Capabilities */}
      <section style={{ padding: 'clamp(2rem,5vh,4rem) 1.5rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(1.5rem,3vw,3rem)', alignItems: 'center' }}>
          <div style={{ borderRadius: '1rem', overflow: 'hidden', maxHeight: 320 }}>
            <img src={props.heroImage} alt={props.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} loading="lazy" />
          </div>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: d ? 'rgba(16,185,129,0.08)' : 'rgba(10,100,188,0.08)', color: ac, padding: '0.35rem 1rem', borderRadius: '0.5rem', fontSize: 'clamp(0.6rem,1vw,0.75rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              <i className="fas fa-bolt"></i> Key Capabilities
            </div>
            <h2 style={{ fontSize: 'clamp(1.2rem,2.5vw,1.75rem)', fontWeight: 900, color: d ? '#fff' : '#0a1e3d', marginBottom: '1.5rem' }}>
              {props.title} <span style={{ color: ac }}>{props.titleAccent}</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {props.capabilities.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', borderRadius: '0.75rem', transition: 'background 0.2s' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', flexShrink: 0, background: d ? 'rgba(16,185,129,0.08)' : '#eff6ff', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ac, fontSize: '0.85rem' }}>
                    <i className={`fas ${c.icon}`}></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 'clamp(0.8rem,1.2vw,0.95rem)', fontWeight: 700, color: d ? '#e8e8e8' : '#0a1e3d', marginBottom: '0.2rem' }}>{c.title}</h4>
                    <p style={{ fontSize: 'clamp(0.7rem,1vw,0.85rem)', color: d ? '#888' : '#64748b', lineHeight: 1.5, margin: 0 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Included Cards */}
      <section style={{ padding: 'clamp(2rem,5vh,4rem) 1.5rem', background: d ? '#0f0f0f' : '#f0f7ff' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem,3vh,3rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: 900, color: d ? '#fff' : '#0a1e3d' }}>
            {props.includedTitle} <span style={{ color: ac }}>{props.includedTitleAccent}</span>
          </h2>
          <p style={{ fontSize: 'clamp(0.8rem,1.2vw,0.95rem)', color: d ? '#888' : '#64748b', marginTop: '0.5rem' }}>{props.includedDesc}</p>
        </div>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(0.75rem,1.5vw,1.5rem)' }}>
          {props.includedCards.map((card, i) => (
            <div key={i} className="service-hover-card" style={{ background: d ? '#141414' : '#fff', border: `1px solid ${d ? '#1e1e1e' : '#e2e8f0'}`, borderRadius: '1rem', padding: 'clamp(1rem,2vw,1.5rem)', transition: 'all 0.3s' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', background: d ? 'rgba(16,185,129,0.1)' : 'rgba(10,100,188,0.08)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ac, fontSize: '1rem', marginBottom: '0.75rem' }}>
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3 style={{ fontSize: 'clamp(0.85rem,1.2vw,1rem)', fontWeight: 700, color: d ? '#e8e8e8' : '#0a1e3d', marginBottom: '0.5rem' }}>{card.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {card.items.map((item, j) => (
                  <li key={j} style={{ fontSize: 'clamp(0.7rem,1vw,0.85rem)', color: d ? '#888' : '#64748b', lineHeight: 1.5, paddingLeft: '1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: ac, fontWeight: 'bold' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ServiceContactForm serviceName={props.serviceName} />

      {/* Responsive grid fix for mobile */}
      <style>{`
        @media (max-width: 640px) {
          section > div[style*="grid-template-columns: 1fr 1.2fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
