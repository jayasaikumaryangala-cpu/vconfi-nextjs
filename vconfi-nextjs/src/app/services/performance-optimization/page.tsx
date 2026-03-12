'use client';
import ServiceSubPage from '@/components/ServiceSubPage';

export default function Page() {
  return (
    <ServiceSubPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Monitoring & Recovery', href: '/services/monitoring-recovery' },
        { label: 'Performance Optimization' },
      ]}
      title="Performance"
      titleAccent="Optimization"
      description="Continuous tuning for availability and operational efficiency across your infrastructure."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
      capabilities={[
      { icon: 'fa-gauge-high', title: 'Benchmarking', desc: 'Baseline performance metrics and targets' },
      { icon: 'fa-magnifying-glass-chart', title: 'Analysis', desc: 'Deep-dive into bottlenecks and inefficiencies' },
      { icon: 'fa-sliders', title: 'Tuning', desc: 'Configuration optimization for peak performance' },
      { icon: 'fa-chart-line', title: 'Monitoring', desc: 'Continuous performance tracking and alerting' },
      ]}
      includedTitle="What's"
      includedTitleAccent="Included"
      includedDesc="Complete performance optimization services"
      includedCards={[
      { icon: 'fa-search', title: 'Discovery', items: ['Performance audit', 'Baseline metrics', 'Bottleneck ID', 'Capacity review'] },
      { icon: 'fa-cogs', title: 'Optimization', items: ['Config tuning', 'Resource allocation', 'Cache optimization', 'Load balancing'] },
      { icon: 'fa-chart-bar', title: 'Tracking', items: ['KPI dashboards', 'Trend reports', 'Alerts', 'Recommendations'] },
      ]}
      serviceName="Performance Optimization"
    />
  );
}