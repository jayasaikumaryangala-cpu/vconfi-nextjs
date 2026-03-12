'use client';
import { useTheme } from '@/components/ThemeProvider';

export default function CookiePolicy() {
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
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: h, marginBottom: '0.5rem' }}>Cookie Policy</h1>
          <p style={{ color: sub, fontSize: '0.85rem' }}>Last Updated: March 2026</p>
        </div>
        <div style={{ background: card, border: `1px solid ${border}`, borderRadius: '1rem', padding: 'clamp(1.5rem,3vw,2.5rem)' }}>
          {[
            { title: '1. What Are Cookies?', content: 'Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and provide information to site owners.' },
            { title: '2. How We Use Cookies', content: null, list: ['Essential Cookies - required for the operation of our website.', 'Analytical/Performance Cookies - allow us to count visitors and see how they move around the website.', 'Functionality Cookies - used to recognize you when you return, enabling personalized content and preferences.'] },
            { title: '3. Third-Party Cookies', content: 'Third parties such as analytics providers may also use cookies over which we have no control. These are likely analytical/performance or targeting cookies.' },
            { title: '4. Managing Cookies', content: 'You can block cookies by activating the setting on your browser that allows you to refuse all or some cookies. However, blocking all cookies may prevent you from accessing parts of our website.' },
            { title: '5. Contact Us', content: 'If you have questions about our use of cookies, please contact us:' },
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
            <p style={{ color: t, fontSize: '0.85rem' }}>Email: privacy@vconfi.com</p>
            <p style={{ color: t, fontSize: '0.85rem' }}>VCONFI Global IT Solutions, Plot 12-401, Sri Sainath Nilayam, NRI Colony, Pragathi Nagar, Hyderabad 500090</p>
          </div>
        </div>
      </div>
    </div>
  );
}
