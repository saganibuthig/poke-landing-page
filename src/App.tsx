import { Globe, Link, Share2, X } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import AboutSection from '@/components/ui/a-modern-hero-section';
import ProductsSection from '@/components/ui/color-change-card';
import StoreSection from '@/components/ui/store-section';

interface NavLinkItem {
  label: string;
  href: string;
}

interface SocialLinkItem {
  icon: LucideIcon;
  href: string;
}

function App() {
  const navLinks: NavLinkItem[] = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about-us' },
    { label: 'PRODUCTS', href: '#products' },
    { label: 'STORE', href: '#store' },
  ];

  const socialLinks: SocialLinkItem[] = [
    { icon: Globe, href: '#' },
    { icon: Link, href: '#' },
    { icon: Share2, href: '#' },
    { icon: X, href: '#' },
  ];

  return (
    <>
      <MinimalistHero
        logoText="Poke"
        navLinks={navLinks}
        mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
        readMoreLink="#about-us"
        imageSrc="/images/soda-image.png"
        imageAlt="A minimalist soda can."
        overlayText={{
          part1: 'less is',
          part2: 'more.',
        }}
        socialLinks={socialLinks}
        locationText="Arlington Heights, IL"
      />
      <AboutSection />
      <ProductsSection />
      <StoreSection />
    </>
  );
}

export default App;
