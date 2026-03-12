'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Monitoring & Recovery', href: '/services/monitoring-recovery' },
        { label: 'Audit & Documentation' },
      ]}
      title="Audit &"
      titleAccent="Documentation"
      description="Compliance-friendly records, periodic drill support, and comprehensive audit documentation."
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
      capabilities={[
      { icon: 'fa-file-shield', title: 'Compliance Docs', desc: 'Industry-standard compliance documentation' },
      { icon: 'fa-list-check', title: 'Audit Prep', desc: 'Pre-audit checklists and gap analysis' },
      { icon: 'fa-calendar-check', title: 'Periodic Drills', desc: 'Scheduled DR and security drill documentation' },
      { icon: 'fa-folder-open', title: 'Record Keeping', desc: 'Organized digital records for all IT operations' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete audit and documentation services"
      includedCards={[
      { icon: 'fa-file-lines', title: 'Documentation', items: ['Network diagrams', 'Config records', 'Change logs', 'Procedures'] },
      { icon: 'fa-gavel', title: 'Compliance', items: ['ISO 27001', 'SOC 2', 'HIPAA', 'PCI DSS'] },
      { icon: 'fa-calendar', title: 'Scheduling', items: ['Audit calendar', 'Drill planning', 'Review cycles', 'Updates'] },
      ]}
      serviceName="Audit & Documentation"
    />
  );
}