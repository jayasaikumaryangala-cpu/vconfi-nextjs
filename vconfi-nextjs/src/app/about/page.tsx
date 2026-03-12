'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, isVisible: v };
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function About() {
  const { theme } = useTheme();
  const d = theme === 'dark';
  const ac = d ? '#10b981' : '#0A64BC';
  const bg = d ? '#0a0a0a' : '#fff';
  const h = d ? '#fff' : '#0a1e3d';
  const t = d ? '#aaa' : '#64748b';
  const cb = d ? '#141414' : '#fff';
  const bdr = d ? '#1e1e1e' : '#e2e8f0';

  return (
    <div style={{ background: bg, minHeight: '100vh' }}>

      <section style={{ background: d ? 'linear-gradient(180deg,#0a0a0a,#0f0f0f)' : 'linear-gradient(180deg,#f0f7ff,#fff)', paddingTop: 'clamp(7rem,12vh,10rem)', paddingBottom: 'clamp(3rem,6vh,5rem)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: `radial-gradient(circle, ${ac} 1px, transparent 1px)`, backgroundSize: '32px 32px' }}></div>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '50rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: 700, color: d ? '#555' : '#94a3b8', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <span style={{ color: ac }}>About</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: h, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
              ABOUT <span style={{ color: ac }}>VCONFI</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: 'clamp(0.9rem,1.5vw,1.1rem)', color: t, maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7 }}>
              Your trusted partner for enterprise-grade IT infrastructure, cybersecurity, and mission-critical managed services.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem,6vh,5rem) 1.5rem' }}>
        <div style={{ maxWidth: '68rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(2rem,4vw,4rem)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" alt="VCONFI Infrastructure" style={{ width: '100%', height: 320, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: 8, height: 8, background: ac, borderRadius: '50%' }}></div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Operational Since 2025</span>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><span style={{ fontSize: '0.65rem', fontWeight: 700, color: ac, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem' }}>Our Story</span></Reveal>
            <Reveal delay={0.1}><h2 style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 900, color: h, marginBottom: '1.5rem' }}>ENGINEERING IT <span style={{ color: ac }}>EXCELLENCE</span></h2></Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ color: t, fontSize: 'clamp(0.82rem,1.2vw,0.95rem)', lineHeight: 1.7 }}>VCONFI was founded with a singular focus: enterprises deserve IT infrastructure that never fails. Not 99% uptime — 99.9% and beyond.</p>
                <p style={{ color: t, fontSize: 'clamp(0.82rem,1.2vw,0.95rem)', lineHeight: 1.7 }}>We believe technology should empower businesses, not create anxiety. Every solution we deliver is designed for resilience, security, and zero-touch operations.</p>
                <p style={{ color: t, fontSize: 'clamp(0.82rem,1.2vw,0.95rem)', lineHeight: 1.7 }}>Today, we serve clients across healthcare, finance, manufacturing, and other industries where downtime isn&apos;t just expensive — it&apos;s unacceptable.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem,6vh,5rem) 1.5rem', background: d ? '#0f0f0f' : '#f0f7ff' }}>
        <div style={{ maxWidth: '68rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1rem,2vw,1.5rem)' }}>
          {[
            { icon: 'fa-eye', title: 'OUR VISION', text: 'To be the globally recognized standard for enterprise IT infrastructure — where every client operates on an uninterrupted, secure, and infinitely scalable technology foundation.' },
            { icon: 'fa-bullseye', title: 'OUR MISSION', text: 'To deliver mission-critical IT infrastructure, proactive cybersecurity, and unwavering 24/7 support that eliminates downtime, secures data, and drives long-term business growth.' },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{ background: cb, border: `1px solid ${bdr}`, borderRadius: '1.5rem', padding: 'clamp(1.5rem,3vw,2.5rem)', transition: 'all 0.3s', height: '100%' }} className="service-hover-card">
                <div style={{ width: 48, height: 48, background: d ? 'rgba(16,185,129,0.1)' : '#eff6ff', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ac, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  <i className={`fas ${c.icon}`}></i>
                </div>
                <h3 style={{ fontSize: 'clamp(1rem,1.8vw,1.3rem)', fontWeight: 900, color: h, marginBottom: '0.75rem' }}>{c.title}</h3>
                <p style={{ color: t, fontSize: 'clamp(0.82rem,1.2vw,0.95rem)', lineHeight: 1.7 }}>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(2rem,4vh,3rem) 1.5rem' }}>
        <div style={{ maxWidth: '68rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[
            { val: '100%', label: 'Client Retained' },
            { val: '99.9%', label: 'Uptime SLA' },
            { val: '24/7', label: 'NOC Active' },
            { val: '<15m', label: 'Response Time' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, color: h }}>{s.val}</div>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: d ? '#555' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem,6vh,5rem) 1.5rem', background: d ? '#0a0a0a' : '#fff' }}>
        <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,4vh,4rem)' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: ac, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem' }}>Our Values</span>
              <h2 style={{ fontSize: 'clamp(1.4rem,3.5vw,2.5rem)', fontWeight: 900, color: h }}>WHAT WE <span style={{ color: ac }}>STAND FOR</span></h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(0.75rem,1.5vw,1.25rem)' }}>
            {[
              { i: 'fa-lock', t: 'Security First', d: 'Every solution starts with security. Enterprise-grade defenses protect your data and systems.' },
              { i: 'fa-server', t: 'Zero Downtime', d: 'Redundant architectures, automated failover, continuous monitoring. 99.9%+ uptime guaranteed.' },
              { i: 'fa-handshake', t: 'Client Partnership', d: 'We operate as an extension of your team. Your IT goals become our operational mandate.' },
              { i: 'fa-gem', t: 'Excellence', d: 'No shortcuts. Every decision is engineered for long-term performance and reliability.' },
              { i: 'fa-bolt', t: 'Rapid Response', d: '15-minute SLA on critical issues. Our NOC team acts first and reports after.' },
              { i: 'fa-code-branch', t: 'Innovation', d: 'Continuously adopting proven technologies that give our clients a competitive edge.' },
            ].map((v, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div style={{ background: cb, border: `1px solid ${bdr}`, borderRadius: '1rem', padding: 'clamp(1rem,2vw,1.5rem)', transition: 'all 0.3s' }} className="service-hover-card">
                  <div style={{ width: 40, height: 40, background: d ? 'rgba(16,185,129,0.1)' : '#eff6ff', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ac, fontSize: '0.95rem', marginBottom: '1rem' }}>
                    <i className={`fas ${v.i}`}></i>
                  </div>
                  <h3 style={{ fontSize: 'clamp(0.85rem,1.2vw,1rem)', fontWeight: 700, color: h, marginBottom: '0.5rem' }}>{v.t}</h3>
                  <p style={{ color: t, fontSize: 'clamp(0.72rem,1vw,0.85rem)', lineHeight: 1.6 }}>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile grid fix */}
      <style>{`
        @media (max-width: 640px) {
          section > div[style*="grid-template-columns: 1fr 1.2fr"] { grid-template-columns: 1fr !important; }
          section > div > div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}