'use client';

import { useActionState, useEffect, useMemo, useRef } from 'react';

import { sendContactForm } from '../_action';
import { SuccessMessage } from '../success-message';

const INITIAL_FORM_STATE = {
  success: false,
  errors: [],
};

export const ContactForm = () => {
  const formRef = useRef(null);
  const [state, formAction, isPending] = useActionState(sendContactForm, INITIAL_FORM_STATE);
  const stateErrors = state?.errors;
  const errors = useMemo(() => stateErrors ?? [], [stateErrors]);
  const success = state?.success ?? false;

  const getErrorByField = (field) => {
    return errors.find((error) => error.field === field)?.message;
  };

  useEffect(() => {
    if (formRef.current && errors.length > 0) {
      const errorElement = formRef.current.querySelector('[data-error]');
      if (errorElement) {
        errorElement.parentElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [errors]);

  if (success) {
    return <SuccessMessage />;
  }

  const nameError = getErrorByField('name');
  const emailError = getErrorByField('email');
  const phoneError = getErrorByField('phone');
  const messageError = getErrorByField('message');
  const formError = getErrorByField('_form');

  return (
    <form
      action={formAction}
      ref={formRef}
      className="grid gap-3 md:grid-cols-[1fr_1.05fr] md:gap-2"
    >
      <div className="space-y-3 md:space-y-2">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full rounded-md border border-white/40 bg-[#e6e6e6] px-4 py-3 text-xl text-black placeholder:text-black/75 focus:outline-none md:py-2 md:text-base"
          />
          {nameError && (
            <p data-error className="pt-1 text-sm text-red-300">
              {nameError}
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md border border-white/40 bg-[#e6e6e6] px-4 py-3 text-xl text-black placeholder:text-black/75 focus:outline-none md:py-2 md:text-base"
          />
          {emailError && (
            <p data-error className="pt-1 text-sm text-red-300">
              {emailError}
            </p>
          )}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Telefone"
            className="w-full rounded-md border border-white/40 bg-[#e6e6e6] px-4 py-3 text-xl text-black placeholder:text-black/75 focus:outline-none md:py-2 md:text-base"
          />
          {phoneError && (
            <p data-error className="pt-1 text-sm text-red-300">
              {phoneError}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 md:gap-2">
        <div>
          <textarea
            name="message"
            rows={6}
            placeholder="Digite sua mensagem aqui..."
            className="min-h-[170px] w-full resize-none rounded-md border border-white/40 bg-[#e6e6e6] px-4 py-3 text-xl text-black placeholder:text-black/75 focus:outline-none md:min-h-[106px] md:py-2 md:text-base"
          />
          {messageError && (
            <p data-error className="pt-1 text-sm text-red-300">
              {messageError}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="mx-auto w-[160px] rounded-lg border border-white/80 bg-[#8d8d8d] px-6 py-3 text-3xl tracking-[0.12em] text-white transition-colors hover:bg-[#737373] md:ml-auto md:mr-0 md:w-[110px] md:rounded-md md:px-4 md:py-1.5 md:text-base md:tracking-normal"
        >
          {isPending ? 'Enviando...' : 'Enviar'}
        </button>
        {formError && (
          <p data-error className="text-center text-sm text-red-300 md:text-right">
            {formError}
          </p>
        )}
      </div>
    </form>
  );
};
