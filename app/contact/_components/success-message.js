import { GiCheckMark } from 'react-icons/gi';

export const SuccessMessage = () => {
  return (
    <div className="mx-auto text-center">
      <GiCheckMark className="mx-auto mb-10 size-24 rounded-full bg-brst-blue-200 p-4 text-white" />

      <h2 className="p-large-bold whitespace-pre-line text-center">
        Obrigado pelo interesse em nos contatar!
      </h2>

      <p className="p-medium whitespace-pre-line text-center text-brst-gray-800">
        Em breve entraremos em contato com você.
      </p>
    </div>
  );
};
