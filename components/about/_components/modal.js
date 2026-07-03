import Modal from '../../modal';

export default function AboutModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="section-title text-vin-gray-100">A Vinil89</h1>
        <p className="p-medium text-left text-vin-gray-100">
          Surgida em 2024, a Vinil89 é uma banda formada por músicos de diferentes estados do Brasil
          — Pernambuco, Pará, Brasília e Goiás. Carrega em sua essência a paixão pela música e o
          respeito pelos grandes mestres do pop/rock. Formada por músicos dedicados à preservação e
          renovação do gênero, a banda representa uma ponte entre as gerações, conectando os
          clássicos atemporais com as novas interpretações contemporâneas.
          <br />
          <br /> Com uma sonoridade autêntica e performances energéticas, a banda se dedica a
          reinterpretar os clássicos nacionais e internacionais que marcaram os anos 80 e 90: Barão
          Vermelho, Legião Urbana, Lulu Santos e Paralamas do Sucesso, RPM, Capital Inicial, REM,
          Paul McCartney, Morrissey, Green Day, Pearl Jam, INXS e tantos outros — mantendo viva a
          chama da poesia e da rebeldia que marcou uma geração.
          <br />
          <br /> Cada apresentação é uma viagem no tempo, um convite para reviver a era de ouro do
          pop/rock com um toque de contemporaneidade.
        </p>
      </div>
    </Modal>
  );
}
