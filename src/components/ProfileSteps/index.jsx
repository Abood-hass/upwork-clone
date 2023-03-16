import { Divider, Typography } from '@mui/material'
import ProgressBar from '../ProgressBar'
import React, { Component } from 'react'
import { ArrowIconContainer, ProfileViewBox, ProfileViewTitle } from './style'
import { Box } from '@mui/system'
import { NavLink } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import colors from '../../style/colors.json'

export default class index extends Component {

    render() {
        return (
            <ProfileViewBox>
                <Box paddingX={5} paddingY={2}>
                    <ProfileViewTitle children={
                        <NavLink style={{ color: "#000", textDecoration: "none", }} children={"Profile Completeness"} />
                    } />
                    <ProgressBar />
                </Box>
                <Divider />
                <Box paddingX={6} paddingY={2} display={"flex"} flexDirection={"column"} gap="10px">
                    <Typography fontSize={"13px"}>
                        Ways to stand out to clients right now...
                    </Typography>
                    <Box paddingX={3} paddingY={1} position={"relative"} sx={{ background: "#fff" }}>
                        <Typography fontSize={"12px"}>
                            Ways to stand out to clients right now...
                        </Typography>
                        <ArrowIconContainer>
                            <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
                        </ArrowIconContainer>
                        <Typography color={colors.mainGreenColor} fontSize={"12px"} fontWeight={"450"} mt={"5px"} children={"Add Work"} />
                    </Box>
                </Box>
            </ProfileViewBox>
        )
    }
}
