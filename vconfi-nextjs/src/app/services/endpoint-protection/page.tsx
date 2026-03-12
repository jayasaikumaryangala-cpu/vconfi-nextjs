'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Endpoint Protection' },
      ]}
      title="Endpoint"
      titleAccent="Protection"
      description="Advanced endpoint detection & response across all devices with real-time threat intelligence."
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
      capabilities={[
      { icon: 'fa-virus-slash', title: 'Anti-Malware', desc: 'Real-time malware detection and quarantine' },
      { icon: 'fa-magnifying-glass', title: 'EDR', desc: 'Endpoint detection and response with behavioral analysis' },
      { icon: 'fa-laptop-code', title: 'Device Control', desc: 'USB, peripheral and application whitelisting' },
      { icon: 'fa-cloud-arrow-down', title: 'Patch Management', desc: 'Automated security patch deployment' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete endpoint protection lifecycle"
      includedCards={[
      { icon: 'fa-download', title: 'Deployment', items: ['Agent rollout', 'Policy config', 'Group policies', 'Exclusions'] },
      { icon: 'fa-shield-alt', title: 'Protection', items: ['Real-time scanning', 'Ransomware guard', 'Web filtering', 'Firewall'] },
      { icon: 'fa-file-lines', title: 'Reporting', items: ['Threat dashboard', 'Compliance status', 'Incident logs', 'Remediation'] },
      ]}
      serviceName="Endpoint Protection"
    />
  );
}