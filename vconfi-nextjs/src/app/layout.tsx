import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ThemeProvider from '@/components/ThemeProvider';
import Link from 'next/link';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400','500','600','700','800','900'] });

export const metadata: Metadata = {
  title: {
    default: 'VCONFI | Enterprise IT Infrastructure & Cybersecurity Solutions',
    template: '%s | VCONFI',
  },
  description: 'Enterprise IT infrastructure, cybersecurity, and 24/7 managed services in Hyderabad. Network architecture, firewall deployment, NOC monitoring, disaster recovery. Zero downtime guaranteed.',
  keywords: ['IT infrastructure', 'cybersecurity', 'network security', 'NOC monitoring', 'disaster recovery', 'Hyderabad', 'enterprise IT', 'managed services', 'firewall', 'VPN', 'server management', 'data center', 'Telangana', 'India'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    title: 'VCONFI | Enterprise IT Infrastructure & Cybersecurity',
    description: 'Enterprise-grade IT infrastructure, cybersecurity & 24/7 managed services in Hyderabad.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'VCONFI Global IT Solutions',
    url: 'https://vconfi.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VCONFI | Enterprise IT Infrastructure & Cybersecurity',
    description: 'Enterprise-grade IT infrastructure, cybersecurity & 24/7 managed services in Hyderabad.',
  },
  alternates: {
    canonical: 'https://vconfi.com',
    languages: { 'en-IN': 'https://vconfi.com' },
  },
  verification: {},
  category: 'technology',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://vconfi.com/#organization',
      name: 'VCONFI Global IT Solutions',
      url: 'https://vconfi.com',
      logo: 'https://vconfi.com/images/new_logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-98669-26678',
        contactType: 'customer service',
        email: 'info@vconfi.com',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Telugu'],
      },
      sameAs: [
        'https://facebook.com',
        'https://linkedin.com',
        'https://twitter.com',
        'https://instagram.com',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://vconfi.com/#localbusiness',
      name: 'VCONFI Global IT Solutions',
      image: 'https://vconfi.com/images/new_logo.png',
      url: 'https://vconfi.com',
      telephone: '+91-98669-26678',
      email: 'info@vconfi.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot 12-401, Sri Sainath Nilayam, NRI Colony, Pragathi Nagar',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500090',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 17.4975,
        longitude: 78.3913,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
      priceRange: '$$',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 17.4975, longitude: 78.3913 },
        geoRadius: '50000',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://vconfi.com/#website',
      url: 'https://vconfi.com',
      name: 'VCONFI Global IT Solutions',
      publisher: { '@id': 'https://vconfi.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://vconfi.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="theme-color" content="#f0f7ff" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.4975;78.3913" />
        <meta name="ICBM" content="17.4975, 78.3913" />
        <link rel="canonical" href="https://vconfi.com" />
        <link rel="alternate" hrefLang="en-IN" href="https://vconfi.com" />
        <link rel="alternate" hrefLang="x-default" href="https://vconfi.com" />
      </head>
      <body className="font-sans antialiased">
        {/* JSON-LD Structured Data for SEO + Geo */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ThemeProvider>
          <Navbar />
          <main>{children}</main>

          <footer className="site-footer">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-8 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
                <div className="col-span-2 md:col-span-1">
                  <Link href="/" className="flex items-center gap-3 mb-6 no-underline">
                    <img src="/images/new_logo.png" alt="VCONFI Global IT Solutions Logo" className="w-10 h-10 object-contain rounded-lg" />
                    <div className="flex flex-col">
                      <span className="text-lg font-black text-white tracking-tight">VCONFI</span>
                      <span className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.2em]">Global IT Solutions</span>
                    </div>
                  </Link>
                  <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
                    Enterprise IT infrastructure, cybersecurity, and managed services. Hyderabad, Telangana, India.
                  </p>
                  <div className="flex gap-2">
                    {[
                      { ico: 'fa-whatsapp', href: 'https://wa.me/919866926678', label: 'WhatsApp' },
                      { ico: 'fa-facebook-f', href: 'https://facebook.com', label: 'Facebook' },
                      { ico: 'fa-linkedin-in', href: 'https://linkedin.com', label: 'LinkedIn' },
                      { ico: 'fa-twitter', href: 'https://twitter.com', label: 'Twitter' },
                      { ico: 'fa-instagram', href: 'https://instagram.com', label: 'Instagram' },
                    ].map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 border border-white/15 hover:border-white/30 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all text-sm hover:bg-white/5">
                        <i className={`fab ${s.ico}`}></i>
                      </a>
                    ))}
                  </div>
                </div>

                <nav aria-label="Services navigation">
                  <h4 className="text-[10px] font-bold text-white/80 uppercase tracking-[0.15em] mb-5 md:mb-6">Services</h4>
                  <ul className="space-y-2.5 md:space-y-3">
                    {[
                      { name: 'Network Infrastructure', href: '/services/network-infrastructure' },
                      { name: 'Cybersecurity', href: '/services/cybersecurity' },
                      { name: 'Server Management', href: '/services/server-management' },
                      { name: 'NOC Monitoring', href: '/services/noc-monitoring' },
                      { name: 'Disaster Recovery', href: '/services/disaster-recovery' },
                    ].map((l, i) => (
                      <li key={i}>
                        <Link href={l.href} className="text-xs md:text-sm text-white/50 hover:text-white/80 transition-colors">
                          {l.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <nav aria-label="Company navigation">
                  <h4 className="text-[10px] font-bold text-white/80 uppercase tracking-[0.15em] mb-5 md:mb-6">Company</h4>
                  <ul className="space-y-2.5 md:space-y-3">
                    {[
                      { name: 'About', href: '/about' },
                      { name: 'Privacy Policy', href: '/privacy-policy' },
                      { name: 'Terms and Conditions', href: '/terms-of-service' },
                      { name: 'Cookie Policy', href: '/cookie-policy' },
                    ].map((l, i) => (
                      <li key={i}>
                        <Link href={l.href} className="text-xs md:text-sm text-white/50 hover:text-white/80 transition-colors">
                          {l.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div>
                  <h4 className="text-[10px] font-bold text-white/80 uppercase tracking-[0.15em] mb-5 md:mb-6">Contact Us</h4>
                  <address className="space-y-2.5 md:space-y-3 text-xs md:text-sm text-white/50 not-italic">
                    <a href="mailto:info@vconfi.com" className="block hover:text-white/80 transition-colors">info@vconfi.com</a>
                    <a href="tel:+919866926678" className="block hover:text-white/80 transition-colors">+91 98669 26678</a>
                    <p>Pragathi Nagar,<br/>Hyderabad 500090, Telangana, India</p>
                  </address>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} VCONFI Global IT Solutions. All rights reserved.</p>
                <div className="flex gap-4 md:gap-6">
                  <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="text-xs text-white/40 hover:text-white/60 transition-colors">Terms and Conditions</Link>
                  <Link href="/cookie-policy" className="text-xs text-white/40 hover:text-white/60 transition-colors">Cookie Policy</Link>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
