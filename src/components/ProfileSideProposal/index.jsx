import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import colors from '../../style/colors.json'

export default function index({ title, subTitle, link }) {
    return (
        <Box display={"flex"} flexDirection={"column"} gap={10} padding={3}>
            <Box>
                <Typography variant='h5'>
                    {title}
                </Typography>
                <Typography variant='body1'>
                    <NavLink
                        style={{ color: colors.mainGreenColor }}
                        children={subTitle} />
                </Typography>
            </Box>
            <Typography variant='body2'>
                <NavLink
                    style={((isPending) => ({ color: colors.mainGreenColor }))}
                    children={link} />
            </Typography>
        </Box>
    )
}
