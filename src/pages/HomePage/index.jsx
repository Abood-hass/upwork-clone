import React, { Component, Fragment } from 'react'
import MainLayoutPage from '../../layout/MainLayoutPage'
import ProfileCard from '../../components/ProfileCard'
import WelcomeMessage from '../../components/WelcomeMessage'
import SearchBar from '../../components/MainViewSearchBar'
import EditableLine from '../../components/EditableLine'
import ProfileSteps from '../../components/ProfileSteps'
import ProfileSideProposal from '../../components/ProfileSideProposal'
import ProfileSideLink from '../../components/ProfileSideLink'
import colors from '../../style/colors.json'
import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import JobsApiCall from '../../hooks/JobsApiCall'

export default class index extends Component {


    profileLinks = [
        { text: "Upwork Acadamy", link: "" },
        { text: "Directs Connects", link: "" },
        { text: "Get Paid", link: "" },
        { text: "Community & Forums", link: "" },
        { text: "Help Center", link: "" },
    ]

    profileSideContent = [
        <>
            <ProfileCard />
            <ProfileSteps />
            <Box paddingX={5} paddingY={2}>
                <Typography fontSize={"15px"} fontWeight={"400"} color={colors.mainGreenColor} children={"135 Available Connects"} />
            </Box>
            <Divider />
            <EditableLine title={"Availability Badge"} desc={"More than 30 hrs/week"} />
            <EditableLine title={"Availability Badge"} desc={"More than 30 hrs/week"} />
            <EditableLine title={"Availability Badge"} desc={"More than 30 hrs/week"} />
            <EditableLine title={"Availability Badge"} desc={"More than 30 hrs/week"} />
            <Divider />
            <br />
            <EditableLine title={"My Categories "} />
            <br />
        </>,
        <ProfileSideProposal title={"Proposals"} subTitle={"My Proposals"} link={"1 submitted proposal"} />
        ,
        <ProfileSideProposal title={"Project Catalog"} subTitle={"My Project Dashboard"} link={"Create a Catalog project for clients to purchase instantly"} />
        ,
        <>
            {this.profileLinks.map((link, index) => {
                return (
                    <Fragment key={index}>
                        <ProfileSideLink {...link} />
                        {(index + 1 !== this.profileLinks.length) && <Divider />}
                    </Fragment>
                )
            })}
        </>
    ]



    render() {
        return (
            <>
                <MainLayoutPage
                    mainView={<JobsApiCall />}
                    welcomeMessage={<WelcomeMessage />}
                    searchBar={<SearchBar />}
                    profile={this.profileSideContent}
                />
            </>
        )
    }
}
