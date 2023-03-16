import { Box, Typography } from '@mui/material'
import React from 'react'
import defualt from '../../assets/images/defaultAvatar.jpg'
export default function index({ src, expand, imgSize }) {

    const defualtSize = { height: expand ? "50px" : "30px", width: expand ? "50px" : "30px" }

    const size = (imgSize ? { width: imgSize, height: imgSize } : defualtSize)

    return (
        <Box display={"flex"} sx={expand ? { padding: 2, gap: 2 } : {}}>
            <img alt=''
                src={src || defualt}
                style={{ borderRadius: "50%", ...size }} />

            {expand &&
                <Box>
                    <Typography variant='h6' fontSize={"15px"} children={"Abdullah Hassouna"} />
                    <Typography variant='body2' fontSize={"12px"} children={"Freelancer"} />
                </Box>}
        </Box>
    )
}
