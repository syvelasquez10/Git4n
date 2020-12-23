import { TextField } from '@material-ui/core';
import React, { ChangeEvent, FC, Fragment } from 'react';
import { checkInputValidity } from '../../services/fieldValidity.service';
import { formInputs, formInputsKeys, FormInputsType } from './candidateForm';

interface FormFieldProps {
  inputs: FormInputsType;
  setInputs: (oldState: any) => any;
}
const FormField: FC<FormFieldProps> = ({ inputs, setInputs }) => {
  // updates de value of a input when a change event is launch
  const onChangeForField = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) =>
    setInputs((oldState: any) => {
      // takes the input that launched the test event updates the value and checks for errors
      let actualInput = inputs[fieldName as keyof typeof formInputs];
      actualInput.value = target.value;
      actualInput = checkInputValidity(actualInput);
      // update the state with all the old values plus the new input value
      return { ...oldState, [fieldName]: actualInput };
    });

  const inputsJsx = formInputsKeys.map((_, index) => {
    const input = inputs[formInputsKeys[index]];
    const { value, id, label, type, error, shrink } = input;
    return (
      <Fragment key={index}>
        <TextField
          required
          value={value}
          onChange={(e) => onChangeForField(e, formInputsKeys[index])}
          id={id}
          label={label}
          variant="outlined"
          type={type}
          helperText={error}
          inputProps={type === 'date' ? {max: (new Date()).toISOString().split('T')[0]}: {}}
          InputLabelProps={shrink ? { shrink: true } : {}}
          error={error !== ''}
        />
      </Fragment>
    );
  });

  return <div className="candidate-form-field">{inputsJsx}</div>;
};

export default FormField;
