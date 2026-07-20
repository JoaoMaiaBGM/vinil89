'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  PiUsersThreeLight,
  PiMusicNotesLight,
  PiCalendarBlankLight,
  PiUserCheckLight,
  PiHeartStraightLight,
} from 'react-icons/pi';

import { SectionTitle } from '@/layout';
import AboutModal from './_components/modal';

const STATS_DATA = [
  {
    title: 'Integrantes',
    value: 5,
    bg: 'primary',
    icon: <PiUsersThreeLight className="text-vin-primary" size={28} />,
  },
  {
    title: 'Fundação',
    value: 2024,
    bg: 'blue',
    icon: <PiCalendarBlankLight className="text-vin-blue-100" size={28} />,
  },
  {
    title: 'Músicas no repertório',
    value: '60+',
    bg: 'primary',
    icon: <PiMusicNotesLight className="text-vin-primary" size={28} />,
  },
  {
    title: 'Seguidores e crescendo',
    value: '700+',
    bg: 'blue',
    icon: <PiHeartStraightLight className="text-vin-blue-100" size={28} />,
  },
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="sobre" className="section-p bg-vin-blue-300">
      <div className="container section-m flex flex-col items-center justify-center">
        <SectionTitle title="A Vinil89" />

        <div className="grid gap-8 items-center md:grid-cols-2 h-full">
          <div className="relative h-[400px] min-h-96 rounded-lg overflow-hidden">
            <Image
              src="https://static.wixstatic.com/media/c3fe9c_74e7cd0c73cd43689ca7ef1d5dbf5c37~mv2.jpeg"
              alt="Banda Vinil89"
              className="w-full h-full object-cover object-top"
              fill
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
          </div>

          <div className="flex flex-col items-start justify-between gap-6 h-full xl:justify-center xl:gap-10">
            <p className="p-medium text-vin-gray-400 leading-relaxed lg:p-large">
              Surgida em 2024, a Vinil89 é uma banda formada por músicos de diferentes estados do
              Brasil — Pernambuco, Pará, Brasília e Goiás. Carrega em sua essência a paixão pela
              música e o respeito pelos grandes mestres do pop/rock.
            </p>

            <p className="p-medium text-vin-gray-400 leading-relaxed lg:p-large">
              Formada por músicos dedicados à preservação e renovação do gênero, a banda representa
              uma ponte entre as gerações, conectando os clássicos atemporais com as novas
              interpretações...
            </p>

            <button type="button" onClick={handleOpenModal} className="btn-accent">
              Conheça Nossa História
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full md:grid-cols-4 gap-4 mt-16">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.title}
              className="bg-vin-blue-350 h-[150px] flex flex-col items-center justify-center rounded-lg p-6 text-center transition-colors space-y-2 lg:h-[200px]"
            >
              <h2
                className={`h1 font-bold ${stat.bg === 'primary' ? 'text-vin-primary' : 'text-vin-blue-100'}`}
              >
                {stat.value}
              </h2>
              <p className="p-small text-vin-white">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>

      <AboutModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
