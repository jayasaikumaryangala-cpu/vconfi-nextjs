'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Network Infrastructure', href: '/services/network-infrastructure' },
        { label: 'Core Access Architecture' },
      ]}
      title="Core & Access"
      titleAccent="Architecture"
      description="Campus or office LAN/WAN built for performance and clean segmentation with enterprise-grade reliability."
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
      capabilities={[
      { icon: 'fa-sitemap', title: 'Hierarchical Design', desc: 'Core, distribution, and access layers for optimal traffic flow' },
      { icon: 'fa-network-wired', title: 'Enterprise Switching', desc: 'High-performance switches with QoS and VLAN support' },
      { icon: 'fa-wifi', title: 'Wireless Integration', desc: 'Seamless Wi-Fi 6/6E integration with wired infrastructure' },
      { icon: 'fa-chart-line', title: 'Scalable Architecture', desc: 'Design that grows with your business needs' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete core and access layer services"
      includedCards={[
      { icon: 'fa-drafting-compass', title: 'Design', items: ['Network topology', 'Capacity planning', 'IP addressing', 'Documentation'] },
      { icon: 'fa-tools', title: 'Implementation', items: ['Switch deployment', 'Cable management', 'VLAN config', 'Testing'] },
      { icon: 'fa-headset', title: 'Support', items: ['24/7 monitoring', 'Firmware updates', 'Troubleshooting', 'Optimization'] },
      ]}
      serviceName="Core Access Architecture"
    />
  );
}