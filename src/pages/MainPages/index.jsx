import { Grid } from '@mui/material'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ContantGrid } from './style'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getToken } from '../../utilies/localStorage'
import routes from '../../routes/pagesRoutes.json'

export default function index() {
    return (
        <>
            {
                getToken() ?
                    <Grid justifyContent={"center"} container gap={5} >
                        <Grid Grid container >
                            <Header />
                        </Grid >
                        <ContantGrid justifyContent={"center"} gap={2} container>
                            <Outlet />
                        </ContantGrid>
                        <Grid item width={"100%"} >
                            <Footer />
                        </Grid>
                    </Grid >
                    :
                    <Navigate to={routes.loginPage} />}
        </>
    )
}
