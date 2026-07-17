import Image from 'next/image';
import { ContactForm } from './_components/form';
import Information from './_components/information';
import { SectionTitle } from '@/layout';

export default function Contact() {
  return (
    <section id="contato" className="section-p bg-vin-blue-300">
      <div className="container section-m">
        <SectionTitle title="Contato" />

        <div className="grid gap-12 items-center md:grid-cols-2">
          <Information />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
