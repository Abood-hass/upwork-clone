import { Link, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { FooterBox } from './style'
import data from '../../mock/data.json'
import ExRoutes from '../../routes/externalLinks.json'
import brackPoint from '../../style/breackPoint.json'

export default function Index({ tags }) {


    const match = useMediaQuery(brackPoint.mx)

    const linkProps = {
        underline: "hover",
        target: "_blank",
        href: ExRoutes.privacyPolicy,
        variant: "body2",
        children: data.footerData[1]
    }

    return (
        <FooterBox sx={{ display: match && "none" }}>
            <Typography variant="body2" children={data.footerData[0]} />
            <Typography variant="body2" children={"•"} />
            <Link {...linkProps} />
        </FooterBox>
    )
}
