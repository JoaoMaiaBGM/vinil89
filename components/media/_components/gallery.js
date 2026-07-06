import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Gallery({ images, currentImageIndex, setCurrentImageIndex }) {
  console.log(images[currentImageIndex].src);

  return (
    <>
      <div className="relative rounded-lg overflow-hidden group">
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          width={1000}
          height={1000}
          className="h-96 w-full object-cover object-top"
        />

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition-colors z-10"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition-colors z-10"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 px-4 py-2 rounded-full text-sm text-foreground">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
              idx === currentImageIndex
                ? 'border-primary scale-105'
                : 'border-border hover:border-primary'
            }`}
          >
            <Image
              src={img.src}
              alt={`Thumbnail ${idx + 1}`}
              width={1000}
              height={1000}
              className="h-20 w-full object-cover"
            />
          </button>
        ))}
      </div>
    </>
  );
}
