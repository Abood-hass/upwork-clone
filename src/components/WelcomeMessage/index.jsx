import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { memo } from 'react'

function index() {
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    const today = new Date()
    const period = today.getHours() <= 17 ? "Afternoon" : "Evening"

    const order =
        (today.getDate() === 1) ? "st" :
            (today.getDate() === 2) ? "nd" :
                (today.getDate() === 3) ? "rd" : "th"

    const formatedDate = today.toLocaleDateString("en-US", options) + order
    return (
        <Box paddingX={5} paddingY={2}>
            <Typography sx={{ fontSize: "25px", fontWeight: 500 }} >{formatedDate}</Typography>
            <Typography sx={{ fontSize: "35px", fontWeight: 600, fontFamily: "unset" }}>
                Good {period}, Abdullah H.
            </Typography>
        </Box>
    )
}

export default memo(index)