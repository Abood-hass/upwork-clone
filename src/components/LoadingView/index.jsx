import { Box } from '@mui/material'
import React from 'react'
import loading from '../../assets/icons/loading-circle.gif'

export default function index() {
    return (
        <Box height={"500px"} display={"flex"} justifyContent={'center'} alignItems={'center'} >
            <img width={"34px"} height={"34px"} alt="" src={loading} />
        </Box>
    )
}
