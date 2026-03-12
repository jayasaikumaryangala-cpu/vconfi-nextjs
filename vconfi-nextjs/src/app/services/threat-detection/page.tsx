'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Threat Detection' },
      ]}
      title="Threat"
      titleAccent="Detection"
      description="Continuous threat monitoring with AI-powered analytics and automated incident response."
      heroImage="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80"
      capabilities={[
      { icon: 'fa-radar', title: 'SIEM Integration', desc: 'Centralized security event monitoring' },
      { icon: 'fa-brain', title: 'AI Analytics', desc: 'Machine learning-based anomaly detection' },
      { icon: 'fa-bell', title: 'Alert Triage', desc: 'Automated alert prioritization and escalation' },
      { icon: 'fa-robot', title: 'Auto Response', desc: 'Automated containment and remediation playbooks' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete threat detection and response"
      includedCards={[
      { icon: 'fa-tower-broadcast', title: 'Detection', items: ['Log collection', 'Correlation rules', 'Threat intel', 'Behavioral analysis'] },
      { icon: 'fa-bolt', title: 'Response', items: ['Incident playbooks', 'Containment', 'Forensics', 'Root cause'] },
      { icon: 'fa-chart-pie', title: 'Reporting', items: ['Executive summary', 'Trend analysis', 'Compliance', 'KPIs'] },
      ]}
      serviceName="Threat Detection"
    />
  );
}