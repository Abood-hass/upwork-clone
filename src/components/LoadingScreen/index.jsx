import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

export default function index({ open, handleClose, color }) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color={color || "inherit"} />
        </Backdrop>
    )
}
