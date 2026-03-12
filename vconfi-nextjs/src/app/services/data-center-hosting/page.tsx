'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Data Center Hosting' },
      ]}
      title="Data Center"
      titleAccent="Hosting"
      description="Reliable server hosting and colocation services for mission-critical workloads."
      heroImage="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80"
      capabilities={[
      { icon: 'fa-building', title: 'Colocation', desc: 'Secure rack space with redundant power and cooling' },
      { icon: 'fa-bolt', title: 'Power Redundancy', desc: 'N+1 UPS and generator backup systems' },
      { icon: 'fa-network-wired', title: 'Connectivity', desc: 'Multiple carrier options with low latency' },
      { icon: 'fa-lock', title: 'Physical Security', desc: 'Biometric access, CCTV, 24/7 security personnel' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete data center hosting services"
      includedCards={[
      { icon: 'fa-server', title: 'Infrastructure', items: ['Rack space', 'Power', 'Cooling', 'Connectivity'] },
      { icon: 'fa-shield-alt', title: 'Security', items: ['Access control', 'Surveillance', 'Fire suppression', 'Compliance'] },
      { icon: 'fa-headset', title: 'Support', items: ['Remote hands', 'Monitoring', 'Maintenance', 'Emergency'] },
      ]}
      serviceName="Data Center Hosting"
    />
  );
}