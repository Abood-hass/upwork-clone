import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React from 'react'

export default function CustomCheckbox({ label, value, selected, onChange, checked, gruop }) {


    return (
        <FormControlLabel
            control={<Checkbox radioGroup={gruop} name={label} value={value} onClick={onChange} checked={checked} defaultChecked={selected} />}
            label={<Typography fontSize={"13px"}>{label}</Typography>}
        />
    )
}

