import { Button, Card, CardActions, CardContent, CardHeader, Icon } from '@material-ui/core';
import React, { FC, FormEvent, useState } from 'react';
import { infoFormCookieValue } from '../../services/cookie.service';
import { formInputs, FormInput } from '../shared/candidateForm';
import './CandidateForm.css';
import FormField from '../shared/FormField';
import { checkInputsValidity, isEveryInputValid } from '../../services/fieldValidity.service';

interface CandidateFormProps {
  setSnackBar: (snackBarMessage: string) => void;
  setInfoForm: (infoForm: string[]) => void;
}
const CandidateForm: FC<CandidateFormProps> = ({ setSnackBar, setInfoForm }) => {
  const [inputs, setInputs] = useState(formInputs);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    let inputsList = Object.values(inputs);
    const inputValues = inputsList.map((input) => input.value);
    if (isEveryInputValid(inputsList)) {
      inputsList = storeCookie(inputsList, inputValues);
    } else {
      inputsList = checkInputsValidity(inputsList);
    }
    setInputs({ ...inputs });
  };

  const storeCookie = (inputsList: FormInput[], inputValues: FormInput[]): FormInput[] => {
    document.cookie = 'info_form = ' + inputValues;
    // sets de form info from the cookie
    setInfoForm(infoFormCookieValue());
    setSnackBar('El candidato fue guardado');
    // resets the form inputs
    inputsList.forEach((input) => (input.value = ''));
    return inputsList;
  };

  return (
    <div className="candidate-form">
      <Card className="candidate-form-card">
        <CardHeader title="Formulario de candidatos" />
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <CardContent className="candidate-form-card-content">
            <FormField inputs={inputs} setInputs={setInputs} />
          </CardContent>
          <CardActions className="candidate-form-card-actions">
            <Button variant="contained" color="primary" type="submit" endIcon={<Icon>send</Icon>}>
              Guardar
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

export default CandidateForm;
