import { FaTools } from 'react-icons/fa';

export default function InConstruction() {
  return (
    <div className="superhero flex flex-col items-center gap-4 justify-center min-h-screen">
      <FaTools className="text-vin-blue-100" size={48} />

      <h1 className="h1 font-bold text-vin-white">Em construção</h1>

      <p className="p-medium text-vin-white text-center">
        Estamos trabalhando para trazer o melhor conteúdo para você.
        <br />
        Volte mais tarde para ver o resultado.
      </p>
    </div>
  );
}
