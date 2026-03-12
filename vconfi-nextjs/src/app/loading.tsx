'use client';

import { useTheme } from '@/components/ThemeProvider';

export default function Loading() {
  const { theme } = useTheme();
  const d = theme === 'dark';

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: d ? '#0a0a0a' : '#f8fafc' }}>
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border-4 rounded-full animate-spin" style={{ borderColor: 'transparent', borderTopColor: d ? '#10b981' : '#0A64BC' }}></div>
          <div className="absolute inset-2 border-4 rounded-full animate-spin" style={{ borderColor: 'transparent', borderBottomColor: d ? '#10b981' : '#0A64BC', animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        <div className="flex items-center gap-2 justify-center mb-2">
          <img src="/images/new_logo.png" alt="VCONFI" className="w-8 h-8 object-contain rounded-lg" />
          <span className="text-lg font-black" style={{ color: d ? '#fff' : '#0a1e3d' }}>VCONFI</span>
        </div>
        <p className="text-xs font-medium" style={{ color: d ? '#666' : '#94a3b8' }}>Loading...</p>
      </div>
    </div>
  );
}
