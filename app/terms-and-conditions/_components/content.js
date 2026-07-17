export default function TermsAndConditionsContent() {
  return (
    <div className="bg-vin-background">
      <div className="container section-p">
        <h1 className="h1 text-vin-white my-8">Termos e Condições de Uso</h1>

        <div className="flex flex-col gap-4">
          <p className="p-medium text-vin-gray-200">
            Seja bem-vindo ao site oficial da banda Vinil89. Ao acessar, navegar ou utilizar este
            site, você concorda explicitamente em cumprir e respeitar os termos e condições
            descritos abaixo.
          </p>

          <ul className="p-medium text-vin-white space-y-8">
            <li>
              <h3 className="h3 text-vin-white mb-3">Escopo e Propósito do Site</h3>
              <p className="p-medium text-vin-gray-200">
                Este site tem caráter exclusivamente informativo e de divulgação cultural. O
                objetivo da página é apresentar informações sobre a banda Vinil89, compartilhar
                nossa trajetória, disponibilizar vídeos de apresentações e fornecer um canal direto
                e simples de comunicação para dúvidas e contratação de shows.
              </p>
            </li>

            <li>
              <h3 className="h3 text-vin-white mb-3">Propriedade Intelectual e Uso do Conteúdo</h3>
              <p className="p-medium text-vin-gray-200">
                Todo o conteúdo disponibilizado neste site — incluindo textos, fotografias oficiais,
                logotipos, identidade visual, áudios e vídeos — é de propriedade exclusiva da banda
                Vinil89 ou de seus respectivos criadores, estando protegido pelas leis brasileiras
                de direitos autorais (Lei nº 9.610/1998).
              </p>
              <br />
              <ol className="list-disc ml-4 p-medium text-vin-gray-200 space-y-2">
                <li>
                  É permitido: Compartilhar links diretos do site ou de nossos vídeos em suas redes
                  sociais para fins de divulgação e apoio ao trabalho da banda.
                </li>
                <li>
                  É proibido: Copiar, reproduzir, modificar, baixar (fazer download), comercializar
                  ou utilizar qualquer material ou imagem do site para fins comerciais ou
                  publicitários sem a autorização prévia e expressa por escrito da banda.
                </li>
              </ol>
            </li>

            <li>
              <h3 className="h3 text-vin-white mb-3">
                Formulário de Contato e Conduta do Visitante
              </h3>
              <p className="p-medium text-vin-gray-200">
                O site disponibiliza um formulário onde o visitante pode, de forma voluntária,
                enviar seu nome, e-mail, telefone e uma mensagem. Ao utilizar esta ferramenta, você
                se compromete a fornecer informações verdadeiras e concorda em não enviar conteúdos
                que sejam ofensivos, difamatórios, spam, propagandas não solicitadas ou arquivos com
                códigos maliciosos que possam danificar o site.
              </p>
            </li>

            <li>
              <h3 className="h3 text-vin-white mb-3">
                Links para Plataformas de Terceiros e Vídeos
              </h3>
              <p className="p-medium text-vin-gray-200">
                Para melhor exibir nosso trabalho, este site exibe ou redireciona o usuário para
                vídeos hospedados em plataformas terceiras (como YouTube ou redes sociais). A
                Vinil89 não controla, não gerencia e não possui qualquer responsabilidade pelas
                políticas, termos de uso ou funcionamento dessas plataformas externas.
              </p>
            </li>

            <li>
              <h3 className="h3 text-vin-white mb-3">Limitação de Responsabilidade</h3>
              <p className="p-medium text-vin-gray-200">
                Trabalhamos para garantir que o site funcione de forma estável e com informações
                corretas. No entanto, a banda Vinil89 não se responsabiliza por eventuais
                indisponibilidades temporárias do site, problemas técnicos de conexão por parte do
                usuário ou pequenas imprecisões nas informações prestadas.
              </p>
            </li>

            <li>
              <h3 className="h3 text-vin-white mb-3">Lei Aplicável e Foro</h3>
              <p className="p-medium text-vin-gray-200">
                Estes Termos de Uso são regidos e interpretados de acordo com as leis da República
                Federativa do Brasil. Para dirimir quaisquer questões ou controvérsias oriundas
                deste documento, fica eleito o foro da comarca de Recife/PE.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
