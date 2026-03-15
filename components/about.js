'use client';

import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from './modal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = {
    vocalist: 'https://static.wixstatic.com/media/c3fe9c_d0fa0eb8b7104c60aa8da9fa06f9e853~mv2.jpg',
    drummer: 'https://static.wixstatic.com/media/c3fe9c_fec39da663d34f4b8298be65888df76d~mv2.jpeg',
    bassist: 'https://static.wixstatic.com/media/c3fe9c_834b72e5712943e38e8e4b5a582195b1~mv2.jpeg',
    guitarist_2:
      'https://static.wixstatic.com/media/c3fe9c_31a6ff6a58b54df992983e54ae5369c7~mv2.jpg',
    guitarist_1:
      'https://static.wixstatic.com/media/c3fe9c_d468b45590e349f382094f16b470073c~mv2.jpg',
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="about"
      className="relative w-full scroll-mt-28 bg-black py-14 md:min-h-screen lg:min-h-[70vh] lg:py-10 flex flex-col items-center justify-center"
    >
      <Image
        src="https://static.wixstatic.com/media/c3fe9c_42fb8564160e42ce920c9e85a29efe2e~mv2.jpeg"
        alt="Vinil89 about background"
        fill
        priority
        className="object-cover object-center opacity-50"
      />

      <div className="absolute inset-0 h-full w-full bg-[#666] opacity-85" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:h-[420px] lg:flex-row lg:items-center lg:gap-10">
        <div className="relative aspect-4/3 w-full overflow-hidden self-center lg:h-full lg:w-3/5 lg:aspect-auto">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop={true}
            className="mySwiper h-full w-full"
          >
            {Object.keys(images).map((key) => (
              <SwiperSlide key={key} className="relative">
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

        <div className="mt-2 flex w-full h-full flex-col items-center justify-between gap-5 self-center lg:mt-0 lg:w-2/5">
          <h1 className="text-4xl md:text-6xl">#A Vinil89</h1>
          <p className="w-full text-left text-xl/relaxed tracking-normal md:text-2xl/relaxed lg:text-xl/relaxed">
            Surgida em 2024, a Vinil89 é uma banda formada por músicos de diferentes estados do
            Brasil — Pernambuco, Pará, Brasília e Goiás. Carrega em sua essência a paixão pela
            música e o respeito pelos grandes mestres do pop/rock. Formada por músicos...
          </p>
          <button
            type="button"
            className="mt-3 cursor-pointer rounded-md border border-white bg-[#999999] px-4 py-2 text-white hover:border-black hover:bg-black hover:text-white"
            onClick={handleOpenModal}
          >
            Ver mais
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl font-bold">#A Vinil89</h1>
          <p className="text-base/relaxed text-left md:text-base/relaxed">
            Surgida em 2024, a Vinil89 é uma banda formada por músicos de diferentes estados do
            Brasil — Pernambuco, Pará, Brasília e Goiás. Carrega em sua essência a paixão pela
            música e o respeito pelos grandes mestres do pop/rock. Formada por músicos dedicados à
            preservação e renovação do gênero, a banda representa uma ponte entre as gerações,
            conectando os clássicos atemporais com as novas interpretações contemporâneas.
            <br />
            <br /> Com uma sonoridade autêntica e performances energéticas, a banda se dedica a
            reinterpretar os clássicos nacionais e internacionais que marcaram os anos 80 e 90:
            Barão Vermelho, Legião Urbana, Lulu Santos e Paralamas do Sucesso, RPM, Capital Inicial,
            REM, Paul McCartney, Morrissey, Green Day, Pearl Jam, INXS e tantos outros — mantendo
            viva a chama da poesia e da rebeldia que marcou uma geração.
            <br />
            <br /> Cada apresentação é uma viagem no tempo, um convite para reviver a era de ouro do
            pop/rock com um toque de contemporaneidade.
          </p>
        </div>
      </Modal>
    </section>
  );
}
