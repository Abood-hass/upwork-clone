import { Typography } from "@mui/material";
import styled from "styled-components";
import colors from '../../../style/colors.json'

export const ProtofiloImg = styled.img({
    width: "100%",
    height: "80px",
    objectFit: "contain"
})


export const ProtofiloTitle = styled(Typography)({
    fontSize: "13px",
    color: colors.mainGreenColor,
    textAlign: "right",
    paddingRight: "5px"
})