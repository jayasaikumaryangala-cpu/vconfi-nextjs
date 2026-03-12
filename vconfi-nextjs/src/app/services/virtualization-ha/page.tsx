'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Virtualization & HA' },
      ]}
      title="Virtualization &"
      titleAccent="HA Clusters"
      description="VMware/Hyper-V environments built for maximum uptime and performance."
      heroImage="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80"
      capabilities={[
      { icon: 'fa-cubes', title: 'Hypervisor Setup', desc: 'VMware ESXi and Microsoft Hyper-V deployment' },
      { icon: 'fa-clone', title: 'HA Configuration', desc: 'High availability clustering with automatic failover' },
      { icon: 'fa-arrows-spin', title: 'vMotion/Live Migration', desc: 'Zero-downtime workload migration' },
      { icon: 'fa-hard-drive', title: 'Shared Storage', desc: 'SAN/NAS configuration for VM storage' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete virtualization services"
      includedCards={[
      { icon: 'fa-cogs', title: 'Setup', items: ['Host config', 'Cluster creation', 'Storage', 'Networking'] },
      { icon: 'fa-shield-alt', title: 'HA', items: ['Failover rules', 'DRS policies', 'Backup integration', 'Recovery'] },
      { icon: 'fa-chart-line', title: 'Management', items: ['Performance', 'Capacity', 'Updates', 'Lifecycle'] },
      ]}
      serviceName="Virtualization & HA"
    />
  );
}