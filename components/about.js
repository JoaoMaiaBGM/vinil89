'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function About() {
  const images = {
    vocalist: 'https://static.wixstatic.com/media/c3fe9c_d0fa0eb8b7104c60aa8da9fa06f9e853~mv2.jpg',
    drummer: 'https://static.wixstatic.com/media/c3fe9c_fec39da663d34f4b8298be65888df76d~mv2.jpeg',
    bassist: 'https://static.wixstatic.com/media/c3fe9c_834b72e5712943e38e8e4b5a582195b1~mv2.jpeg',
    guitarist_2:
      'https://static.wixstatic.com/media/c3fe9c_31a6ff6a58b54df992983e54ae5369c7~mv2.jpg',
    guitarist_1:
      'https://static.wixstatic.com/media/c3fe9c_d468b45590e349f382094f16b470073c~mv2.jpg',
  };

  return (
    <section
      id="about"
      className="relative h-screen w-full scroll-mt-28 bg-black flex flex-column align-center justify-center"
    >
      <Image
        src="https://static.wixstatic.com/media/c3fe9c_42fb8564160e42ce920c9e85a29efe2e~mv2.jpeg"
        alt="Vinil89 about background"
        fill
        priority
        className="object-cover object-center opacity-50"
      />

      <div className="bg-[#666] h-full w-full absolute inset-0 opacity-85"></div>

      <div className="w-full max-w-[1100px] px-12 flex md:flex-row flex-col items-center justify-center gap-5 md:gap-10 z-10 md:px-4">
        <div className="w-full min-w-[280px] max-w-[494px] h-[220px] flex-none md:w-[350px] md:h-[270px] lg:w-[494px] lg:h-[320px]">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop={true}
            className="mySwiper w-full h-full"
          >
            {Object.keys(images).map((key) => (
              <SwiperSlide key={key} className="relative w-full h-full">
                <Image
                  src={images[key]}
                  alt={`Vinil89 ${key}`}
                  fill
                  className="object-cover object-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full min-w-[230px] max-w-[494px] h-[270px] flex-none flex flex-col align-center justify-between items-center md:w-[280px] md:h-[320px]">
          <h1 className="text-2xl lg:text-5xl">#A Vinil89</h1>
          <p className="w-full text-sm/loose text-justify md:text-sm/snug lg:text-base/normal">
            Surgida em 2024, a Vinil89 é uma banda formada por músicos de diferentes estados do
            Brasil — Pernambuco, Pará, Brasília e Goiás. Carrega em sua essência a paixão pela
            música e o respeito pelos grandes mestres do pop/rock. Formada por músicos...
          </p>
          <button
            type="button"
            className="bg-[#999999] text-white border border-white px-4 py-2 rounded-md cursor-pointer mt-5 hover:bg-black hover:border-black hover:text-white"
          >
            Ver mais
          </button>
        </div>
      </div>
    </section>
  );
}
