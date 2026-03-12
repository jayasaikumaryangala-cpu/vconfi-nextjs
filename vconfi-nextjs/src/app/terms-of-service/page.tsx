'use client';
import { useTheme } from '@/components/ThemeProvider';

export default function TermsAndConditions() {
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
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: h, marginBottom: '0.5rem' }}>Terms and Conditions</h1>
          <p style={{ color: sub, fontSize: '0.85rem' }}>Last Updated: March 2026</p>
        </div>
        <div style={{ background: card, border: `1px solid ${border}`, borderRadius: '1rem', padding: 'clamp(1.5rem,3vw,2.5rem)' }}>
          {[
            { title: '1. Acceptance of Terms', content: 'By accessing and using the website and services of VCONFI Global IT Solutions, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.' },
            { title: '2. Description of Services', content: 'VCONFI provides enterprise IT infrastructure, cybersecurity, network engineering, and managed IT support services. Specific services are governed by separate Service Level Agreements (SLAs).' },
            { title: '3. User Obligations', content: null, list: ['Violate any applicable laws, regulations, or third-party rights.', 'Attempt to bypass or compromise any security measures.', 'Use our services to transmit malware, viruses, or destructive code.', 'Interfere with the proper working of our infrastructure.'] },
            { title: '4. Intellectual Property', content: 'All content, designs, logos, text, graphics, and other intellectual property on this website are owned by VCONFI. You may not reproduce, distribute, or modify any content without our express written consent.' },
            { title: '5. Limitation of Liability', content: 'To the maximum extent permitted by law, VCONFI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services.' },
            { title: '6. Contact Information', content: 'For any questions regarding these Terms and Conditions, please contact our legal team:' },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(1rem,2vw,1.3rem)', fontWeight: 800, color: h, marginBottom: '0.75rem' }}>{s.title}</h2>
              {s.content && <p style={{ color: t, fontSize: 'clamp(0.8rem,1.2vw,0.92rem)', lineHeight: 1.7 }}>{s.content}</p>}
              {s.list && (
                <>
                  <p style={{ color: t, fontSize: 'clamp(0.8rem,1.2vw,0.92rem)', lineHeight: 1.7, marginBottom: '0.5rem' }}>When using our services, you agree not to:</p>
                  <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                    {s.list.map((li, j) => <li key={j} style={{ color: t, fontSize: 'clamp(0.78rem,1.1vw,0.9rem)', lineHeight: 1.7, marginBottom: '0.5rem' }}>{li}</li>)}
                  </ul>
                </>
              )}
            </div>
          ))}
          <div style={{ background: d ? '#1a1a1a' : '#f8fafc', border: `1px solid ${border}`, borderRadius: '0.75rem', padding: '1.25rem' }}>
            <p style={{ color: t, fontSize: '0.85rem' }}>Email: legal@vconfi.com</p>
            <p style={{ color: t, fontSize: '0.85rem' }}>VCONFI Global IT Solutions, Plot 12-401, Sri Sainath Nilayam, NRI Colony, Pragathi Nagar, Hyderabad 500090</p>
          </div>
        </div>
      </div>
    </div>
  );
}
