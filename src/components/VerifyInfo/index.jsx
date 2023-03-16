import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

export default function index({ label }) {
    return (
        <Box display={"flex"} gap={"4px"}>
            <VerifiedIcon sx={{ width: "15px", height: "15px" }} color='info' />
            <Typography sx={{ fontWeight: "420", fontSize: "12px", }}>{label || "Payment method verified"}</Typography>
        </Box>
    )
}
