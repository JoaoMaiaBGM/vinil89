const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmailField = (field, data, errors) => {
  const email = data[field];
  if (!email || email.trim() === '') return;

  const isInvalidEmail = !EMAIL_REGEX.test(email);
  if (isInvalidEmail) {
    errors.push({
      field,
      message: 'Email inválido',
    });
  }
};
