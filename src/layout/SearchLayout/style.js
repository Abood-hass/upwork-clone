import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { borderStyle } from "../MainLayoutPage/style";

export const FilterGrid = styled(Grid)({
    padding: "5px 6px",
    width: "25%",
})


export const ResultSearchGrid = styled(Grid)({
    ...borderStyle,
    padding: 10,
    width: "70%",
})