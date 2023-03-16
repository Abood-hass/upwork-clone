import { Grid } from '@mui/material'
import React, { Component } from 'react'
import { borderStyle, MainJobsGrid, MobileJobsGrid, ProfileGrid } from './style'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <MobileJobsGrid item>
                    {this.props.mainView}
                </MobileJobsGrid>

                <MainJobsGrid container>
                    <Grid sx={borderStyle} item>
                        {this.props.welcomeMessage}
                    </Grid>

                    <Grid width={"100%"} item>
                        {this.props.searchBar}
                    </Grid>

                    <Grid sx={borderStyle} item>
                        {this.props.mainView}
                    </Grid>
                </MainJobsGrid>

                <ProfileGrid container>
                    {this.props?.profile?.map((item, index) =>
                        <Grid key={index} sx={borderStyle} item>
                            {item}
                        </Grid>)}
                </ProfileGrid>
            </>
        )
    }
}
