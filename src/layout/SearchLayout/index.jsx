import { Grid } from '@mui/material'
import React, { memo } from 'react'
import { FilterGrid, ResultSearchGrid } from './style'

function index(props) {
    return (
        <Grid container gap={2}>
            <FilterGrid>
                {props.filterSide}
            </FilterGrid>
            <ResultSearchGrid>
                {props.resultSide}
            </ResultSearchGrid>
        </Grid>
    )
}

export default memo(index)