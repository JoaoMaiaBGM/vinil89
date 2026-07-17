export default function PrivacyPolicyContent() {
  return (
    <div className="bg-vin-background">
      <div className="container section-p">
        <h1 className="h1 text-vin-white my-8">Política de Privacidade</h1>

        <div className="flex flex-col gap-4">
          <p className="p-medium text-vin-gray-200">
            Esta Política de Privacidade descreve, de forma simples e transparente, como a banda
            Vinil89 trata as informações coletadas através do formulário de contato do nosso site
            oficial.
          </p>

          <ul className="p-medium text-vin-white space-y-8">
            <li>
              <h3 className="h3 text-vin-white mb-3">Quais dados coletamos e para quê?</h3>
              <p className="p-medium text-vin-gray-200">
                O nosso site é essencialmente informativo, contendo dados sobre a banda e vídeos das
                nossas apresentações. Nós não criamos contas de usuário, não enviamos newsletters,
                não temos programas de recompensas e não fazemos spam.
              </p>
              <br />
              <p className="p-medium text-vin-gray-200">
                A única forma de coletarmos dados pessoais é se você decidir, voluntariamente, nos
                enviar uma mensagem através do nosso formulário de contato. Nesse caso, coletamos
                apenas:
              </p>
              <br />
              <ol className="list-disc list-inside p-medium text-vin-gray-200">
                <li>Nome</li>
                <li>E-mail</li>
                <li>Telefone</li>
                <li>Mensagem</li>
              </ol>
              <br />
              <p className="p-medium text-vin-gray-200">
                <span className="font-bold">Finalidade:</span> Esses dados são utilizados única e
                exclusivamente para responder à sua mensagem, seja para tirar dúvidas, receber
                feedbacks ou fornecer orçamentos de shows.
              </p>
            </li>

            <li>
              <h3 className="h3 text-vin-white mb-3">Compartilhamento e Armazenamento</h3>
              <p className="p-medium text-vin-gray-200">
                Nós não compartilhamos, vendemos ou divulgamos seus dados de contato para terceiros.
                As informações enviadas chegam diretamente ao e-mail da produção da banda e são
                mantidas em ambiente seguro apenas pelo tempo necessário para concluir o seu
                atendimento.
              </p>
            </li>

            <li>
              <h3 className="h3 text-vin-white mb-3">Cookies de Terceiros</h3>
              <p className="p-medium text-vin-gray-200">
                Como nosso site exibe vídeos (como links do YouTube ou plataformas semelhantes),
                essas empresas terceiras podem utilizar cookies próprios para o funcionamento
                técnico dos players de vídeo. Nós não temos controle ou acesso aos dados coletados
                por esses serviços externos.
              </p>
            </li>

            <li>
              <h3 className="h3 text-vin-white mb-3">Seus Direitos (LGPD)</h3>
              <p className="p-medium text-vin-gray-200">
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você pode solicitar a
                qualquer momento que a banda exclua o seu histórico de mensagens e dados de contato
                dos nossos registros de e-mail.
              </p>
            </li>

            <li>
              <h3 className="h3 text-vin-white mb-3">Alterações nesta Política</h3>
              <p className="p-medium text-vin-gray-200">
                Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta
                página de tempos em tempos para se manter informado.
              </p>
            </li>

            <li>
              <h3 className="h3 text-vin-white mb-3">Contato sobre Privacidade</h3>
              <p className="p-medium text-vin-gray-200">
                Se tiver dúvidas sobre como tratamos seus dados, entre em contato conosco pelo
                e-mail:
                <span className="font-bold">
                  {' '}
                  <a href="mailto:vinil89.oficial@gmail.com.br">vinil89.oficial@gmail.com.br</a>
                </span>
                .
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
