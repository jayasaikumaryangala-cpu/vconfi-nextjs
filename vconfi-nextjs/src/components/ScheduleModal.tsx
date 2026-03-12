'use client';

import { useState } from 'react';

export default function ScheduleModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = (form: HTMLFormElement) => {
    const e: Record<string, string> = {};
    const d = new FormData(form);
    if (!d.get('firstName')?.toString().trim()) e.firstName = 'First name required';
    if (!d.get('lastName')?.toString().trim()) e.lastName = 'Last name required';
    const email = d.get('email')?.toString().trim() || '';
    if (!email) e.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Invalid email';
    if (!d.get('company')?.toString().trim()) e.company = 'Company required';
    if (!d.get('date')?.toString()) e.date = 'Date required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/xvzwpakl', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); onClose(); }, 4000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const ip = (name: string) => ({
    className: `w-full px-3 py-2.5 rounded-lg border text-sm font-medium focus:outline-none transition-all ${errors[name] ? 'border-red-300 bg-red-50/50' : 'border-slate-200 bg-slate-50/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'}`,
    style: { color: '#0a1e3d' } as React.CSSProperties,
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg my-auto sm:my-0 overflow-hidden" style={{ marginTop: 'max(1rem, env(safe-area-inset-top))' }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 z-10"><i className="fas fa-times text-sm"></i></button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4"><i className="fas fa-check text-2xl"></i></div>
            <h3 className="text-xl font-black text-[#0a1e3d] mb-2">Meeting Scheduled!</h3>
            <p className="text-slate-500 text-sm">Our team will send you a calendar invite shortly.</p>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-[#0A64BC] to-[#0952a5] p-5 sm:p-8 text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center"><i className="fas fa-calendar-check text-sm"></i></div>
                <div>
                  <h3 className="text-base sm:text-xl font-black">Schedule a Meeting</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">Free 30-min consultation call</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-3 sm:space-y-4" autoComplete="off">
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {error && <div className="bg-red-50 border border-red-200 rounded-lg p-2.5 text-red-600 text-xs font-semibold flex items-center gap-2"><i className="fas fa-exclamation-circle"></i> {error}</div>}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">First Name *</label>
                  <input name="firstName" type="text" {...ip('firstName')} placeholder="John" />
                  {errors.firstName && <p className="text-red-500 text-[10px] mt-0.5">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Last Name *</label>
                  <input name="lastName" type="text" {...ip('lastName')} placeholder="Doe" />
                  {errors.lastName && <p className="text-red-500 text-[10px] mt-0.5">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email *</label>
                <input name="email" type="email" {...ip('email')} placeholder="john@company.com" />
                {errors.email && <p className="text-red-500 text-[10px] mt-0.5">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Company *</label>
                <input name="company" type="text" {...ip('company')} placeholder="ACME Corp" />
                {errors.company && <p className="text-red-500 text-[10px] mt-0.5">{errors.company}</p>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Date *</label>
                  <input name="date" type="date" {...ip('date')} />
                  {errors.date && <p className="text-red-500 text-[10px] mt-0.5">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Topic</label>
                  <select name="topic" {...ip('topic')}>
                    <option>Network</option><option>Cybersecurity</option><option>Cloud Migration</option><option>NOC Setup</option><option>General</option>
                  </select>
                </div>
              </div>
              <button type="submit" disabled={loading} className="w-full bg-[#0a1e3d] hover:bg-[#0952a5] text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60">
                {loading ? <><i className="fas fa-spinner fa-spin text-xs"></i> Submitting...</> : <><i className="fas fa-calendar-check text-xs"></i> Confirm Booking</>}
              </button>
              <p className="text-[10px] text-center text-slate-400">You&apos;ll receive a confirmation with a calendar invite.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
