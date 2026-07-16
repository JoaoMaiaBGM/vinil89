import { Header, Footer, InConstruction } from '@/layout';

export const metadata = {
  title: 'Termos e Condições',
  description: 'Termos e Condições de uso do site da Vinil89',
};

export default function TermsAndConditions() {
  return (
    <main id="termos-e-condicoes" className="bg-vin-background min-h-screen">
      <>
        <Header />
        <InConstruction />
        <Footer />
      </>
    </main>
  );
}
