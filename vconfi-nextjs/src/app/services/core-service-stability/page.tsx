'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Core Service Stability' },
      ]}
      title="Core Service"
      titleAccent="Stability"
      description="Active Directory, DNS and identity services hardened and optimized for performance."
      heroImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
      capabilities={[
      { icon: 'fa-id-card', title: 'Active Directory', desc: 'AD design, hardening, and management' },
      { icon: 'fa-globe', title: 'DNS Management', desc: 'Reliable DNS infrastructure with redundancy' },
      { icon: 'fa-key', title: 'Identity Services', desc: 'SSO, MFA, and identity management' },
      { icon: 'fa-certificate', title: 'PKI/Certificates', desc: 'Certificate authority and lifecycle management' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete core service management"
      includedCards={[
      { icon: 'fa-cogs', title: 'Setup', items: ['AD design', 'DNS zones', 'DHCP', 'Group policies'] },
      { icon: 'fa-shield-alt', title: 'Security', items: ['Hardening', 'Audit policies', 'Permission review', 'MFA'] },
      { icon: 'fa-chart-bar', title: 'Health', items: ['Replication monitoring', 'Performance', 'Capacity', 'Reporting'] },
      ]}
      serviceName="Core Service Stability"
    />
  );
}