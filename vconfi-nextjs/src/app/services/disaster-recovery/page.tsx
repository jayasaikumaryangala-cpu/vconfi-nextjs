'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Monitoring & Recovery', href: '/services/monitoring-recovery' },
        { label: 'Disaster Recovery' },
      ]}
      title="Disaster"
      titleAccent="Recovery"
      description="Comprehensive DR planning with documented failover procedures for real-world readiness."
      heroImage="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&q=80"
      capabilities={[
      { icon: 'fa-map', title: 'DR Planning', desc: 'Business impact analysis and recovery strategies' },
      { icon: 'fa-rotate', title: 'Failover Design', desc: 'Automated failover to secondary infrastructure' },
      { icon: 'fa-clipboard-check', title: 'Runbooks', desc: 'Step-by-step recovery procedures documented' },
      { icon: 'fa-calendar-check', title: 'DR Drills', desc: 'Scheduled disaster recovery testing and validation' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete disaster recovery services"
      includedCards={[
      { icon: 'fa-search', title: 'Assessment', items: ['Risk analysis', 'BIA', 'RTO/RPO', 'Priority mapping'] },
      { icon: 'fa-diagram-project', title: 'Architecture', items: ['DR site design', 'Replication', 'Failover config', 'Network DR'] },
      { icon: 'fa-rotate', title: 'Testing', items: ['Tabletop exercises', 'Full failover drills', 'Documentation', 'Improvement'] },
      ]}
      serviceName="Disaster Recovery"
    />
  );
}