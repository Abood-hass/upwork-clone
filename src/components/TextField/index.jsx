import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import { InputFeild } from './style';

export default function Index({ icon, value, name, onChange, placeholder, err, type, sx }) {

    const [viewPassword, setViewPassword] = useState(false)

    const viewAbility = () => setViewPassword(prev => !prev)

    const Icon = {
        "email": <PersonSharpIcon sx={{ color: "#000" }} />,
        "password": <LockSharpIcon sx={{ color: "#000" }} />,
    }[icon]

    const inputProp = {
        style: {
            height: "40px",
            borderRadius: "8px",
            border: err && "1px solid red",
        },
        startAdornment: Icon && (
            <InputAdornment position="start">
                {Icon}
            </InputAdornment>
        ),
        endAdornment: (icon === "password") && (
            <InputAdornment position="end">
                {viewPassword
                    ? <VisibilityIcon onClick={viewAbility} />
                    : <VisibilityOffIcon onClick={viewAbility} />
                }
            </InputAdornment>
        ),
    }

    return (
        <InputFeild
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            type={type === "password" ? (viewPassword ? "password" : "text") : type}
            InputProps={inputProp}
            sx={sx}
        />
    )
}
