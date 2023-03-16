import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';


export default function Index({ text, link }) {
    const nav = useNavigate()

    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            paddingX={3}
            paddingY={2}
            onClick={() => nav(link)}
        >
            <Typography fontSize={"17px"} fontWeight={"400"} children={text} />
            <ArrowForward />
        </Box>
    )
}
