'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Network Infrastructure', href: '/services/network-infrastructure' },
        { label: 'Redundant Fiber Backbone' },
      ]}
      title="Redundant Fiber"
      titleAccent="Backbone"
      description="Multi-path uplink design eliminating single point of failure with automated failover capabilities."
      heroImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
      capabilities={[
      { icon: 'fa-route', title: 'Dual Path Routing', desc: 'Multiple fiber paths for redundancy and load balancing' },
      { icon: 'fa-shield-alt', title: 'Physical Security', desc: 'Protected fiber routes with secure conduit systems' },
      { icon: 'fa-tachometer-alt', title: 'High Bandwidth', desc: '10G/40G/100G connectivity options available' },
      { icon: 'fa-sync', title: 'Automatic Failover', desc: 'Sub-second path switching during outages' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Comprehensive fiber backbone services"
      includedCards={[
      { icon: 'fa-drafting-compass', title: 'Design', items: ['Path survey', 'Fiber count planning', 'Termination points', 'Distance calculation'] },
      { icon: 'fa-tools', title: 'Installation', items: ['Cable laying', 'Fiber splicing', 'Testing & certification', 'Documentation'] },
      { icon: 'fa-headset', title: 'Maintenance', items: ['OTDR testing', 'Connector cleaning', 'Performance monitoring', '24/7 support'] },
      ]}
      serviceName="Redundant Fiber Backbone"
    />
  );
}