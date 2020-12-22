import { Button, Card, CardActions, CardContent, CardHeader, Icon } from '@material-ui/core';
import React, { FC, FormEvent, useState } from 'react';
import { formInputs } from './candidate';
import './CandidateForm.css'
import FormField from './formField/FormField';

interface CandidateFormProps {
  setDialog: (isVisible: boolean) => void;
}
const CandidateForm: FC<CandidateFormProps> = ({ setDialog }) => {
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
			<Card>
			<CardHeader
        title="Formulario de candidatos"
        subheader="September 14, 2016"
      />
			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
      	<CardContent>
					<FormField inputs={inputs} setInputs={setInputs} />
				</CardContent>
				<CardActions>
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