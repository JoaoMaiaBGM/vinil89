import { Header, Footer, InConstruction } from '@/layout';
import PrivacyPolicyContent from './_components/content';

export const metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade da Vinil89',
};

export default function PrivacyPolicy() {
  return (
    <main id="politica-de-privacidade" className="bg-vin-background min-h-screen">
      <>
        <Header />
        {PrivacyPolicyContent ? <PrivacyPolicyContent /> : <InConstruction />}
        <Footer />
      </>
    </main>
  );
}
