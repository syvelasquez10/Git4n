import { Button, Card, CardActions, CardContent, CardHeader, Icon } from '@material-ui/core';
import React, { FC, FormEvent, useState } from 'react';
import { infoFormValue } from '../shared/cookieManager';
import { formInputs } from './candidate';
import './CandidateForm.css'
import FormField from './formField/FormField';

interface CandidateFormProps {
	setDialog: (isVisible: boolean) => void;
	setInfoForm: (infoForm: string[]) => void;
}
const CandidateForm: FC<CandidateFormProps> = ({ setDialog, setInfoForm }) => {
	const [inputs, setInputs] = useState(formInputs);

	const handleSubmit = (evt: FormEvent<HTMLFormElement> ) => {
		evt.preventDefault();
		const inputsList = Object.values(inputs);
		const values = inputsList.map(input => input.value);
		if(values.every( input => input !== "")) {
			document.cookie = "info_form = "+values;
			inputsList.forEach((input, index) => {
				input.value = "";
			});
			setInfoForm(infoFormValue())
			setDialog(true);
		} else {
			inputsList.forEach((input, index) => {
				if(input.value === "") {
					input.error = true;
				} else {
					input.error = false;
				}
			});
		}
		setInputs({...inputs});
	}
	
	return (
		<div className="candidate-form">
			<Card className="candidate-form-card">
			<CardHeader
        title="Formulario de candidatos"
        subheader="September 14, 2016"
      />
			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
      	<CardContent className="candidate-form-card-content">
					<FormField inputs={inputs} setInputs={setInputs} />
				</CardContent>
				<CardActions className="candidate-form-card-actions">
					<Button
						variant="contained"
						color="primary"
						type="submit"
						endIcon={<Icon>send</Icon>}
					>
						Guardar
					</Button>
				</CardActions>
			</form>
    </Card>
		</div>
	);
};


export default CandidateForm;