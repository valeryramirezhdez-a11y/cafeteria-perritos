import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import AdoptionsSection from '@/components/AdoptionsSection';
import PromotionsSection from '@/components/PromotionsSection';
import LocationSection from '@/components/LocationSection';
import HistorySection from '@/components/HistorySection';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink font-sans">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <AdoptionsSection />
        <PromotionsSection />
        <LocationSection />
        <HistorySection />
      </main>
      <Footer />
    </div>
  );
}
