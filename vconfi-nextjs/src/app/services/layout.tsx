import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Services', description: 'VCONFI enterprise IT services — network infrastructure, cybersecurity, server management, NOC monitoring, and disaster recovery in Hyderabad.', alternates: { canonical: 'https://vconfi.com/services' } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
