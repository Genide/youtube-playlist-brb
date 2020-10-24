import { Slider, SliderTypeMap, Typography } from '@material-ui/core'
import { DefaultComponentProps } from '@material-ui/core/OverridableComponent'
import { FieldHookConfig, useField } from 'formik'
import React, { Fragment, ReactElement } from 'react'

type FormikSliderProps = FieldHookConfig<number> & {
    label?: string
    SliderProps?: DefaultComponentProps<SliderTypeMap<{}, 'span'>>
}

export default function FormikSlider(props: FormikSliderProps): ReactElement {
    const [field, , helpers] = useField(props);

    let onSliderChange = (_event: React.ChangeEvent<{}>, value: number | number[]) => {
        if (Array.isArray(value)) {
            helpers.setValue(value[0])
        } else {
            helpers.setValue(value)
        }
    }

    return (
        <Fragment>
            <Typography gutterBottom>{props.label}</Typography>
            <Slider
                {...field}
                {...props.SliderProps}
                aria-labelledby={field.name}
                onChange={onSliderChange}
                onBlur={() => helpers.setTouched(true)}
            />
        </Fragment>
    )
}
