'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Monitoring & Recovery', href: '/services/monitoring-recovery' },
        { label: 'HA Failover Testing' },
      ]}
      title="HA Failover"
      titleAccent="Testing"
      description="Live validation of network services, security checks with pen testing, and core service continuity."
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
      capabilities={[
      { icon: 'fa-rotate', title: 'Failover Drills', desc: 'Controlled failover testing of all critical systems' },
      { icon: 'fa-crosshairs', title: 'Penetration Testing', desc: 'Ethical hacking to identify vulnerabilities' },
      { icon: 'fa-clipboard-check', title: 'Validation', desc: 'Comprehensive service continuity verification' },
      { icon: 'fa-file-lines', title: 'Documentation', desc: 'Detailed test results and recommendations' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete failover testing services"
      includedCards={[
      { icon: 'fa-vial', title: 'Testing', items: ['Failover scenarios', 'Load testing', 'Stress testing', 'Recovery validation'] },
      { icon: 'fa-user-secret', title: 'Security', items: ['Pen testing', 'Vulnerability scan', 'Social engineering', 'Report'] },
      { icon: 'fa-file-lines', title: 'Results', items: ['Test reports', 'Gap analysis', 'Remediation plan', 'Re-testing'] },
      ]}
      serviceName="HA Failover Testing"
    />
  );
}