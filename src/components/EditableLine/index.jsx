import { Box, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import colors from '../../style/colors.json'

export default function index({ title, desc, padding, sx, iconSx }) {

    const paddingStyle = padding || { paddingX: 5, paddingY: 2 }
    return (
        <Box {...paddingStyle}  >
            <Box gap={1} display={"flex"} alignItems={"center"}  >
                <Typography sx={sx} fontSize={"15px"} fontWeight={"400"} children={title} />
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    padding={"2px"}
                    borderRadius={"50%"}
                    sx={iconSx}
                    border={"1px solid " + colors.mainGreenColor}>
                    <EditIcon color='success' sx={{ fontSize: "15px", }} />
                </Box>
            </Box>
            <Typography fontSize={"12px"} children={desc} />
        </Box>
    )
}
