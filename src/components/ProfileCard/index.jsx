import { Box, Typography } from '@mui/material'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '../Avatar'
import route from '../../routes/pagesRoutes.json'

export default class index extends Component {
    render() {
        return (
            <Box padding={3} display={"flex"} alignItems="center" flexDirection={"column"}>
                <Avatar imgSize={"65px"} />
                <Typography variant='h6' mt={"20px"} children={
                    <NavLink
                        to={route.mainPage + "/" + route.profilePage}
                        style={({ isActive }) => ({ color: isActive ? "#000" : "" })}
                        children={"Abdullah .H"} />
                } />
                <Typography variant='body1' children={"Computer science"} />
            </Box>
        )
    }
}
