export interface FormInput {
  value: string;
  label: string;
  id: string;
  type: string;
  shrink: boolean;
  error: string;
}

export interface FormInputsType {
  names: FormInput;
  lastNames: FormInput;
  email: FormInput;
  githubUser: FormInput;
  id: FormInput;
  dateBirth: FormInput;
}

export const formInputs: FormInputsType = {
  names: {
    value: '',
    label: 'Nombres',
    id: 'input-names',
    type: 'text',
    shrink: false,
    error: '',
  },
  lastNames: {
    value: '',
    label: 'Apellidos',
    id: 'input-last-names',
    type: 'text',
    shrink: false,
    error: '',
  },
  email: {
    value: '',
    label: 'Correo',
    id: 'input-email',
    type: 'email',
    shrink: false,
    error: '',
  },
  githubUser: {
    value: '',
    label: 'Usuario de GitHub',
    id: 'input-github-user',
    type: 'text',
    shrink: false,
    error: '',
  },
  id: {
    value: '',
    label: 'Cédula',
    id: 'input-id',
    type: 'number',
    shrink: false,
    error: '',
  },
  dateBirth: {
    value: '',
    label: 'Fecha de nacimiento',
    id: 'input-date-birth',
    type: 'date',
    shrink: true,
    error: '',
  },
};

export const formInputsKeys = Object.keys(formInputs) as (keyof typeof formInputs)[];
