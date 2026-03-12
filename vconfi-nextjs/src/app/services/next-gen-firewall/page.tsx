'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Next-Gen Firewall' },
      ]}
      title="Next-Gen"
      titleAccent="Firewall"
      description="Advanced firewall deployment with security profiles, proxy, IPAM and HA cluster design."
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
      capabilities={[
      { icon: 'fa-fire-flame-curved', title: 'Deep Packet Inspection', desc: 'Application-level traffic analysis and filtering' },
      { icon: 'fa-ban', title: 'Intrusion Prevention', desc: 'Real-time threat blocking with signature-based detection' },
      { icon: 'fa-globe', title: 'Web Filtering', desc: 'URL categorization and content filtering policies' },
      { icon: 'fa-clone', title: 'HA Clustering', desc: 'Active-passive failover for zero-downtime security' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete firewall deployment and management"
      includedCards={[
      { icon: 'fa-cogs', title: 'Deployment', items: ['Firewall sizing', 'Rule migration', 'Policy design', 'HA setup'] },
      { icon: 'fa-shield-alt', title: 'Security', items: ['IPS/IDS config', 'SSL inspection', 'Threat feeds', 'Geo-blocking'] },
      { icon: 'fa-chart-line', title: 'Management', items: ['Log analysis', 'Rule optimization', 'Compliance', 'Reporting'] },
      ]}
      serviceName="Next-Gen Firewall"
    />
  );
}