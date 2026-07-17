'use server';

import { saveContact } from './save';
import { validateFields } from './validations';

const getFieldValue = (formData, field) => {
  const value = formData.get(field);
  return typeof value === 'string' ? value.trim() : '';
};

export const sendContactForm = async (_, formData) => {
  const data = {
    name: getFieldValue(formData, 'name'),
    email: getFieldValue(formData, 'email'),
    phone: getFieldValue(formData, 'phone'),
    message: getFieldValue(formData, 'message'),
  };

  const errors = validateFields(data);
  if (errors.length > 0) {
    return {
      success: false,
      errors,
    };
  }

  const result = await saveContact(data);
  if (!result.success) {
    return {
      success: false,
      errors: [
        {
          field: '_form',
          message: result.error,
        },
      ],
    };
  }

  return {
    success: true,
    errors: [],
  };
};
