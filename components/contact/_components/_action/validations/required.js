const isEmptyField = (field, data) => {
  return !data[field] || data[field].trim() === '';
};

export const validateRequiredField = (field, data, errors) => {
  const requiredError = {
    field,
    message: 'Este campo é obrigatório',
  };

  if (isEmptyField(field, data)) {
    errors.push(requiredError);
  }
};
