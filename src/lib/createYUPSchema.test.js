import * as Yup from 'yup';
import { createYupSchema } from './createYUPSchema'; // update with the correct path

describe('createYupSchema', () => {
  test('should create a Yup string schema with required and email validations', () => {
    const config = {
      name: 'email',
      validationType: 'string',
      validations: [
        { type: 'required', params: ['Email is required'] },
        { type: 'email', params: ['Enter a valid email address'] },
      ],
    };

    let schema = {};

    schema = createYupSchema(schema, config);

    const yupSchema = Yup.object().shape(schema);

    const validObject = { email: 'example@domain.com' };
    const invalidObject = { email: 'invalid-email' };

    return Promise.all([
      expect(yupSchema.isValid(validObject)).resolves.toBe(true),
      expect(yupSchema.isValid(invalidObject)).resolves.toBe(false),
    ]);
  });

  test('should create a Yup number schema with required and min validations', () => {
    const config = {
      name: 'age',
      validationType: 'number',
      validations: [
        { type: 'required', params: ['Age is required'] },
        { type: 'min', params: [18, 'Must be at least 18 years old'] },
      ],
    };

    let schema = {};

    schema = createYupSchema(schema, config);

    const yupSchema = Yup.object().shape(schema);

    const validObject = { age: 25 };
    const invalidObject = { age: 17 };

    return Promise.all([
      expect(yupSchema.isValid(validObject)).resolves.toBe(true),
      expect(yupSchema.isValid(invalidObject)).resolves.toBe(false),
    ]);
  });

  test('should create a Yup boolean schema with required validation', () => {
    const config = {
      name: 'isActive',
      validationType: 'boolean',
      validations: [
        { type: 'required', params: ['isActive is required'] },
      ],
    };

    let schema = {};

    schema = createYupSchema(schema, config);

    const yupSchema = Yup.object().shape(schema);

    const validObject = { isActive: true };
    const invalidObject = {};

    return Promise.all([
      expect(yupSchema.isValid(validObject)).resolves.toBe(true),
      expect(yupSchema.isValid(invalidObject)).resolves.toBe(false),
    ]);
  });

  test('should handle unknown validation types gracefully', () => {
    const config = {
      name: 'unknownField',
      validationType: 'unknownType',
      validations: [
        { type: 'required', params: ['This should not be added'] },
      ],
    };

    let schema = {};

    schema = createYupSchema(schema, config);

    expect(schema).toEqual({});
  });

  test('should handle missing validation functions gracefully', () => {
    const config = {
      name: 'field',
      validationType: 'string',
      validations: [
        { type: 'unknownValidation', params: ['This should not be added'] },
      ],
    };

    let schema = {};

    schema = createYupSchema(schema, config);

    expect(schema).toHaveProperty('field');
  });
});
