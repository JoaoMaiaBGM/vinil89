import { Header, Footer, InConstruction } from '@/layout';
import TermsAndConditionsContent from './_components/content';

export const metadata = {
  title: 'Termos e Condições',
  description: 'Termos e Condições de uso do site da Vinil89',
};

export default function TermsAndConditions() {
  return (
    <main id="termos-e-condicoes" className="min-h-screen">
      <>
        <Header />
        {TermsAndConditionsContent ? <TermsAndConditionsContent /> : <InConstruction />}
        <Footer />
      </>
    </main>
  );
}
