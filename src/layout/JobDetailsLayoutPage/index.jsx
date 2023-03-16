import { Box, Grid } from '@mui/material'
import React, { Component } from 'react'

export default class index extends Component {

    borderStyle = {
        overflow: "hidden",
        border: "1px solid #e4ebe5",
        borderRadius: "10px",
        width: "100%",
    }



    render() {
        return (
            <Box display={"flex"} flexDirection={"column"} gap={4}>
                <Box sx={this.borderStyle}>
                    <Grid container spacing={0} >

                        {/* Grid of Job Details */}
                        <Grid container item md={8} >
                            {this.props.JobDetails}
                        </Grid>

                        {/* Grid of Client Details */}
                        <Grid width={"100%"} flexDirection={"column"} container item md={4}  >
                            {this.props.ClientDetails}
                        </Grid>

                    </Grid>
                </Box >

                {/* Grid of Similar Jobs Rows */}
                <Box sx={this.borderStyle} >
                    {this.props.SimilarJobs}
                </Box >
            </Box>
        )
    }
}
