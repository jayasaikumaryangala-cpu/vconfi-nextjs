'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ScheduleModal from '@/components/ScheduleModal';
import { useTheme } from '@/components/ThemeProvider';

const CyberCanvas = dynamic(() => import('@/components/CyberCanvas'), { ssr: false });

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, isVisible: v };
}

function Reveal({ children, className = '', delay = 0, direction = 'up' }: { children: React.ReactNode; className?: string; delay?: number; direction?: 'up' | 'left' | 'right' }) {
  const { ref, isVisible } = useReveal();
  const t: Record<string, string> = { up: 'translateY(40px)', left: 'translateX(-40px)', right: 'translateX(40px)' };
  return (
    <div ref={ref} className={className} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate(0)' : t[direction],
      transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    }}>{children}</div>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [activeService, setActiveService] = useState(0);
  const [autoRotatePaused, setAutoRotatePaused] = useState(false);
  const { theme } = useTheme();
  const d = theme === 'dark';

  // Auto-rotate service tabs every 4s, pause 10s on manual click
  useEffect(() => {
    if (autoRotatePaused) {
      const resume = setTimeout(() => setAutoRotatePaused(false), 10000);
      return () => clearTimeout(resume);
    }
    const timer = setInterval(() => {
      setActiveService(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoRotatePaused]);

  const handleServiceClick = (i: number) => {
    setActiveService(i);
    setAutoRotatePaused(true);
  };

  const services = [
    {
      icon: 'fa-network-wired', num: '01',
      title: 'Enterprise Network Infrastructure',
      desc: 'End-to-end network architecture — core switching to edge connectivity. Networks that scale with your business.',
      href: '/services/network-infrastructure',
      features: ['Core & access layer design', 'Redundant fiber backbone', 'Network modernization', 'Multi-layer segmentation'],
      subs: [
        { name: 'Core Architecture', href: '/services/core-access-architecture' },
        { name: 'Fiber Backbone', href: '/services/redundant-fiber-backbone' },
        { name: 'Modernization', href: '/services/network-modernization' },
        { name: 'Segmentation', href: '/services/multi-layer-segmentation' },
      ]
    },
    {
      icon: 'fa-shield-halved', num: '02',
      title: 'Cybersecurity & Threat Defense',
      desc: 'Multi-layered perimeter defense, endpoint protection, and 24/7 threat monitoring. Your digital fortress.',
      href: '/services/cybersecurity',
      features: ['Next-gen firewall deployment', 'Endpoint detection & response', 'VPN & secure access', '24/7 threat monitoring'],
      subs: [
        { name: 'Next-Gen Firewall', href: '/services/next-gen-firewall' },
        { name: 'VPN & Secure Access', href: '/services/vpn-secure-access' },
        { name: 'Endpoint Protection', href: '/services/endpoint-protection' },
        { name: 'Threat Detection', href: '/services/threat-detection' },
      ]
    },
    {
      icon: 'fa-satellite-dish', num: '03',
      title: 'NOC Monitoring & Recovery',
      desc: 'Round-the-clock network operations, proactive incident response, and automated disaster recovery.',
      href: '/services/monitoring-recovery',
      features: ['24/7 NOC operations', 'Automated backup solutions', 'Disaster recovery planning', 'Performance optimization'],
      subs: [
        { name: 'NOC Monitoring', href: '/services/noc-monitoring' },
        { name: 'Backup Solutions', href: '/services/backup-solutions' },
        { name: 'Disaster Recovery', href: '/services/disaster-recovery' },
        { name: 'Performance Tuning', href: '/services/performance-optimization' },
      ]
    },
  ];

  const faqs = [
    { q: 'What IT services does VCONFI provide?', a: 'We deliver end-to-end enterprise IT — network infrastructure design, cybersecurity implementation, server management, NOC monitoring, and disaster recovery. Every solution is architected specifically for your business requirements.' },
    { q: 'Do you offer 24/7 support?', a: 'Yes. Our Network Operations Center operates around the clock with dedicated engineers monitoring your infrastructure. Critical incidents trigger immediate response with guaranteed SLA times.' },
    { q: 'What industries do you serve?', a: 'Healthcare, finance, manufacturing, retail, and education — any industry that demands bulletproof uptime, regulatory compliance, and enterprise-grade security posture.' },
    { q: 'How do you approach security?', a: 'Zero-trust architecture from the ground up. Multi-layered defenses including next-gen firewalls, endpoint protection, encrypted communications, continuous vulnerability assessments, and real-time threat monitoring.' },
  ];

  const ac = d ? '#10b981' : '#0A64BC'; // accent color

  return (
    <>
    <ScheduleModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} />

    <div className="flex flex-col w-full" style={{ background: d ? '#0a0a0a' : '#fff' }}>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden" style={{ background: d ? 'linear-gradient(180deg,#0a0a0a,#0f0f0f,#0a0a0a)' : 'linear-gradient(180deg,#f0f7ff,#fff,#f8fbff)' }} id="home">
        <CyberCanvas />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: d ? 'rgba(16,185,129,0.04)' : 'rgba(59,130,246,0.04)' }}></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-6 pt-24 md:pt-28 pb-16">
          <Reveal>
            <h1 className="text-[clamp(2.2rem,6.5vw,5rem)] font-black leading-[1.05] tracking-[-0.03em] mb-5 md:mb-7" style={{ color: d ? '#fff' : '#0a1e3d' }}>
              WE SECURE
              <br />
              <span style={{ color: ac }}>YOUR DIGITAL</span>
              <br />
              INFRASTRUCTURE
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm md:text-lg max-w-md mx-0 mb-7 md:mb-10 leading-relaxed" style={{ color: d ? '#888' : '#64748b' }}>
              Enterprise-grade network architecture, cybersecurity, and 24/7 managed operations — engineered for zero downtime.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            {/* Desktop buttons */}
            <div className="hidden sm:flex gap-3 mb-12 md:mb-16">
              <a href="#services" className="group inline-flex items-center gap-2 font-bold py-3.5 px-7 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm" style={{ background: d ? '#10b981' : '#0a1e3d', color: d ? '#000' : '#fff' }}>
                Explore Services
                <i className="fas fa-arrow-down text-xs group-hover:translate-y-0.5 transition-transform"></i>
              </a>
              <button onClick={() => setScheduleOpen(true)} className="inline-flex items-center gap-2 font-bold py-3.5 px-7 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm" style={{ background: d ? '#141414' : '#fff', color: d ? '#e8e8e8' : '#0a1e3d', border: `1px solid ${d ? '#2a2a2a' : '#e2e8f0'}` }}>
                <i style={{ color: ac }}>📅</i>
                Schedule Consultation
              </button>
            </div>
            {/* Mobile buttons */}
            <div className="sm:hidden flex flex-col gap-2.5 mb-10">
              <a href="#services" className="flex items-center justify-center gap-2 font-bold py-4 rounded-2xl shadow-lg text-sm w-full" style={{ background: d ? '#10b981' : '#0a1e3d', color: d ? '#000' : '#fff' }}>
                <i className="fas fa-arrow-down text-xs"></i>
                Explore Our Services
              </a>
              <button onClick={() => setScheduleOpen(true)} className="flex items-center justify-center gap-2 font-bold py-4 rounded-2xl text-sm w-full" style={{ background: d ? '#141414' : '#eff6ff', color: d ? '#e8e8e8' : ac, border: `1px solid ${d ? '#2a2a2a' : '#dbeafe'}` }}>
                📅 Book Free Consultation
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="grid grid-cols-3 gap-4 md:gap-10 max-w-sm md:max-w-xl">
              {[
                { val: '99.9%', label: 'Uptime SLA' },
                { val: '24/7', label: 'NOC Active' },
                { val: '0', label: 'Breaches' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-xl md:text-3xl font-black" style={{ color: d ? '#fff' : '#0a1e3d' }}>{s.val}</div>
                  <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.12em] mt-1" style={{ color: d ? '#555' : '#94a3b8' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="border-y py-3 overflow-hidden" style={{ borderColor: d ? '#1e1e1e' : '#dbeafe', background: d ? '#0f0f0f' : 'rgba(239,246,255,0.5)' }}>
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 25s linear infinite' }}>
          {[1,2].map(g => (
            <div key={g} className="flex items-center gap-6 md:gap-8 px-4">
              {['NETWORK INFRASTRUCTURE', 'CYBERSECURITY', 'NOC MONITORING', 'DISASTER RECOVERY', 'ENDPOINT PROTECTION', 'FIREWALL MANAGEMENT', 'VPN SOLUTIONS', 'SERVER MANAGEMENT'].map((t, i) => (
                <span key={i} className="flex items-center gap-6 md:gap-8">
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.1em]" style={{ color: d ? 'rgba(16,185,129,0.3)' : 'rgba(10,100,188,0.4)' }}>{t}</span>
                  <span className="text-[8px]" style={{ color: d ? 'rgba(16,185,129,0.15)' : 'rgba(10,100,188,0.2)' }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== SERVICES — Interactive Tab/Accordion Layout ===== */}
      <section className="py-16 md:py-28 px-4 md:px-6" style={{ background: d ? '#0a0a0a' : '#fff' }} id="services">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-3 block" style={{ color: ac }}>What We Do</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight" style={{ color: d ? '#fff' : '#0a1e3d' }}>
                COMPREHENSIVE <span style={{ color: ac }}>IT SERVICES</span>
              </h2>
            </div>
          </Reveal>

          {/* Service Tab Navigation */}
          <Reveal delay={0.1}>
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 mb-8 md:mb-10">
              {services.map((s, i) => (
                <button key={i} onClick={() => handleServiceClick(i)}
                  className="flex-1 flex items-center gap-3 px-5 py-4 md:py-5 rounded-xl font-bold text-sm transition-all duration-300 text-left"
                  style={{
                    background: activeService === i ? ac : (d ? '#141414' : '#f8fafc'),
                    color: activeService === i ? (d ? '#000' : '#fff') : (d ? '#888' : '#64748b'),
                    border: `1px solid ${activeService === i ? ac : (d ? '#1e1e1e' : '#e2e8f0')}`,
                    transform: activeService === i ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: activeService === i ? `0 8px 24px ${d ? 'rgba(16,185,129,0.2)' : 'rgba(10,100,188,0.15)'}` : 'none',
                  }}>
                  <span className="text-2xl md:text-3xl font-black opacity-30">{s.num}</span>
                  <div>
                    <i className={`fas ${s.icon} mr-2 text-xs`}></i>
                    <span className="text-xs md:text-sm">{s.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active Service Content */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden" style={{ background: d ? '#141414' : '#f8fafc', border: `1px solid ${d ? '#1e1e1e' : '#e2e8f0'}` }}>
              <div className="p-6 md:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left — Description + Features */}
                  <div>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: d ? '#aaa' : '#475569' }}>
                      {services[activeService].desc}
                    </p>
                    <div className="space-y-3">
                      {services[activeService].features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 group">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all" style={{ background: d ? 'rgba(16,185,129,0.1)' : 'rgba(10,100,188,0.08)' }}>
                            <i className="fas fa-check text-[10px]" style={{ color: ac }}></i>
                          </div>
                          <span className="text-sm font-semibold" style={{ color: d ? '#ccc' : '#1e293b' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={services[activeService].href} className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider mt-6 group/link transition-colors" style={{ color: ac }}>
                      Explore {services[activeService].title.split(' ')[0]}
                      <i className="fas fa-arrow-right text-xs group-hover/link:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>

                  {/* Right — Sub-service cards grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {services[activeService].subs.map((sub, j) => (
                      <Link key={j} href={sub.href} className="group p-4 md:p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 text-center" style={{ background: d ? '#1a1a1a' : '#fff', border: `1px solid ${d ? '#2a2a2a' : '#e2e8f0'}`, boxShadow: `0 2px 8px ${d ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.03)'}` }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 transition-all" style={{ background: d ? 'rgba(16,185,129,0.1)' : 'rgba(10,100,188,0.08)' }}>
                          <i className={`fas ${services[activeService].icon} text-sm`} style={{ color: ac }}></i>
                        </div>
                        <span className="text-xs md:text-sm font-bold block" style={{ color: d ? '#ddd' : '#1e293b' }}>{sub.name}</span>
                        <span className="text-[10px] mt-1 block opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ac }}>Learn More →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-16 md:py-28 px-4 md:px-6" style={{ background: d ? '#0f0f0f' : 'linear-gradient(to bottom, rgba(239,246,255,0.4), #fff)' }} id="why-us">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-3 block" style={{ color: ac }}>Why VCONFI</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight" style={{ color: d ? '#fff' : '#0a1e3d' }}>
                BUILT FOR <span style={{ color: ac }}>ZERO FAILURE</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {[
              { icon: 'fa-server', title: 'Redundant Architecture', items: ['N+1 redundancy', 'Dual ISP connectivity', 'Auto failover', 'Load-balanced clusters'] },
              { icon: 'fa-lock', title: 'Zero-Trust Security', items: ['Micro-segmentation', 'E2E encryption', 'Continuous audits', 'Compliance-first'] },
              { icon: 'fa-eye', title: '24/7 Visibility', items: ['Real-time dashboards', 'Proactive alerts', 'Incident playbooks', 'Monthly reports'] },
              { icon: 'fa-bolt', title: 'Rapid Response', items: ['15-min SLA critical', '4-hour resolution', 'Auto remediation', 'Root cause analysis'] },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group rounded-xl md:rounded-2xl p-4 md:p-7 transition-all duration-300 hover:-translate-y-1 h-full" style={{ background: d ? '#141414' : '#fff', border: `1px solid ${d ? '#1e1e1e' : '#e2e8f0'}` }}>
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-5 transition-all duration-300" style={{ background: d ? 'rgba(16,185,129,0.1)' : '#eff6ff', color: ac }}>
                    <i className={`fas ${c.icon} text-sm md:text-base`}></i>
                  </div>
                  <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4" style={{ color: d ? '#e8e8e8' : '#0a1e3d' }}>{c.title}</h3>
                  <ul className="space-y-2 md:space-y-2.5">
                    {c.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[11px] md:text-xs leading-snug" style={{ color: d ? '#888' : '#64748b' }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: ac }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-16 md:py-28 px-4 md:px-6" style={{ background: d ? '#0a0a0a' : '#fff' }} id="process">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-3 block" style={{ color: ac }}>The Protocol</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight" style={{ color: d ? '#fff' : '#0a1e3d' }}>
                HOW WE <span style={{ color: ac }}>DELIVER</span>
              </h2>
            </div>
          </Reveal>

          {[
            { num: '01', title: 'DISCOVER & ASSESS', desc: 'Full infrastructure audit. We map every node, every vulnerability, every opportunity for improvement.' },
            { num: '02', title: 'ARCHITECT & PLAN', desc: 'Custom blueprints designed for your scale, your compliance needs, your growth trajectory.' },
            { num: '03', title: 'DEPLOY & VALIDATE', desc: 'Phased zero-disruption rollout. Every change tested, verified, documented.' },
            { num: '04', title: 'MONITOR & OPTIMIZE', desc: '24/7 NOC operations. Continuous improvement. Your infrastructure gets better every day.' },
          ].map((step, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group flex items-start gap-4 md:gap-8 py-5 md:py-8 border-b transition-all" style={{ borderColor: d ? '#1e1e1e' : '#f1f5f9' }}>
                <span className="text-2xl md:text-5xl lg:text-6xl font-black flex-shrink-0 w-12 md:w-24 leading-none" style={{ color: d ? '#1a2a1a' : '#dbeafe' }}>{step.num}</span>
                <div className="pt-1">
                  <h3 className="text-sm md:text-lg lg:text-xl font-bold mb-1 tracking-wide" style={{ color: d ? '#e8e8e8' : '#0a1e3d' }}>{step.title}</h3>
                  <p className="text-xs md:text-sm leading-relaxed max-w-md" style={{ color: d ? '#888' : '#64748b' }}>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CLIENTS ===== */}
      <section className="py-14 md:py-20 overflow-hidden" style={{ background: d ? '#0f0f0f' : '#fafbff' }} id="clients">
        <Reveal>
          <div className="text-center mb-8 md:mb-12 px-6">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-3 block" style={{ color: ac }}>Trusted By</span>
            <h2 className="text-xl md:text-3xl font-black tracking-tight" style={{ color: d ? '#e8e8e8' : '#0a1e3d' }}>OUR CLIENTS</h2>
          </div>
        </Reveal>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10" style={{ background: `linear-gradient(to right, ${d ? '#0f0f0f' : '#fafbff'}, transparent)` }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10" style={{ background: `linear-gradient(to left, ${d ? '#0f0f0f' : '#fafbff'}, transparent)` }}></div>
          <div className="flex w-max items-center" style={{ animation: 'marquee 20s linear infinite' }}>
            {[1,2,3,4].map(g => (
              <div key={g} className="flex gap-12 md:gap-16 items-center px-6 md:px-8">
                <div className="p-3 md:p-4 rounded-xl" style={{ background: d ? '#1a1a1a' : '#fff', border: `1px solid ${d ? '#2a2a2a' : '#e8ecf0'}` }}>
                  <img src="/images/client1.png" alt="Anantha Technologies" className="h-8 md:h-12 object-contain" style={{ filter: d ? 'brightness(1.5) contrast(1.1)' : 'none' }} />
                </div>
                <div className="p-3 md:p-4 rounded-xl" style={{ background: d ? '#1a1a1a' : '#fff', border: `1px solid ${d ? '#2a2a2a' : '#e8ecf0'}` }}>
                  <img src="/images/client2.png" alt="Aditya Hospital" className="h-8 md:h-12 object-contain" style={{ filter: d ? 'brightness(1.5) contrast(1.1)' : 'none' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 md:py-28 px-4 md:px-6" style={{ background: d ? '#0a0a0a' : '#fff' }} id="faq">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-8 md:mb-14">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-3 block" style={{ color: ac }}>FAQ</span>
              <h2 className="text-xl md:text-3xl font-black tracking-tight" style={{ color: d ? '#e8e8e8' : '#0a1e3d' }}>COMMON QUESTIONS</h2>
            </div>
          </Reveal>
          <div className="space-y-2.5">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300" style={{ border: `1px solid ${activeFaq === i ? ac : (d ? '#1e1e1e' : '#f1f5f9')}`, background: activeFaq === i ? (d ? 'rgba(16,185,129,0.05)' : 'rgba(239,246,255,0.5)') : 'transparent' }}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full text-left px-4 md:px-6 py-4 flex justify-between items-center gap-3">
                    <span className="font-bold text-sm md:text-base" style={{ color: d ? '#e8e8e8' : '#0a1e3d' }}>{faq.q}</span>
                    <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300" style={{ background: activeFaq === i ? ac : (d ? '#1a1a1a' : '#f1f5f9'), color: activeFaq === i ? '#fff' : (d ? '#555' : '#94a3b8'), transform: activeFaq === i ? 'rotate(45deg)' : '' }}>
                      <i className="fas fa-plus text-[10px]"></i>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-400 ${activeFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 md:px-6 pb-4 text-xs md:text-sm leading-relaxed" style={{ color: d ? '#888' : '#64748b' }}>{faq.a}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="py-16 md:py-28 px-4 md:px-6 relative overflow-hidden" style={{ background: d ? 'linear-gradient(to bottom,#050505,#000)' : 'linear-gradient(to bottom,#0a1e3d,#071428)' }} id="contact">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-8 md:mb-14">
              <span className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-[0.15em] mb-3 block">Connect</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
                LET&apos;S <span style={{ color: d ? '#10b981' : '#60a5fa' }}>SECURE</span> YOUR FUTURE
              </h2>
              <p className="text-xs md:text-sm text-blue-200/50 max-w-md mx-auto">Ready to bulletproof your infrastructure? Start with a free consultation.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl" style={{ background: d ? '#111' : '#fff' }}>
              {/* Contact Info Panel */}
              <div className="lg:col-span-2 p-6 md:p-10 border-b lg:border-b-0 lg:border-r" style={{ background: d ? '#161616' : 'linear-gradient(135deg,#f0f7ff,#fff)', borderColor: d ? '#1e1e1e' : '#e2e8f0' }}>
                <h3 className="text-base md:text-lg font-black mb-5 md:mb-7" style={{ color: d ? '#e8e8e8' : '#0a1e3d' }}>Get In Touch</h3>
                <div className="space-y-4 md:space-y-5">
                  <a href="mailto:info@vconfi.com" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all shadow-sm" style={{ background: d ? 'rgba(16,185,129,0.1)' : '#eff6ff', color: ac }}>
                      <i className="fas fa-envelope text-xs md:text-sm"></i>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: d ? '#555' : '#94a3b8' }}>Email</div>
                      <span className="text-xs md:text-sm font-medium" style={{ color: d ? '#aaa' : '#475569' }}>info@vconfi.com</span>
                    </div>
                  </a>
                  <a href="tel:+919866926678" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all shadow-sm" style={{ background: d ? 'rgba(16,185,129,0.1)' : '#eff6ff', color: ac }}>
                      <i className="fas fa-phone-alt text-xs md:text-sm"></i>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: d ? '#555' : '#94a3b8' }}>Phone</div>
                      <span className="text-xs md:text-sm font-medium" style={{ color: d ? '#aaa' : '#475569' }}>+91 98669 26678</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center shadow-sm" style={{ background: d ? 'rgba(16,185,129,0.1)' : '#eff6ff', color: ac }}>
                      <i className="fas fa-map-marker-alt text-xs md:text-sm"></i>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: d ? '#555' : '#94a3b8' }}>Location</div>
                      <span className="text-xs md:text-sm font-medium" style={{ color: d ? '#aaa' : '#475569' }}>Pragathi Nagar, Hyderabad</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-8 pt-5 space-y-2" style={{ borderTop: `1px solid ${d ? '#1e1e1e' : '#e2e8f0'}` }}>
                  <a href="https://wa.me/919866926678?text=Hey%2C%20looking%20for%20your%20services" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25d366] hover:bg-[#1fb855] text-white font-bold py-3 rounded-lg transition-all text-xs md:text-sm flex items-center justify-center gap-2">
                    <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                  </a>
                  <button onClick={() => setScheduleOpen(true)} className="w-full font-bold py-3 rounded-lg transition-all text-xs md:text-sm flex items-center justify-center gap-2" style={{ background: d ? '#10b981' : '#0a1e3d', color: d ? '#000' : '#fff' }}>
                    <i className="far fa-calendar-check"></i> Schedule a Meeting
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3 p-6 md:p-10">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                    <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-5">
                      <i className="fas fa-check text-xl"></i>
                    </div>
                    <h3 className="text-lg font-black mb-2" style={{ color: d ? '#e8e8e8' : '#0a1e3d' }}>Message Sent!</h3>
                    <p className="text-xs" style={{ color: d ? '#888' : '#64748b' }}>We&apos;ll get back to you within the next 1 hour.</p>
                    <button onClick={() => setFormSubmitted(false)} className="mt-4 text-xs font-bold hover:underline" style={{ color: ac }}>Send another message</button>
                  </div>
                ) : (
                  <form className="space-y-4" autoComplete="off" onSubmit={async (e) => {
                    e.preventDefault();
                    setFormLoading(true); setFormError('');
                    try {
                      const res = await fetch('https://formspree.io/f/xpqyadpo', { method: 'POST', body: new FormData(e.currentTarget), headers: { Accept: 'application/json' } });
                      if (res.ok) setFormSubmitted(true);
                      else setFormError('Something went wrong. Please try again.');
                    } catch { setFormError('Network error. Check your connection.'); }
                    finally { setFormLoading(false); }
                  }}>
                    <h3 className="text-base md:text-lg font-black mb-1" style={{ color: d ? '#e8e8e8' : '#0a1e3d' }}>Send a Message</h3>
                    <p className="text-xs mb-4" style={{ color: d ? '#888' : '#94a3b8' }}>Fill out the form and our team will respond within the next 1 hour.</p>
                    <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                    {formError && <div className="bg-red-50 border border-red-200 rounded-lg p-2.5 text-red-600 text-xs font-semibold"><i className="fas fa-exclamation-circle mr-1"></i>{formError}</div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: d ? '#888' : '#94a3b8' }}>Name *</label>
                        <input name="name" type="text" required className="w-full px-3.5 py-3 rounded-lg text-sm transition-all focus:outline-none" style={{ background: d ? '#1a1a1a' : '#f8fafc', border: `1px solid ${d ? '#2a2a2a' : '#e2e8f0'}`, color: d ? '#e8e8e8' : '#0a1e3d' }} placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: d ? '#888' : '#94a3b8' }}>Email *</label>
                        <input name="email" type="email" required className="w-full px-3.5 py-3 rounded-lg text-sm transition-all focus:outline-none" style={{ background: d ? '#1a1a1a' : '#f8fafc', border: `1px solid ${d ? '#2a2a2a' : '#e2e8f0'}`, color: d ? '#e8e8e8' : '#0a1e3d' }} placeholder="john@company.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: d ? '#888' : '#94a3b8' }}>Service *</label>
                      <select name="service" required className="w-full px-3.5 py-3 rounded-lg text-sm focus:outline-none" style={{ background: d ? '#1a1a1a' : '#f8fafc', border: `1px solid ${d ? '#2a2a2a' : '#e2e8f0'}`, color: d ? '#ccc' : '#475569' }}>
                        <option>Network Infrastructure</option>
                        <option>Cybersecurity & Threat Defense</option>
                        <option>NOC Monitoring & Recovery</option>
                        <option>Complete IT Audit</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: d ? '#888' : '#94a3b8' }}>Message *</label>
                      <textarea name="message" rows={3} required className="w-full px-3.5 py-3 rounded-lg text-sm resize-none transition-all focus:outline-none" style={{ background: d ? '#1a1a1a' : '#f8fafc', border: `1px solid ${d ? '#2a2a2a' : '#e2e8f0'}`, color: d ? '#e8e8e8' : '#0a1e3d' }} placeholder="Tell us about your needs..."></textarea>
                    </div>
                    <button type="submit" disabled={formLoading} className="w-full font-bold py-3.5 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60" style={{ background: d ? '#10b981' : '#0a1e3d', color: d ? '#000' : '#fff' }}>
                      {formLoading ? <><i className="fas fa-spinner fa-spin text-xs"></i> Sending...</> : <><i className="fas fa-paper-plane text-xs"></i> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
    </>
  );
}
