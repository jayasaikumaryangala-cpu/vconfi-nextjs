'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Network Infrastructure', href: '/services/network-infrastructure' },
        { label: 'Network Modernization' },
      ]}
      title="Network"
      titleAccent="Modernization"
      description="Low-risk migration planning with structured validation at every stage of your infrastructure upgrade."
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
      capabilities={[
      { icon: 'fa-clipboard-check', title: 'Assessment', desc: 'Comprehensive audit of existing infrastructure' },
      { icon: 'fa-map', title: 'Migration Planning', desc: 'Phased approach minimizing business disruption' },
      { icon: 'fa-vial', title: 'Validation', desc: 'Rigorous testing at every migration stage' },
      { icon: 'fa-rocket', title: 'Go-Live Support', desc: 'Expert support during cutover and stabilization' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="End-to-end modernization services"
      includedCards={[
      { icon: 'fa-search', title: 'Discovery', items: ['Infrastructure audit', 'Gap analysis', 'Risk assessment', 'Roadmap'] },
      { icon: 'fa-cogs', title: 'Execution', items: ['Staged migration', 'Zero-downtime', 'Rollback plans', 'Validation'] },
      { icon: 'fa-chart-bar', title: 'Optimization', items: ['Performance tuning', 'Capacity review', 'Cost optimization', 'Documentation'] },
      ]}
      serviceName="Network Modernization"
    />
  );
}