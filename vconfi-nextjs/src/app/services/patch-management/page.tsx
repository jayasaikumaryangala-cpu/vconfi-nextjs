'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Monitoring & Recovery', href: '/services/monitoring-recovery' },
        { label: 'Patch Management' },
      ]}
      title="Patch"
      titleAccent="Management"
      description="Scheduled patching, preventive maintenance checks, and firmware upgrades for enhanced security."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
      capabilities={[
      { icon: 'fa-download', title: 'Patch Deployment', desc: 'Automated patch distribution across endpoints' },
      { icon: 'fa-calendar', title: 'Scheduling', desc: 'Planned maintenance windows minimizing disruption' },
      { icon: 'fa-vial', title: 'Testing', desc: 'Pre-deployment patch testing in staging environments' },
      { icon: 'fa-file-lines', title: 'Compliance', desc: 'Patch compliance reporting and tracking' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete patch management services"
      includedCards={[
      { icon: 'fa-search', title: 'Assessment', items: ['Vulnerability scan', 'Patch inventory', 'Priority', 'Scheduling'] },
      { icon: 'fa-rocket', title: 'Deployment', items: ['Staging test', 'Rollout', 'Verification', 'Rollback plan'] },
      { icon: 'fa-chart-bar', title: 'Reporting', items: ['Compliance status', 'Missing patches', 'Trend analysis', 'SLA tracking'] },
      ]}
      serviceName="Patch Management"
    />
  );
}