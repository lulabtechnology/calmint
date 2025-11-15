import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import BenefitsSection from '@/components/BenefitsSection';
import PostsSection from '@/components/PostsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { getPosts } from '@/lib/posts';


export default async function HomePage() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BenefitsSection />
        <PostsSection posts={posts} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
