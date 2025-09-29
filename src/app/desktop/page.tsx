import { Hero } from '@/app/desktop/components/hero';
import { Features } from '@/app/desktop/components/features';
import { CTA } from '@/app/desktop/components/cta';
import { Footer } from '@/app/desktop/components/footer';

export default function DesktopHome() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}