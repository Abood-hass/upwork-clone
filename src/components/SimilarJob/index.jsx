import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import colors from '../../style/colors.json'

export default function index() {
    return (
        <Typography fontSize={"14px"}>
            <Link style={{ color: colors.mainGreenColor, fontWeight: 500 }}>HTML5 and javascript EXPERT LEVEL</Link>
            {" Create a single HTML + javascript file that uses html CANVAS to display a waiving flag. ALL needed libraries"}
        </Typography>
    )
}
