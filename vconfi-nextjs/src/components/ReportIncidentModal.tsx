'use client';

import { useState, useCallback } from 'react';

export default function ReportIncidentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const e: Record<string, string> = {};
    const d = new FormData(form);
    if (!d.get('name')?.toString().trim()) e.name = 'Name required';
    const email = d.get('email')?.toString().trim() || '';
    if (!email) e.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Invalid email';
    if (!d.get('company')?.toString().trim()) e.company = 'Company required';
    if (!d.get('description')?.toString().trim()) e.description = 'Description required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/xzdjronq', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }, []);

  if (!isOpen) return null;

  const ip = (name: string) => ({
    className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-all ${errors[name] ? 'border-red-300 bg-red-50/50' : 'border-slate-200 bg-slate-50/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20'}`,
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-5"><i className="fas fa-check text-2xl"></i></div>
            <h3 className="text-xl font-black text-[#0a1e3d] mb-2">Incident Reported!</h3>
            <p className="text-slate-500 text-sm mb-3">Your report has been submitted successfully.</p>
            <p className="text-slate-400 text-xs">Our team will respond within 15 minutes for critical incidents.</p>
            <button onClick={() => { setSubmitted(false); onClose(); }} className="mt-6 bg-[#0a1e3d] text-white font-bold py-3 px-8 rounded-lg text-sm hover:bg-[#0952a5] transition-colors">Close</button>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <h2 className="text-lg font-black">Report an Incident</h2>
                    <p className="text-red-100 text-xs">Get immediate support from our NOC team</p>
                  </div>
                </div>
                <button onClick={onClose} className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"><i className="fas fa-times text-sm"></i></button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4" autoComplete="off">
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-xs font-semibold flex items-center gap-2"><i className="fas fa-exclamation-circle"></i> {error}</div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Your Name *</label>
                  <input name="name" type="text" {...ip('name')} placeholder="John Doe" />
                  {errors.name && <p className="text-red-500 text-[10px] mt-0.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Email *</label>
                  <input name="email" type="email" {...ip('email')} placeholder="john@company.com" />
                  {errors.email && <p className="text-red-500 text-[10px] mt-0.5">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Company *</label>
                <input name="company" type="text" {...ip('company')} placeholder="Your Company" />
                {errors.company && <p className="text-red-500 text-[10px] mt-0.5">{errors.company}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Severity *</label>
                  <select name="severity" required {...ip('severity')}>
                    <option value="Critical">🔴 Critical — System Down</option>
                    <option value="High">🟠 High — Major Impact</option>
                    <option value="Medium">🟡 Medium — Limited Impact</option>
                    <option value="Low">🟢 Low — Minor Issue</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Category *</label>
                  <select name="category" required {...ip('category')}>
                    <option>Network Outage</option><option>Security Breach</option><option>Server Failure</option><option>Firewall Issue</option><option>VPN Connectivity</option><option>Data Loss</option><option>Performance Degradation</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Affected Systems</label>
                <input name="affected" type="text" {...ip('affected')} placeholder="e.g., Main server, VPN gateway" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Description *</label>
                <textarea name="description" rows={3} {...ip('description')} placeholder="Describe what happened, when it started, and the impact..."></textarea>
                {errors.description && <p className="text-red-500 text-[10px] mt-0.5">{errors.description}</p>}
              </div>
              <button type="submit" disabled={loading} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60">
                {loading ? <><i className="fas fa-spinner fa-spin text-xs"></i> Submitting...</> : <><span>🚨</span> Submit Incident Report</>}
              </button>
              <p className="text-[10px] text-slate-400 text-center">Your report will be sent to our NOC team for immediate response.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
