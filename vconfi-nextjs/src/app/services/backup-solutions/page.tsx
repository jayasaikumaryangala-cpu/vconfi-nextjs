'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Monitoring & Recovery', href: '/services/monitoring-recovery' },
        { label: 'Backup Solutions' },
      ]}
      title="Backup"
      titleAccent="Solutions"
      description="Enterprise backup strategies with automated scheduling, verification, and offsite replication."
      heroImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
      capabilities={[
      { icon: 'fa-cloud-arrow-up', title: 'Cloud Backup', desc: 'Automated offsite replication to secure cloud' },
      { icon: 'fa-clock-rotate-left', title: 'Scheduled Backups', desc: 'Flexible scheduling with retention policies' },
      { icon: 'fa-vial', title: 'Backup Testing', desc: 'Regular restore testing and verification' },
      { icon: 'fa-lock', title: 'Encryption', desc: 'End-to-end encryption for data at rest and in transit' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete backup management services"
      includedCards={[
      { icon: 'fa-database', title: 'Strategy', items: ['Backup assessment', 'RPO/RTO planning', 'Retention policy', 'Storage sizing'] },
      { icon: 'fa-gears', title: 'Implementation', items: ['Agent deployment', 'Schedule config', 'Replication setup', 'Testing'] },
      { icon: 'fa-headset', title: 'Management', items: ['Daily verification', 'Failure alerts', 'Capacity planning', 'Restore support'] },
      ]}
      serviceName="Backup Solutions"
    />
  );
}