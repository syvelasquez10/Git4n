interface FormInput {
    value: string;
    label: string;
    id: string;
    type: string;
    shrink: boolean;
    error: boolean;
};

export interface FormInputsType {
    names: FormInput;
    lastNames: FormInput;
    email: FormInput;
    githubUser: FormInput;
    id: FormInput;
    dateBirth: FormInput;
};

export const formInputs: FormInputsType = {
    names: {
        value: "",
        label: "Nombres",
        id: "input-names",
        type: 'text',
        shrink: false,
        error: false
    },
    lastNames: {
        value: "",
        label: "Apellidos",
        id: "input-last-names",
        type: 'text',
        shrink: false,
        error: false
    },
    email: {
        value: "",
        label: "Correo",
        id: "input-email",
        type: 'email',
        shrink: false,
        error: false
    },
    githubUser: {
        value: "",
        label: "Usuario de GitHub",
        id: "input-github-user",
        type: 'text',
        shrink: false,
        error: false
    },
    id: {
        value: "",
        label: "Cédula",
        id: "input-id",
        type: 'text',
        shrink: false,
        error: false
    },
    dateBirth: {
        value: "",
        label: "Fecha de nacimiento",
        id: "input-date-birth",
        type: 'date',
        shrink: true,
        error: false
    }
};

export const formInputsKeys = Object.keys(formInputs) as (keyof typeof formInputs)[];