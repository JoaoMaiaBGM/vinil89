import Image from 'next/image';
import { LiaYoutube, LiaInstagram, LiaPhoneSolid, LiaEnvelope } from 'react-icons/lia';

export default function Information() {
  return (
    <div>
      <h3 className="h3 font-bold section-subtitle text-primary uppercase mb-6">
        entre em Contato
      </h3>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <LiaPhoneSolid className="w-6 h-6 text-accent shrink-0 mt-1" />
          <div>
            <p className="p-medium text-vin-secondaryForeground font-bold capitalize">Telefone</p>
            <p className="p-small text-vin-gray-400 capitalize">(81) 99178-2978</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <LiaEnvelope className="w-6 h-6 text-accent shrink-0 mt-1" />
          <div>
            <p className="p-medium text-vin-secondaryForeground font-bold">E-mail</p>
            <p className="p-small text-vin-gray-400">vinil89.oficial@gmail.com</p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="p-medium text-vin-secondaryForeground font-bold capitalize mb-4">
            Redes Sociais
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/bandavinil89"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
            >
              <LiaInstagram className="w-6 h-6 text-accent-foreground" />
            </a>
            <a
              href="https://youtube.com/@vinil89.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
            >
              <LiaYoutube className="w-6 h-6 text-accent-foreground" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-lg overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/c3fe9c_2811d51832f249069e67fd8949aa6586~mv2.jpeg"
          alt="Banda em performance"
          className="w-full h-48 object-cover"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
