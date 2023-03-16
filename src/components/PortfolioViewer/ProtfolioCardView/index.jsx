import { Grid, Link, } from '@mui/material'
import React, { useRef } from 'react'
import { ProtofiloImg, ProtofiloTitle } from './style'

export default function Index({ img, title, link }) {
    const ref = useRef(null)

    const onButtonClick = () => {
        ref.current.click()
    };

    return (
        <Grid item xs={4} >
            <Link href={link} target={"_blank"}>
                <ProtofiloImg src={img} />
                <ProtofiloTitle children={title} />
            </Link>
        </Grid>
    )
}
