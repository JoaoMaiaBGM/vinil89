import Header from '@/components/header';
import { About, Gallery, Hero } from '@/components/index';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </>
  );
}
