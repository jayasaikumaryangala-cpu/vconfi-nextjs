'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'NOC Operations' },
      ]}
      title="NOC/SOC"
      titleAccent="Operations"
      description="Centralized logging, threat monitoring and policy governance for complete visibility."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
      capabilities={[
      { icon: 'fa-terminal', title: 'Central Logging', desc: 'Aggregated log management across all systems' },
      { icon: 'fa-eye', title: 'Threat Monitoring', desc: 'Real-time security event correlation' },
      { icon: 'fa-gavel', title: 'Policy Governance', desc: 'Security policy enforcement and compliance' },
      { icon: 'fa-users', title: 'Dedicated Team', desc: 'Experienced SOC analysts and engineers' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete NOC/SOC operations services"
      includedCards={[
      { icon: 'fa-cogs', title: 'Operations', items: ['24/7 staffing', 'Shift management', 'Runbooks', 'Escalation'] },
      { icon: 'fa-shield-alt', title: 'Security', items: ['SIEM management', 'Incident response', 'Threat hunting', 'Forensics'] },
      { icon: 'fa-chart-bar', title: 'Governance', items: ['Policy review', 'Compliance audits', 'Risk assessment', 'Reporting'] },
      ]}
      serviceName="NOC Operations"
    />
  );
}