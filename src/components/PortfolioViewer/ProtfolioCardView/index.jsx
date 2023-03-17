import { Grid, Link, } from '@mui/material'
import React from 'react'
import { ProtofiloImg, ProtofiloTitle } from './style'

export default function Index({ img, title, link }) {

    return (
        <Grid item xs={4} >
            <Link href={link} target={"_blank"}>
                <ProtofiloImg src={img} />
                <ProtofiloTitle children={title} />
            </Link>
        </Grid>
    )
}
