import { Checkbox, CheckboxProps, FormControlLabel } from '@material-ui/core'
import { FieldHookConfig, useField } from 'formik'
import React, { ReactElement, ReactNode } from 'react'

type FormikCheckboxProps = FieldHookConfig<boolean> & {
    FormControlLabelProps: FCLProps,
    CheckboxProps?: CheckboxProps
}

export interface FCLProps {
    label: ReactNode;
    labelPlacement? : 'end' | 'start' | 'top' | 'bottom';
    style?: React.CSSProperties;
}

export default function FormikCheckbox(props: FormikCheckboxProps): ReactElement {
    const [field]  = useField(props);

    return (
        <FormControlLabel
            {...props.FormControlLabelProps}
            control={<Checkbox 
                
                {...field}
                {...props.CheckboxProps}
            />}
        />
    )
}
