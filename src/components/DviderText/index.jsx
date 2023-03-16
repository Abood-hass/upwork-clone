import { Divider } from '@mui/material'
import React from 'react'
import { DvidorText } from './style'

export default function index({ text }) {
    return (
        <Divider sx={{ width: "100%" }}>
            <DvidorText children={text || "dvider"} />
        </Divider>
    )
}
