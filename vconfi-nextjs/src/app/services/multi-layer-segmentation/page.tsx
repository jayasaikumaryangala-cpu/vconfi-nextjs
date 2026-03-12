'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Network Infrastructure', href: '/services/network-infrastructure' },
        { label: 'Multi-Layer Segmentation' },
      ]}
      title="Multi-Layer"
      titleAccent="Segmentation"
      description="Intelligent segmentation, VLANs, VRFs and QoS for enhanced security across all network layers."
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
      capabilities={[
      { icon: 'fa-layer-group', title: 'VLAN Design', desc: 'Logical separation of network traffic for security' },
      { icon: 'fa-shield-halved', title: 'Micro-Segmentation', desc: 'Granular access control between segments' },
      { icon: 'fa-gauge-high', title: 'QoS Policies', desc: 'Traffic prioritization for critical applications' },
      { icon: 'fa-lock', title: 'Zero Trust', desc: 'Least-privilege access across all segments' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete segmentation services"
      includedCards={[
      { icon: 'fa-diagram-project', title: 'Architecture', items: ['VLAN mapping', 'ACL design', 'VRF config', 'Zone planning'] },
      { icon: 'fa-terminal', title: 'Implementation', items: ['Switch config', 'Policy enforcement', 'Inter-VLAN routing', 'Testing'] },
      { icon: 'fa-eye', title: 'Monitoring', items: ['Traffic analysis', 'Anomaly detection', 'Compliance checks', 'Reports'] },
      ]}
      serviceName="Multi-Layer Segmentation"
    />
  );
}