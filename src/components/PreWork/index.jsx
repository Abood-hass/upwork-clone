import React from 'react'
import { Box, Typography } from '@mui/material'
import colors from '../../style/colors.json'

export default function index({ jobTitle, date: { from, to }, feedBack, payment: { type, price } }) {
    return (
        <Box display={"flex"} flexDirection={"column"} gap={2} padding={"10px 6px"}>
            <Typography fontSize={"18px"} mb={"5px"} color={colors.mainGreenColor} children={jobTitle} />
            <Typography fontSize={"12px"} mb={"5px"} children={from + " - " + to} />
            <Typography fontSize={"12px"} mb={"5px"} children={feedBack} />
            <Box display={"flex"} justifyContent={"flex-start"} gap={"20px"}>
                <Typography fontSize={"12px"} fontWeight={500} mb={"5px"} children={price} />
                <Typography fontSize={"12px"} fontWeight={500} mb={"5px"} children={type} />
            </Box>
        </Box>
    )
}
