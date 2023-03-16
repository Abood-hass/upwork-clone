import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import UpworkLogo from '../../assets/images/upwork-logo.png'
import breackPoint from '../../style/breackPoint.json'
import { LogoImg } from './style';

export default function Index({ width }) {
    const matches = useMediaQuery(breackPoint.mx);

    return (
        <Box
            width={width || "100%"}
            display={"flex"}
            justifyContent={matches ? "center" : "flex-start"} >
            <LogoImg alt="" src={UpworkLogo} />
        </Box>
    )
}
