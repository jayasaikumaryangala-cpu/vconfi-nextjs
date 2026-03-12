'use client';

import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';

export default function NotFound() {
  const { theme } = useTheme();
  const d = theme === 'dark';
  const ac = d ? '#10b981' : '#0A64BC';

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: d ? '#0a0a0a' : '#f8fafc' }}>
      <div className="text-center max-w-md">
        <div className="text-[8rem] md:text-[12rem] font-black leading-none" style={{ color: d ? '#1a1a1a' : '#e2e8f0' }}>404</div>
        <h1 className="text-2xl md:text-3xl font-black mb-3" style={{ color: d ? '#fff' : '#0a1e3d' }}>
          Page Not Found
        </h1>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: d ? '#888' : '#64748b' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg text-sm transition-all hover:-translate-y-0.5 shadow-md" style={{ background: ac, color: d ? '#000' : '#fff' }}>
            <i className="fas fa-home text-xs"></i> Back to Home
          </Link>
          <Link href="/#contact" className="inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg text-sm transition-all" style={{ background: d ? '#141414' : '#fff', color: d ? '#e8e8e8' : '#0a1e3d', border: `1px solid ${d ? '#2a2a2a' : '#e2e8f0'}` }}>
            <i className="fas fa-envelope text-xs"></i> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
