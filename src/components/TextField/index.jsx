import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';

import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

export default function Index(props) {

    const Icon = {
        "email": <PersonSharpIcon sx={{ color: "#000" }} />,
        "password": <LockSharpIcon sx={{ color: "#000" }} />,
    }[props.Icon]

    return (
        <TextField
            {...props}
            sx={{ ...props.sx, width: "100%" }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {Icon}
                    </InputAdornment>
                ),
            }}
        >


        </TextField>
    )
}
