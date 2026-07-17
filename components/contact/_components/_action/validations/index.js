import { PHONE_FIELDS, REQUIRED_FIELDS } from '../constants';
import { validateEmailField } from './email';
import { validatePhoneField } from './phone';
import { validateRequiredField } from './required';

export const validateFields = (data) => {
  const errors = [];

  REQUIRED_FIELDS.forEach((field) => validateRequiredField(field, data, errors));
  PHONE_FIELDS.forEach((field) => validatePhoneField(field, data, errors));
  validateEmailField('email', data, errors);

  return errors;
};
