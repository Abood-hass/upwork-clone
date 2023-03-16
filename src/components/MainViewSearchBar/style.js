import { Box, } from "@mui/material";
import styled from "styled-components";


export const SearchFiledContainer = styled(Box)({
    border: "1px solid #e4ebe5",
    width: "100%",
    display: "flex",
    borderRadius: "10px",
    height: "32px",
    overflow: "hidden",
})

export const SearchFiled = styled.input({
    border: 0,
    width: "100%",
    paddingLeft: 15,
})
