import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import colors from '../../style/colors.json'

export const ProfileViewBox = styled(Box)({
    background: colors.mainGreenColor + "30",
})


export const ProfileViewTitle = styled(Typography)({
    color: "#000"
})

export const ArrowIconContainer = styled(Box)({
    position: "absolute",
    right: "-12px",
    top: "50%",
    display: 'grid',
    padding: "5px",
    justifyContent: 'center',
    background: colors.mainGreenColor,
    borderRadius: "50%",
    transform: "translate(0, -50%)"
})