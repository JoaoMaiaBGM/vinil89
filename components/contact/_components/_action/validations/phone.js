const isInvalidPhoneField = (field, data) => {
  const phoneValue = data[field];
  if (!phoneValue || phoneValue.trim() === '') {
    return false;
  }

  const digitsOnly = phoneValue.replace(/\D/g, '');
  return digitsOnly.length < 10 || digitsOnly.length > 11;
};

export const validatePhoneField = (field, data, errors) => {
  if (isInvalidPhoneField(field, data)) {
    errors.push({
      field,
      message: 'Número de telefone inválido',
    });
  }
};
