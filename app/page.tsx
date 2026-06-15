import { Header } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { FeaturedCollection } from "@/components/site/featured-collection";
import { BestSellersSection } from "@/components/site/best-sellers-section";
import { CategoryGrid } from "@/components/site/category-grid";
import { BrandStorySection } from "@/components/site/brand-story-section";
import { ReviewsSection } from "@/components/site/reviews-section";
import { InstagramSection } from "@/components/site/instagram-section";
import { NewsletterSection } from "@/components/site/newsletter-section";
import { Footer } from "@/components/site/footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturedCollection />
      <BestSellersSection />
      <CategoryGrid />
      <BrandStorySection />
      <ReviewsSection />
      <InstagramSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
