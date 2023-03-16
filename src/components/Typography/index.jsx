import { Typography } from '@mui/material'
import React from 'react'

export default function index({ text, sx, variant }) {
    return (
        <Typography variant={variant} sx={{ textAlign: "center", ...sx, }} children={text} />
    )
}
