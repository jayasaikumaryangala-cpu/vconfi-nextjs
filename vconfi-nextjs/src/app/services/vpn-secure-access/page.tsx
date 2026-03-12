'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'VPN & Secure Access' },
      ]}
      title="VPN & Secure"
      titleAccent="Access"
      description="IPSec, remote access and site-to-site connectivity with enterprise-grade encryption."
      heroImage="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80"
      capabilities={[
      { icon: 'fa-lock', title: 'IPSec Tunnels', desc: 'Site-to-site encrypted connectivity' },
      { icon: 'fa-user-shield', title: 'Remote Access', desc: 'Secure remote workforce connectivity' },
      { icon: 'fa-key', title: 'MFA Integration', desc: 'Multi-factor authentication for VPN access' },
      { icon: 'fa-globe', title: 'SD-WAN Ready', desc: 'Software-defined WAN integration support' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete VPN and secure access services"
      includedCards={[
      { icon: 'fa-diagram-project', title: 'Design', items: ['Topology planning', 'Encryption standards', 'Split tunneling', 'Routing'] },
      { icon: 'fa-laptop', title: 'Client Setup', items: ['Agent deployment', 'Certificate mgmt', 'SSO integration', 'Policy push'] },
      { icon: 'fa-eye', title: 'Monitoring', items: ['Tunnel health', 'Bandwidth usage', 'Session tracking', 'Alerts'] },
      ]}
      serviceName="VPN & Secure Access"
    />
  );
}