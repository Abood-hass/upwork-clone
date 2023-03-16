import { Tooltip } from '@mui/material'
import React from 'react'
import Ques from '../../assets/icons/help.png'

export default function index() {
    return (
        <Tooltip title={"HELP"}>
            <img alt="" src={Ques} style={{ width: "15px", height: "15px" }} />
        </Tooltip>
    )
}
