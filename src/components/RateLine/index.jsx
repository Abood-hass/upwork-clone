import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import { Box, Typography } from '@mui/material';

export default function Index({ rate, starSize }) {

    const ShowStars = (count, color) => {
        return [...new Array(count)].map((_, index) =>
            <StarRateIcon key={index} sx={{ width: starSize || "15px", height: starSize || "15px" }} color={color} />)
    }
    return (
        <Box display={"flex"} flexDirection={"column"} gap={"2px"}>
            {
                rate &&
                <Box display={"flex"} gap={"2px"}>
                    {ShowStars(rate % 6, 'success')}
                    {ShowStars(5 - rate % 6, 'action')}
                </Box>
            }
            <Typography fontSize={"12px"} fontWeight={"350"} children={"5.00 of 12 reviews"} />
        </Box>
    )
}
