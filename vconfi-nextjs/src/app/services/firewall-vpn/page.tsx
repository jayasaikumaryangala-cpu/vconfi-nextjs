'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Firewall & VPN' },
      ]}
      title="Firewall &"
      titleAccent="VPN"
      description="Integrated firewall and VPN solutions for comprehensive perimeter security."
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
      capabilities={[
      { icon: 'fa-shield-halved', title: 'Unified Security', desc: 'Combined firewall and VPN management' },
      { icon: 'fa-lock', title: 'Encryption', desc: 'Enterprise-grade encryption for all tunnels' },
      { icon: 'fa-users', title: 'User Management', desc: 'Centralized user and group access policies' },
      { icon: 'fa-chart-line', title: 'Analytics', desc: 'Traffic analysis and security event correlation' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete firewall and VPN services"
      includedCards={[
      { icon: 'fa-cogs', title: 'Deployment', items: ['Firewall setup', 'VPN config', 'Integration', 'Testing'] },
      { icon: 'fa-key', title: 'Access', items: ['User provisioning', 'MFA', 'Certificates', 'Policies'] },
      { icon: 'fa-headset', title: 'Support', items: ['24/7 monitoring', 'Troubleshooting', 'Updates', 'Optimization'] },
      ]}
      serviceName="Firewall & VPN"
    />
  );
}