import { Accordion, AccordionDetails, } from "@mui/material";
import styled from "styled-components";

export const FilterContainer = styled(Accordion)({
    borderBottom: "1px solid gray",
    borderRadius: 0
})

export const OptionContainer = styled(AccordionDetails)({
    display: "flex",
    flexDirection: "column",
})