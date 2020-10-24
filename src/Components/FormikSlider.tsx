import { Slider, SliderTypeMap } from '@material-ui/core'
import { DefaultComponentProps } from '@material-ui/core/OverridableComponent'
import { FieldHookConfig, useField } from 'formik'
import React, { ReactElement } from 'react'

type FormikSliderProps = FieldHookConfig<number> & {
    SliderProps?: DefaultComponentProps<SliderTypeMap<{}, 'label'>>
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
        <Slider
            {...field}
            {...props.SliderProps}
            aria-labelledby={field.name}
            onChange={onSliderChange}
            onBlur={() => helpers.setTouched(true)}
        />
    )
}
