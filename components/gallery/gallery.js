import Image from 'next/image';
import { galleryImages } from './images';

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative w-full scroll-mt-28 bg-black/95 px-3 py-8 sm:px-4 md:px-6 lg:px-8"
    >
      <Image
        src="https://static.wixstatic.com/media/c3fe9c_cd95960181584eabaf3f30d845fa5cb3~mv2.jpg"
        alt="People attending a show"
        fill
        className="object-cover opacity-90"
      />

      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-5 xl:grid-cols-6">
        {galleryImages.map((image) => (
          <figure
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-md bg-neutral-900"
          >
            <Image
              src={image.img}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 20vw, 16vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
