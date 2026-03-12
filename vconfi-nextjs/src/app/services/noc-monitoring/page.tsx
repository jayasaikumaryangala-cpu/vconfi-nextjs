'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Monitoring & Recovery', href: '/services/monitoring-recovery' },
        { label: 'NOC Monitoring' },
      ]}
      title="24/7 NOC"
      titleAccent="Monitoring"
      description="Proactive real-time oversight across your entire IT environment with alerting and incident response."
      heroImage="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&q=80"
      capabilities={[
      { icon: 'fa-desktop', title: 'Dashboard', desc: 'Real-time visibility across all infrastructure' },
      { icon: 'fa-bell', title: 'Alerting', desc: 'Intelligent alert routing and escalation' },
      { icon: 'fa-clock', title: '24/7 Coverage', desc: 'Round-the-clock monitoring by certified engineers' },
      { icon: 'fa-chart-line', title: 'SLA Tracking', desc: 'Performance metrics and SLA compliance reports' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete NOC monitoring services"
      includedCards={[
      { icon: 'fa-server', title: 'Infrastructure', items: ['Server monitoring', 'Network health', 'Storage alerts', 'Capacity'] },
      { icon: 'fa-shield-alt', title: 'Security', items: ['Threat alerts', 'Access logs', 'Compliance', 'Vulnerability'] },
      { icon: 'fa-file-lines', title: 'Reporting', items: ['Monthly reports', 'Trend analysis', 'Uptime metrics', 'Recommendations'] },
      ]}
      serviceName="NOC Monitoring"
    />
  );
}