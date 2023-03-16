import { Box, Grid, Pagination, Stack } from '@mui/material'
import ProtfolioCard from './ProtfolioCardView'
import React, { useState } from 'react'

export default function Index({ data }) {
    const [page, setPage] = useState(0)

    const itemsCount = 3

    const handleChange = (_, value) => {
        setPage(value - 1);
    };

    return (
        <Box>
            <Grid mb={2} container direction={"row"} flexWrap={"nowrap"}   >
                {data
                    ?.slice((0 + (itemsCount * page)), 3 + (itemsCount * page))
                    ?.map((prtofilo, index) => <ProtfolioCard {...prtofilo} key={index} />)}
            </Grid>
            <Stack alignItems={"flex-end"} spacing={2}>
                <Pagination page={data.lenght} count={parseInt(Math.ceil(data.length / itemsCount))} onChange={handleChange} />
            </Stack>
        </Box >
    )
}
