import { Chip } from "@mui/material";
import styled from "styled-components";
import colors from '../../style/colors.json'


export const Tag = styled(Chip)({
    fontSize: "12px",
    height: "30px",
    fontWeight: 450,
    color: "#828688",
    background: colors.tagColor
})