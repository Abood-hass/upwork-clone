import styled from "@emotion/styled";
import { Link, } from "@mui/material";
import styledComp from "styled-components";

export const FooterBoxLink = styled(Link)({
    display: "block",
    color: "#fff",
    fontSize: "14px",
    fontFamily: "sans-serif",
    textDecoration: "none",
    width: "fit-content",
    ":hover": {
        textDecoration: "underline",
    }
})


export const SocialLink = styledComp.img({
    border: "1px solid #fff",
    borderRadius: "50%",
    padding: 8,
    width: "35px",
    height: "35px",
    margin: "auto",
    ":hover": {
        background: "#fff4"
    }
})