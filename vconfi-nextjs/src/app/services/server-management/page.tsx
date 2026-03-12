'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Server Management' },
      ]}
      title="Server"
      titleAccent="Management"
      description="Complete lifecycle management - provisioning, patching, monitoring, and decommissioning."
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
      capabilities={[
      { icon: 'fa-server', title: 'Provisioning', desc: 'Automated server deployment and configuration' },
      { icon: 'fa-download', title: 'Patch Management', desc: 'Regular security and feature updates' },
      { icon: 'fa-eye', title: 'Health Monitoring', desc: '24/7 server health and performance tracking' },
      { icon: 'fa-hard-drive', title: 'Storage Management', desc: 'Capacity planning and storage optimization' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete server management services"
      includedCards={[
      { icon: 'fa-rocket', title: 'Setup', items: ['OS installation', 'Hardening', 'Role config', 'Networking'] },
      { icon: 'fa-shield-alt', title: 'Security', items: ['Patch cycles', 'AV management', 'Access control', 'Compliance'] },
      { icon: 'fa-headset', title: 'Support', items: ['24/7 monitoring', 'Incident response', 'Capacity planning', 'Lifecycle'] },
      ]}
      serviceName="Server Management"
    />
  );
}