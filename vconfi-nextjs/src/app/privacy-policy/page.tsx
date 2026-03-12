'use client';
import { useTheme } from '@/components/ThemeProvider';

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  const d = theme === 'dark';
  const bg = d ? '#0a0a0a' : '#f8fafc';
  const card = d ? '#141414' : '#fff';
  const border = d ? '#1e1e1e' : '#e2e8f0';
  const h = d ? '#fff' : '#0a1e3d';
  const t = d ? '#aaa' : '#475569';
  const sub = d ? '#888' : '#64748b';

  return (
    <div style={{ background: bg, minHeight: '100vh', paddingTop: 'clamp(5rem,10vh,7rem)', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 clamp(1rem,3vw,2rem)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: h, marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: sub, fontSize: '0.85rem' }}>Last Updated: March 2026</p>
        </div>
        <div style={{ background: card, border: `1px solid ${border}`, borderRadius: '1rem', padding: 'clamp(1.5rem,3vw,2.5rem)' }}>
          {[
            { title: '1. Introduction', content: 'VCONFI Global IT Solutions respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.' },
            { title: '2. The Data We Collect', content: null, list: ['Identity Data - first name, last name, username or similar identifier.', 'Contact Data - billing address, email address and telephone numbers.', 'Technical Data - IP address, browser type and version, time zone setting.', 'Usage Data - information about how you use our website and services.'] },
            { title: '3. How We Use Your Data', content: null, list: ['Where we need to perform the contract we have entered into with you.', 'Where it is necessary for our legitimate interests.', 'Where we need to comply with a legal obligation.'] },
            { title: '4. Data Security', content: 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.' },
            { title: '5. Contact Details', content: 'If you have any questions about this privacy policy, please contact us:' },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(1rem,2vw,1.3rem)', fontWeight: 800, color: h, marginBottom: '0.75rem' }}>{s.title}</h2>
              {s.content && <p style={{ color: t, fontSize: 'clamp(0.8rem,1.2vw,0.92rem)', lineHeight: 1.7 }}>{s.content}</p>}
              {s.list && (
                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  {s.list.map((li, j) => <li key={j} style={{ color: t, fontSize: 'clamp(0.78rem,1.1vw,0.9rem)', lineHeight: 1.7, marginBottom: '0.5rem' }}>{li}</li>)}
                </ul>
              )}
            </div>
          ))}
          <div style={{ background: d ? '#1a1a1a' : '#f8fafc', border: `1px solid ${border}`, borderRadius: '0.75rem', padding: '1.25rem' }}>
            <p style={{ fontWeight: 700, color: h, marginBottom: '0.25rem', fontSize: '0.9rem' }}>VCONFI Global IT Solutions</p>
            <p style={{ color: t, fontSize: '0.85rem' }}>Email: privacy@vconfi.com</p>
            <p style={{ color: t, fontSize: '0.85rem' }}>Plot 12-401, Sri Sainath Nilayam, NRI Colony, Pragathi Nagar, Hyderabad 500090</p>
          </div>
        </div>
      </div>
    </div>
  );
}
