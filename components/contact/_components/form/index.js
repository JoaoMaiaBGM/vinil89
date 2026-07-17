'use client';

import { useActionState, useEffect, useMemo, useRef, useState } from 'react';

import formatPhoneMask from '@/lib/utils/phone-mask';
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
  const [phone, setPhone] = useState('');

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
    <div>
      <form action={formAction} ref={formRef} className="space-y-4">
        <div className="space-y-3 md:space-y-2">
          <div>
            <label
              className="block p-medium text-vin-secondaryForeground font-bold capitalize mb-2"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Seu nome"
              className="w-full p-small px-4 py-3 bg-vin-background border border-vin-blue-250 rounded-lg text-vin-white placeholder-vin-gray-400 focus:outline-none focus:border-primary transition-colors"
              autoComplete="name"
            />
            {nameError && (
              <p data-error className="pt-1 text-sm text-vin-error">
                {nameError}
              </p>
            )}
          </div>

          <div>
            <label
              className="block p-medium text-vin-secondaryForeground font-bold capitalize mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Seu email"
              className="w-full p-small px-4 py-3 bg-vin-background border border-vin-blue-250 rounded-lg text-vin-white placeholder-vin-gray-400 focus:outline-none focus:border-primary transition-colors"
              autoComplete="email"
            />
            {emailError && (
              <p data-error className="pt-1 text-sm text-vin-error">
                {emailError}
              </p>
            )}
          </div>

          <div>
            <label
              className="block p-medium text-vin-secondaryForeground font-bold capitalize mb-2"
              htmlFor="phone"
            >
              Telefone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="(00)00000-0000"
              className="w-full p-small px-4 py-3 bg-vin-background border border-vin-blue-250 rounded-lg text-vin-white placeholder-vin-gray-400 focus:outline-none focus:border-primary transition-colors"
              autoComplete="tel"
              value={formatPhoneMask(phone)}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && (
              <p data-error className="pt-1 text-sm text-vin-error">
                {phoneError}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            className="block p-medium text-vin-secondaryForeground font-bold capitalize mb-2"
            htmlFor="message"
          >
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Sua mensagem aqui..."
            className="w-full p-small px-4 py-3 bg-vin-background border border-vin-blue-250 rounded-lg text-vin-white placeholder-vin-gray-400 focus:outline-none focus:border-primary transition-colors"
          />
          {messageError && (
            <p data-error className="pt-1 text-sm text-vin-error">
              {messageError}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full btn-accent p-medium-bold h-12 px-4 flex items-center justify-center gap-2"
        >
          {isPending ? 'Enviando...' : 'Enviar mensagem'}
        </button>
        {formError && (
          <p data-error className="text-center text-sm text-vin-error md:text-right">
            {formError}
          </p>
        )}
      </form>
    </div>
  );
};
