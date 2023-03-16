import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { FooterBox } from '../FooterLogin/style'
import { FooterBoxLink, SocialLink } from './style'
import facebookIcon from '../../assets/icons/facebook-f-60.png'
import instagramIcon from '../../assets/icons/instagram-64.png'
import linkedinIcon from '../../assets/icons/linkedin-2-60.png'
import twitterIcon from '../../assets/icons/twitter-60.png'
import youtubeIcon from '../../assets/icons/youtube-60.png'
import androidIcon from '../../assets/icons/android-os-60.png'
import appleIcon from '../../assets/icons/apple-logo-60.png'

function index() {


    const SoicalIcons = [facebookIcon, linkedinIcon, twitterIcon, youtubeIcon, instagramIcon]

    const Links = [
        [
            { label: "About Us", link: "" },
            { label: "Feedback", link: "" },
            { label: "Community", link: "" },
        ],
        [
            { label: "Trust, Safety & Security", link: "" },
            { label: "Help & Support", link: "" },
            { label: "Upwork Foundation", link: "" },
        ], [
            { label: "Terms of Service", link: "" },
            { label: "Privacy Policy", link: "" },
            { label: "CA Notice at Collection", link: "" },
            { label: "Cookie Settings", link: "" },
        ], [
            { label: "Accessibility", link: "" },
            { label: "About Us", link: "" },
            { label: "Cookie Policy", link: "" },
            { label: "Enterprise Solutions", link: "" },
        ]
    ]
    return (
        <FooterBox sx={{ height: "fit-content", gap: 2 }} flexDirection={"column"} paddingY={8} paddingX={"8%"}>
            <Grid container spacing={5} >
                {Links.map((items, index) =>
                    <Grid key={index} container justifyContent="space-evenly" item md={6} xl={3} gap={"10px"} flexDirection={"column"} >
                        {items.map((link, index) =>
                            <FooterBoxLink
                                component="button"
                                key={index}
                                href={link.link}>
                                {link.label}
                            </FooterBoxLink>)}
                    </Grid>)}
            </Grid>
            <Box gap={4} display={"flex"} flexWrap={"wrap"} mt={3} width="100%" justifyContent={"space-between"} alignItems={"center"}>
                <Box flexWrap={"wrap"} display={"flex"} gap={1} alignItems={"center"}>
                    <Typography color={"#fff"} variant='body1' children={"Follow us"} mr={"10px"} />
                    <Box gap={1} display={"flex"}>
                        {SoicalIcons.map((icon, index) => <SocialLink key={index} src={icon} />)}
                    </Box>
                </Box>
                <Box flexWrap={"wrap"} display={"flex"} gap={1} alignItems={"center"}>
                    <Typography color={"#fff"} variant='body1' children={"Mobile app"} mr={"10px"} />
                    <Box gap={1} display={"flex"}>
                        <SocialLink src={appleIcon} />
                        <SocialLink src={androidIcon} />
                    </Box>
                </Box>
            </Box>
            <Divider sx={{ width: "100%", borderColor: "#fff" }} />
            <Typography variant='body2' children={"© 2015 - 2023 Upwork® Global Inc."} />
        </FooterBox >
    )
}

export default index