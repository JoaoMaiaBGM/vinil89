import Header from '@/components/header';
import { About, Gallery, Hero } from '@/components/index';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Gallery />
    </>
  );
}
