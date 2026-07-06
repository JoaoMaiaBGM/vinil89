'use client';

import { useState } from 'react';

import { SectionTitle } from '@/layout';
import Gallery from './_components/gallery';
import { galleryImages } from './_assets/image-list';

export default function Media() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = galleryImages.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <section id="media" className="section-p bg-vin-blue-350">
      <div className="container section-m flex flex-col items-center justify-center">
        <SectionTitle title="Mídia" />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="h3 font-bold section-subtitle text-primary uppercase mb-6">galeria</h3>
            <Gallery
              images={images}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
