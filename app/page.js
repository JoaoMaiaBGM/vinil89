import { About, Contact, Hero, Media } from '@/components/index';
import { Header, Footer } from '@/layout';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Media />
      <Contact />
      <Footer />
    </>
  );
}
