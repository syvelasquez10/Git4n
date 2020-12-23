import { FormInput } from '../components/shared/candidateForm';

export const checkInputsValidity = (inputs: FormInput[]): FormInput[] => {
  return inputs.map((input) => checkInputValidity(input));
};

export const isEveryInputValid = (inputs: FormInput[]): boolean => {
  return inputs.every((input) => checkInputValidity(input).error === '');
};

export const checkInputValidity = (input: FormInput): FormInput => {
  if (input.value === '') {
    input.error = 'Falta llenar este campo';
  } else if (input.type === 'email') {
    input.error = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(input.value) ? '' : 'El valor ingresado no es un correo';
  } else if (input.label === 'Cédula' && input.value.length < 7) {
    input.error = 'Una cédula debe tener más de 7 dígitos';
  } else if (input.value !== '') {
    input.error = '';
  }
  return input;
};
