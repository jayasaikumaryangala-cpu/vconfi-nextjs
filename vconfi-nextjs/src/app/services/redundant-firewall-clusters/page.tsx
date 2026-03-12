'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Redundant Firewall Clusters' },
      ]}
      title="Redundant Firewall"
      titleAccent="Clusters"
      description="Zero single-point-of-failure security architecture with active-passive HA and load sharing."
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
      capabilities={[
      { icon: 'fa-clone', title: 'Active-Passive HA', desc: 'Automatic failover between firewall pairs' },
      { icon: 'fa-share-nodes', title: 'Load Sharing', desc: 'Distributed traffic across multiple appliances' },
      { icon: 'fa-sync', title: 'Session Sync', desc: 'Stateful session synchronization between nodes' },
      { icon: 'fa-heart-pulse', title: 'Health Checks', desc: 'Continuous monitoring with automated recovery' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete firewall cluster services"
      includedCards={[
      { icon: 'fa-cogs', title: 'Setup', items: ['HA pairing', 'Heartbeat config', 'Session sync', 'Priority rules'] },
      { icon: 'fa-shield-alt', title: 'Security', items: ['Policy sync', 'Failover testing', 'Firmware updates', 'Rule audit'] },
      { icon: 'fa-eye', title: 'Monitoring', items: ['Cluster health', 'Failover logs', 'Performance', 'Alerts'] },
      ]}
      serviceName="Redundant Firewall Clusters"
    />
  );
}