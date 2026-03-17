import Header from '@/components/header';
import Image from 'next/image';
import { ContactForm } from './_components/form';

export const metadata = {
  title: 'Contato',
  description: 'Fale com a Vinil89 para shows e informações.',
  openGraph: {
    title: 'Contato | Vinil89',
    images: [{ url: 'https://vinil89.vercel.app/og-image.jpg' }],
  },
};

export default function Contact() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-white px-4 py-10 text-black md:px-6 md:py-16">
        <Image
          src="https://static.wixstatic.com/media/c3fe9c_ee6d71280f44409db0a46f24d8a479e1~mv2.jpg"
          alt="White vinil"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-white/35" />

        <section className="relative z-10 mx-auto w-full max-w-5xl">
          <h1 className="mb-8 text-center text-5xl md:mb-10 md:text-6xl">#Contato</h1>

          <div className="relative mb-4 w-full overflow-hidden border-4 border-black bg-black">
            <div className="relative aspect-21/7 w-full min-h-[140px]">
              <Image
                src="https://static.wixstatic.com/media/c3fe9c_9101425c76324738bc0b4374a6ce45f4~mv2.jpeg"
                alt="Banda Vinil89 em apresentação"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 960px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="grid gap-6 bg-black px-4 py-6 text-white md:grid-cols-[1fr_1.35fr] md:gap-8 md:px-6 md:py-7">
            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-1 text-lg leading-relaxed md:text-base">
                <p>Vinil89</p>
                <p>Tel: (81) 99178-2978</p>
                <p>vinil89.oficial@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/bandavinil89/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram da Vinil89"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#ff0f8b] text-2xl font-bold text-white transition-transform hover:scale-105"
                >
                  IG
                </a>
                <a
                  href="https://www.youtube.com/@vinil89.oficial"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube da Vinil89"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#ff2d2d] text-sm font-bold text-white transition-transform hover:scale-105"
                >
                  YT
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
