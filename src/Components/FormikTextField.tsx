import React, { ReactElement } from 'react'
import { useField, FieldHookConfig } from 'formik';
import { TextField, TextFieldProps } from '@material-ui/core';

export type FormikTextFieldProps = FieldHookConfig<string> & {
    textFieldProps: TextFieldProps    
}

export default function FormikTextField(props: FormikTextFieldProps): ReactElement {
    const [field, meta]  = useField(props)

    let textFieldProps: TextFieldProps = {...props.textFieldProps};
    textFieldProps.error = meta.error ? true : false;
    textFieldProps.helperText = meta.error ?? textFieldProps.helperText;

    return (
        <TextField
            {...field}
            {...textFieldProps}
        />
    )
}
