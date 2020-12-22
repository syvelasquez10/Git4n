import { TextField } from '@material-ui/core';
import React, { ChangeEvent, FC, Fragment } from 'react';
import { formInputs, formInputsKeys, FormInputsType } from '../candidate';

interface FormFieldProps {
    inputs: FormInputsType;
    setInputs: (state: any) => any;
}
const FormField: FC<FormFieldProps> = ({inputs, setInputs}) => {
	const onChangeForField = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => 
	setInputs( (state: any) => {
        inputs[fieldName as keyof typeof formInputs].value = target.value
        if(target.value !== "") {
            inputs[fieldName as keyof typeof formInputs].error = false;
        }
		return {...state,[fieldName]:inputs[fieldName as keyof typeof formInputs]};
	});

	const inputsJsx = formInputsKeys.map((_, index) => { 
		const input = inputs[formInputsKeys[index]];
		return (
			<Fragment key={index}>
				<TextField
					required
					value={input.value}
					onChange={e => onChangeForField(e, formInputsKeys[index])}
					id={input.id}
					label={input.label}
					variant="outlined"
					type={input.type}
					helperText={input.error ? "Falta llenar este campo": ""}
					InputLabelProps={input.shrink ? {shrink: true}:{}}
					error = {input.error}
				/>
			</Fragment>)
	});
	
	return (
		<div className="candidate-form-field">
		    { inputsJsx }
		</div>
	);
};


export default FormField;