import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'About Us', description: 'Learn about VCONFI Global IT Solutions — enterprise IT infrastructure, cybersecurity, and managed services in Hyderabad, Telangana.', alternates: { canonical: 'https://vconfi.com/about' } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
