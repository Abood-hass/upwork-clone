import { Avatar, Grid, Typography, Box, Stack } from '@mui/material'
import React, { memo } from 'react'
import Button from '../../components/Button'
import EditableLine from '../../components/EditableLine'
import Tab from '../../components/Tab'
import PortfolioViewer from '../../components/PortfolioViewer'
import SkillTag from '../../components/SkillTag'
import { borderStyle } from '../MainLayoutPage/style'
import colors from '../../style/colors.json'
import { prevJobsData } from './data'
import img from '../../assets/images/upwork-logo.png'

function index(props) {

    // title = { "Job"} img = { img } link = { "https://www.google.com/"}
    const prot = [
        { title: "Job1", img: img, link: "https://www.google.com/" },
        { title: "Job1", img: img, link: "https://www.google.com/" },
        { title: "Job1", img: img, link: "https://www.google.com/" },
        { title: "Job2", img: img, link: "https://www.google.com/" },
        { title: "Job2", img: img, link: "https://www.google.com/" },
        { title: "Job2", img: img, link: "https://www.google.com/" },
        { title: "Job3", img: img, link: "https://www.google.com/" },
    ]

    const paddingStyle = { paddingX: 3, paddingY: 2 }

    const Text = `my name abdullah metqal hassouna
                        my DOB 2000/11/9
                        my skills :
                        1- java script
                        2- node.js
                        3- React.js
                        4- HTML
                        5- CSS
                        6- java
                        7- mySQl
                        8- MongoDB

                        I am ready to work but not full time before the 2022 because I still study in IUG in meddle east.
                        `

    return (
        <Grid {...borderStyle} direction={"column"}>
            <Grid item justifyContent={"space-between"} md={12}>
                {/* //////////////////////////////////// */}
                <Box {...paddingStyle} width={"100%"} display={"flex"} justifyContent={"space-between"} >
                    <Box display={"flex"} gap={3}>
                        <Box display={"flex"} >
                            <Avatar sx={{ width: "85px", height: "85px" }} />
                        </Box>
                        <Box display={"flex"} alignContent={"flex-start"} gap={1} flexDirection={"column"}>
                            <Typography variant='h4' children={"Abdullah H."} />
                            <Typography variant='body2' children={" Gaza, Palestinian Territories – 9:52 pm local time"} />
                            <EditableLine padding title={"Boost"} />
                        </Box>
                    </Box>
                    <Box {...paddingStyle} display={"flex"} gap={3}>
                        <Button text={"Profile Setting"} sx={{ background: "#fff", color: colors.mainGreenColor, width: "180px", border: "1px solid " + colors.mainGreenColor }} />
                        <Button text={"See Public View"} sx={{ width: "180px" }} />
                    </Box>
                </Box>

            </Grid>
            <Grid container direction={"row"}>
                <Grid item md={4}>

                    <Box {...paddingStyle}>
                        <EditableLine padding sx={{ fontSize: "20px" }} title={"View profile"} />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={4} {...paddingStyle} borderTop={"1px solid #e4ebe5"}>
                        <EditableLine padding title={"Hours per week"} desc={"More than 30 hrs/week"} />
                        <EditableLine padding title={"Languages"} desc={"English: Conversational"} />
                        <EditableLine padding title={"Military Veteran"} desc={"More than 30 hrs/week"} />
                        <EditableLine padding title={"Education"} />
                        <EditableLine padding title={"Islamic University in Gaza"} desc={"Computer science 2018-2022"} />
                    </Box>
                </Grid>
                <Grid borderLeft={"1px solid #e4ebe5"} direction={"column"} width={"100%"} container md={8} gap={2} >
                    <Box {...paddingStyle}  >
                        <Grid justifyContent={"space-between"} container>
                            <EditableLine padding sx={{ fontSize: "30px", fontWeight: "500" }} title={"Computer science"} desc={"Specializes in A/B Testing"} />
                            <EditableLine padding sx={{ fontSize: "30px", fontWeight: "500" }} title={"$15.00/hr"} />

                        </Grid>

                        <Grid container>
                            <EditableLine
                                iconSx={{ alignSelf: "flex-start" }}
                                padding
                                sx={{ fontSize: "15px", whiteSpace: "pre-line" }}
                                title={Text} />
                        </Grid>
                    </Box>
                    <Box {...paddingStyle} borderTop={"1px solid #e4ebe5"}>
                        <EditableLine padding sx={{ fontSize: "20px", }} title={"Work History"} />
                        <Tab tabsGroup={prevJobsData} />
                    </Box>
                    <Box {...paddingStyle} borderTop={"1px solid #e4ebe5"}>
                        <EditableLine padding sx={{ fontSize: "20px", }} title={"Portfolio"} />
                        <PortfolioViewer data={prot} />
                    </Box>
                    <Box {...paddingStyle} borderTop={"1px solid #e4ebe5"}>
                        <EditableLine padding sx={{ fontSize: "20px", }} title={"Skills & expertise"} />
                        <Stack paddingY={1} direction="row" rowGap={1} spacing={1} flexWrap={"wrap"}>
                            <SkillTag label="JS" />
                            <SkillTag label="java" />
                            <SkillTag label="code" />
                            <SkillTag label="code again" />
                            <SkillTag label="landing page" />
                        </Stack>
                    </Box>
                    <Box {...paddingStyle} borderTop={"1px solid #e4ebe5"}>
                        <EditableLine padding sx={{ fontSize: "20px", }} title={"Your Project Catalog"} />
                        <Typography variant='body2' padding={2}>
                            Projects are a new way to earn on Upwork that helps you do more of the work you love to do. Create project offerings that highlight your strengths and attract more clients.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default memo(index)