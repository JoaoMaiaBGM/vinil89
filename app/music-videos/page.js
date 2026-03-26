import Header from '@/components/header';
import Image from 'next/image';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Clipes',
  description: 'Assista aos clipes da Vinil89 ao vivo',
  openGraph: {
    title: 'Clipes | Vinil89',
    images: [{ url: 'https://vinil89.vercel.app/og-image.jpg' }],
  },
};

const videos = [
  { id: 'LFKVTKMDtek', titulo: 'Adivinha o quê' },
  { id: 'JHI4BLCXxPU', titulo: 'Mordida de amor' },
  { id: '-x8mE-QZojE', titulo: 'Óculos' },
  { id: 'd2kPD8aA0d8', titulo: 'Tempo perdido' },
  { id: 'iFY9bmwiRxg', titulo: 'Poison heart' },
  { id: 'CkPsnoG3Muk', titulo: 'Losing my religion' },
];

export default function MusicVideos() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen bg-white text-black px-6 py-16">
        <Image
          src="https://static.wixstatic.com/media/c3fe9c_cd95960181584eabaf3f30d845fa5cb3~mv2.jpg"
          alt="People attending a show"
          fill
          className="object-cover opacity-30"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 relative z-10">#Clipes</h1>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-3">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
