'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useTheme } from '@/components/ThemeProvider';

const ReportIncidentModal = dynamic(() => import('@/components/ReportIncidentModal'), { ssr: false });
const ScheduleModal = dynamic(() => import('@/components/ScheduleModal'), { ssr: false });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [incidentOpen, setIncidentOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '/', icon: 'fa-home' },
    { label: 'About', href: '/about', icon: 'fa-info-circle' },
    { label: 'Services', href: '/#services', icon: 'fa-cogs' },
    { label: 'Contact Us', href: '/#contact', icon: 'fa-envelope' },
  ];

  const d = theme === 'dark';
  const ac = d ? '#10b981' : '#0A64BC';

  return (
    <>
      <ReportIncidentModal isOpen={incidentOpen} onClose={() => setIncidentOpen(false)} />
      <ScheduleModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? `${d ? 'bg-[#0a0a0a]/95' : 'bg-white/95'} backdrop-blur-xl shadow-lg py-2`
          : `${d ? 'bg-[#0a0a0a]/60' : 'bg-white/60'} backdrop-blur-md py-3 md:py-4`
        }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo — bigger */}
          <Link href="/" className="flex items-center gap-3 no-underline group">
            <div className="relative">
              <img src="/images/new_logo.png" alt="VCONFI" className="w-11 h-11 md:w-12 md:h-12 object-contain rounded-lg group-hover:scale-110 transition-transform" />
              <div className={`absolute -inset-1 ${d ? 'bg-emerald-400/10 group-hover:bg-emerald-400/20' : 'bg-blue-400/10 group-hover:bg-blue-400/20'} rounded-xl blur-sm transition-colors -z-10`}></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-black tracking-tight leading-none ${d ? 'text-white' : 'text-[#0a1e3d]'}`}>VCONFI</span>
              <span className={`text-[8px] md:text-[9px] font-bold uppercase tracking-[0.18em] leading-none mt-0.5 ${d ? 'text-emerald-400' : 'text-[#0A64BC]'}`}>Global IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-1 list-none m-0 p-0">
            {links.map((l, i) => (
              <li key={i}>
                <Link href={l.href} className={`text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-2 rounded-lg transition-all ${d ? 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10' : 'text-slate-500 hover:text-[#0A64BC] hover:bg-blue-50'
                  }`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Social Icons */}
            <button onClick={toggle} className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all text-sm ${d ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`} title={d ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <i className={`fas ${d ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button onClick={() => setIncidentOpen(true)} className="flex items-center gap-2 text-[11px] font-bold text-red-500 hover:text-white uppercase tracking-[0.08em] transition-all bg-red-50 hover:bg-red-500 px-4 py-2 rounded-lg cursor-pointer border border-red-100 hover:border-red-500">
              <span>🚨</span> Report Incident
            </button>
            <Link href="/#contact" className={`text-[11px] font-bold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all ${d ? 'bg-emerald-500 hover:bg-emerald-400 text-black' : 'bg-[#0a1e3d] hover:bg-[#0A64BC] text-white'
              }`}>
              GET STARTED
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggle} className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all text-sm ${d ? 'bg-gray-800 text-yellow-400' : 'bg-slate-100 text-slate-600'
              }`}>
              <i className={`fas ${d ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button className={`w-10 h-10 flex items-center justify-center rounded-xl ${d ? 'bg-gray-800 text-white' : 'bg-slate-50 text-[#0a1e3d]'}`}
              onClick={() => setIsOpen(!isOpen)}>
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-base`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
          <div className={`border-t px-5 py-5 flex flex-col gap-1 shadow-xl ${d ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-slate-100'}`}>
            {links.map((l, i) => (
              <Link key={i} href={l.href} onClick={() => setIsOpen(false)}
                className={`text-sm font-bold px-4 py-3.5 rounded-xl transition-all uppercase tracking-wider flex items-center gap-3 ${d ? 'text-white hover:text-emerald-400 hover:bg-emerald-400/10' : 'text-[#0a1e3d] hover:text-[#0A64BC] hover:bg-blue-50'
                  }`}>
                <i className={`fas ${l.icon} text-xs ${d ? 'text-gray-600' : 'text-slate-300'} w-5`}></i>
                {l.label}
              </Link>
            ))}
            {/* Social row */}
            <div className={`border-t mt-2 pt-3 flex flex-col gap-2 ${d ? 'border-gray-800' : 'border-slate-100'}`}>
              <button onClick={() => { setIncidentOpen(true); setIsOpen(false); }}
                className="flex items-center justify-center gap-2 bg-red-50 text-red-500 font-bold py-3 px-6 rounded-xl text-sm border border-red-100">
                <span>🚨</span> Report Incident
              </button>
              <button onClick={() => { setScheduleOpen(true); setIsOpen(false); }}
                className={`text-center font-bold py-3.5 px-6 rounded-xl text-sm shadow-md flex items-center justify-center gap-2 ${d ? 'bg-emerald-500 text-black' : 'bg-[#0a1e3d] text-white'
                  }`}>
                <i className="far fa-calendar-check text-xs"></i> Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
