import { Grid } from '@mui/material'
import React from 'react'
import { GridItem } from './style'

export default function index({ header, form, footer }) {
    return (
        <Grid
            container
            height="100vh"
            alignItems="center"
            rowSpacing={12}
            justifyContent="space-between"
        >
            <GridItem item   >
                {header}
            </GridItem>
            <GridItem item  >
                {form}
            </GridItem>
            <Grid item width={"100%"} >
                {footer}
            </Grid>
        </Grid >
    )
}
