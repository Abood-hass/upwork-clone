import { Checkbox, FormControlLabel, } from '@mui/material'
import React from 'react'

export default function index({ label, value, onChange }) {
    return (
        <FormControlLabel
            control={<Checkbox color='success' value={value} onChange={onChange} defaultChecked />}
            label={label} />
    )
}
