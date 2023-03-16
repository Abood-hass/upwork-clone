import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import colors from '../../style/colors.json'
import JobPropTag from '../../components/JobProps'
import SkillTag from '../../components/SkillTag'
import HelpMark from '../../components/HelpMark'
import CustomBtn from '../../components/Button'
import RateLine from '../../components/RateLine'
import VerifyInfo from '../../components/VerifyInfo'
import JobLinkBtn from '../../components/JobLinkBtn'
import SimilarJobRow from '../../components/SimilarJob'
import Layout from '../../layout/JobDetailsLayoutPage'
import { useDispatch, useSelector } from "react-redux";
import { getJobAPI } from "../../redux/slice";

export default function Index({ jobId }) {

    const dispatch = useDispatch()
    let { id } = useParams();

    const { job, isLoading } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(getJobAPI(jobId || id))
    }, [])


    const paddingStyle = {
        paddingY: "20px",
        paddingX: "25px",
    }


    const saveButton = {
        background: "#fff",
        color: colors.mainGreenColor,
        border: "1px solid " + colors.mainGreenColor,
        width: "220px",
        ":hover": {
            background: colors.mainGreenColor + "25",
        }
    }

    const clientBusinessInfo = [
        { info: "United States", details: "Saint Petersburg 12:33 am" },
        { info: "61 jobs posted", details: "58% hire rate, 3 open jobs" },
        { info: "$18K total spent", details: "41 hires, 6 active" },
        { info: "$23.51 /hr avg hourly rate paid", details: "667 hours" },
        { info: "Tech & IT", details: "Mid-sized company (10-99 people)" },
    ]
    return (
        isLoading ? <>Loading</> :
            <div>
                <Typography pl={2} fontSize={25} fontWeight={500} mb={5} >
                    {"Job Details"}
                </Typography>

                <Layout
                    JobDetails={
                        <Box width={"100%"} borderRight={"1px solid #e4ebe5"} >
                            <Box {...paddingStyle} >
                                <Typography children={job?.task?.title} variant="h6" mb={"25px"} />
                                <Box width={"fit-content"}>
                                    <Link style={{ textDecoration: 0, display: "inline" }}>
                                        <Typography color={colors.mainGreenColor} sx={{ width: "fit-content", ":hover": { textDecorationColor: colors.mainGreenColor }, }}
                                            children={"Full Stack Development"} variant="body1" />
                                    </Link>
                                    <Typography color={"gray"} children={job?.createdAt} variant="body2" mb={"15px"} />
                                    <Typography color={"black"} children={"Worldwide"} variant="body2" />
                                </Box>
                            </Box>
                            <Box {...paddingStyle} borderTop={"1px solid #e4ebe5"}  >
                                <Typography variant='body2' whiteSpace={"pre-line"}>
                                    {job?.task?.desc}
                                </Typography>
                            </Box>
                            <Box {...paddingStyle} borderTop={"1px solid #e4ebe5"}  >
                                <Grid container display={"flex"} rowGap={2}  >
                                    <JobPropTag text={"$25"} subText={'Fixed Price'} icon={"FixedPrice"} alt={"Fixed Price"} />
                                    <JobPropTag text={"$25"} subText={'Fixed Price'} icon={"FixedPrice"} alt={"Fixed Price"} />
                                    <JobPropTag text={"$25"} subText={'Fixed Price'} icon={"Time"} alt={"Fixed Price"} />
                                    <JobPropTag text={"$25"} subText={'Fixed Price'} icon={"FixedPrice"} alt={"Fixed Price"} />
                                    <JobPropTag text={"$25"} subText={'Fixed Price'} icon={"FixedPrice"} alt={"Fixed Price"} />
                                    <JobPropTag text={"$25"} subText={'Fixed Price'} icon={"FixedPrice"} alt={"Fixed Price"} />
                                </Grid>
                            </Box>
                            <Box {...paddingStyle} borderTop={"1px solid #e4ebe5"}  >
                                <Typography fontSize={"18px"} mb={2} >
                                    Skills and Expertise
                                </Typography>
                                <Stack paddingY={1} direction="row" rowGap={1} spacing={1} flexWrap={"wrap"} >
                                    {job?.freelancerReq?.wantedSkills?.map((skill, index) => <SkillTag key={index} label={skill} />)}
                                </Stack>
                            </Box>
                            <Box {...paddingStyle} borderTop={"1px solid #e4ebe5"}  >
                                <Typography fontSize={"18px"} mb={2} >
                                    Activity on this job
                                </Typography>
                                <Box display={"flex"} flexDirection={"column"} gap={1}>
                                    <Typography fontSize={"14px"} color={"GrayText"}>
                                        Proposals: <HelpMark /> <span style={{ color: "#001e00" }} >{job?.applicants?.Proposals}</span>
                                    </Typography>
                                    <Typography fontSize={"14px"} color={"GrayText"}>
                                        Last viewed by client: <HelpMark /> <span style={{ color: "#001e00" }} >4 hours ago</span>
                                    </Typography>
                                    <Typography fontSize={"14px"} color={"GrayText"}>
                                        Interviewing:   <span style={{ color: "#001e00" }} >{job?.applicants?.Interviewing}</span>
                                    </Typography>
                                    <Typography fontSize={"14px"} color={"GrayText"}>
                                        Invites sent:   <span style={{ color: "#001e00" }} >{job?.applicants?.Proposals}</span>
                                    </Typography>
                                    <Typography fontSize={"14px"} color={"GrayText"}>
                                        Unanswered invites:  <span style={{ color: "#001e00" }} >{job?.applicants?.Unanswered}</span>
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                    }

                    ClientDetails={
                        <>
                            <Box {...paddingStyle} borderBottom={"1px solid #e4ebe5"}  >
                                <Box mb={4} gap={2} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                    <CustomBtn sx={{ width: "220px" }} text={"Apply Now"} />
                                    <CustomBtn sx={saveButton} text={"Save Job"} />
                                </Box>

                                <Box gap={1} display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
                                    <Typography fontSize={""} fontWeight={500} color={colors.mainGreenColor} children={"Flag as inappropriate"} />
                                    <Typography fontSize={""} color={"GrayText"} children={"Send a proposal for: 6 Connects"} />
                                    <Typography fontSize={""} color={"GrayText"} children={"Available Connects: 137"} />
                                </Box>
                            </Box>
                            <Box display={"flex"} flexDirection={"column"} gap={"4px"} {...paddingStyle} borderBottom={"1px solid #e4ebe5"}  >
                                <Typography variant='h6' fontSize={"16px"} mb={2} >
                                    About the client
                                </Typography>
                                <VerifyInfo />
                                <RateLine starSize={"20px"} rate={4} />
                                <Box mt={2} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} gap={2}>
                                    {clientBusinessInfo.map(({ info, details }, index) =>
                                        <Box key={index}>
                                            <Typography fontSize={"15px"} children={info} />
                                            <Typography color={"GrayText"} children={details} fontSize={"12px"} />
                                        </Box>)
                                    }
                                    <Typography color={"GrayText"} children={"Member since Dec 29, 2019"} fontSize={"11px"} />
                                </Box>
                            </Box>
                            <Box {...paddingStyle}>
                                <Typography variant='h6' fontSize={"16px"} mb={2} >
                                    Job link
                                </Typography>
                                <JobLinkBtn Link={"https://www.upwork.com/jobs/~01ba19a4d2a515a352"} />
                            </Box>
                        </>}

                    SimilarJobs={
                        <Box {...paddingStyle} >
                            <Typography fontSize={"18px"} mb={3} >
                                Similar Jobs on Upwork
                            </Typography>
                            <Box display={"flex"} flexDirection={"column"} gap={1}>
                                {[...new Array(4)].map((_, index) => <SimilarJobRow key={index} />)}
                            </Box>
                        </Box>
                    }
                />
            </div>
    )
}
