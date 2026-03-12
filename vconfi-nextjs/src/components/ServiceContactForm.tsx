'use client';

import { useState, useCallback } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function ServiceContactForm({ serviceName }: { serviceName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { theme } = useTheme();
  const d = theme === 'dark';
  const ac = d ? '#10b981' : '#0A64BC';

  const PHONE = '919866926678';

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.append('_service', serviceName);
    try {
      const res = await fetch('https://formspree.io/f/xpqyadpo', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSubmitted(true);
      else setError('Something went wrong. Please try again.');
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }, [serviceName]);

  return (
    <section style={{ padding: 'clamp(3rem,6vh,5rem) 1.5rem', background: d ? 'linear-gradient(to bottom,#050505,#000)' : 'linear-gradient(to bottom,#0a1e3d,#071428)', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(1.5rem,3vw,3rem)', position: 'relative', zIndex: 10 }}>
        <div>
          <h2 style={{ fontSize: 'clamp(1.2rem,2.5vw,1.8rem)', fontWeight: 900, color: '#fff', marginBottom: '0.75rem' }}>
            Get Started with <span style={{ color: d ? '#10b981' : '#60a5fa' }}>{serviceName}</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.78rem,1.1vw,0.9rem)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Talk to our team about implementing this solution. Free consultation included.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {['Free initial consultation', 'Custom solution design', '24/7 implementation support'].map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'clamp(0.72rem,1vw,0.85rem)', color: 'rgba(255,255,255,0.7)' }}>
                <i className="fas fa-check-circle" style={{ color: d ? '#10b981' : '#60a5fa', fontSize: '0.7rem' }}></i> {f}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href={`https://wa.me/${PHONE}?text=${encodeURIComponent(`Hi, I'm interested in your ${serviceName} services.`)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#25d366', color: '#fff', fontWeight: 700, padding: '0.75rem', borderRadius: '0.5rem', fontSize: '0.82rem', textDecoration: 'none', transition: 'opacity 0.2s' }}>
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <a href="tel:+919866926678" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 700, padding: '0.75rem', borderRadius: '0.5rem', fontSize: '0.82rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>
              <i className="fas fa-phone-alt"></i> +91 98669 26678
            </a>
          </div>
        </div>

        <div style={{ background: d ? '#111' : '#fff', borderRadius: '1rem', padding: 'clamp(1.25rem,2vw,2rem)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ width: 48, height: 48, background: 'rgba(16,185,129,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '1.2rem', margin: '0 auto 1rem' }}>✓</div>
              <h3 style={{ fontWeight: 900, color: d ? '#e8e8e8' : '#0a1e3d', marginBottom: '0.5rem' }}>Message Sent!</h3>
              <p style={{ color: d ? '#888' : '#64748b', fontSize: '0.82rem' }}>We&apos;ll respond within the next 1 hour.</p>
              <button onClick={() => setSubmitted(false)} style={{ marginTop: '1rem', background: 'none', border: 'none', color: ac, fontWeight: 700, cursor: 'pointer', fontSize: '0.82rem' }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} autoComplete="off">
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '0.5rem', padding: '0.6rem', color: '#ef4444', fontSize: '0.75rem', fontWeight: 600 }}><i className="fas fa-exclamation-circle" style={{ marginRight: '0.3rem' }}></i>{error}</div>}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, color: d ? '#888' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Name *</label>
                  <input name="name" type="text" required placeholder="Your name" style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '0.5rem', border: `1px solid ${d ? '#2a2a2a' : '#e2e8f0'}`, background: d ? '#1a1a1a' : '#f8fafc', color: d ? '#e8e8e8' : '#0a1e3d', fontSize: '0.82rem', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, color: d ? '#888' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Email *</label>
                  <input name="email" type="email" required placeholder="your@email.com" style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '0.5rem', border: `1px solid ${d ? '#2a2a2a' : '#e2e8f0'}`, background: d ? '#1a1a1a' : '#f8fafc', color: d ? '#e8e8e8' : '#0a1e3d', fontSize: '0.82rem', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, color: d ? '#888' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Message *</label>
                <textarea name="message" rows={3} required placeholder={`Tell us about your ${serviceName.toLowerCase()} needs...`} style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '0.5rem', border: `1px solid ${d ? '#2a2a2a' : '#e2e8f0'}`, background: d ? '#1a1a1a' : '#f8fafc', color: d ? '#e8e8e8' : '#0a1e3d', fontSize: '0.82rem', resize: 'none', outline: 'none' }}></textarea>
              </div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: d ? '#10b981' : '#0a1e3d', color: d ? '#000' : '#fff', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontSize: '0.82rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', opacity: loading ? 0.6 : 1 }}>
                {loading ? <><i className="fas fa-spinner fa-spin" style={{ fontSize: '0.7rem' }}></i> Sending...</> : <><i className="fas fa-paper-plane" style={{ fontSize: '0.7rem' }}></i> Send Inquiry</>}
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`@media(max-width:640px){section>div[style*="grid-template-columns: 1fr 1.2fr"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
