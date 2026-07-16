export default function Footer() {
  return (
    <footer className="bg-vin-background border-t border-vin-blue-250 py-8">
      <div className="container text-center text-vin-white">
        <p className="p-small mb-2">© 2026 Vinil89. Todos os direitos reservados.</p>

        <div className="flex items-center justify-center gap-2">
          <a href="/politica-de-privacidade" className="p-small capitalize">
            política de privacidade
          </a>

          <span className="text-vin-gray-300">|</span>

          <a href="/termos-e-condicoes" className="p-small capitalize">
            termos de uso
          </a>
        </div>
      </div>
    </footer>
  );
}
