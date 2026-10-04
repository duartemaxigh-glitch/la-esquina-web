import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/components/featured-products";
import { MenuSection } from "@/components/menu-section";
import { DeliverySection } from "@/components/delivery-section";
import { BenefitsSection } from "@/components/benefits-section";
import { LocationSection } from "@/components/location-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedProducts />
        <MenuSection />
        <DeliverySection />
        <BenefitsSection />
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}