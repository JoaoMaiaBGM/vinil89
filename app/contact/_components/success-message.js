import { GiCheckMark } from 'react-icons/gi';

export const SuccessMessage = () => {
  return (
    <div className="mx-auto text-center">
      <GiCheckMark className="mx-auto mb-10 size-24 rounded-full bg-vin-success p-4 text-vin-white" />

      <h2 className="p-large-bold whitespace-pre-line text-center">
        Obrigado pelo interesse em nos contatar!
      </h2>

      <p className="p-medium whitespace-pre-line text-center text-vin-gray-300">
        Em breve entraremos em contato com você.
      </p>
    </div>
  );
};
