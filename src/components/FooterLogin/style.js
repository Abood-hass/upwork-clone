import { Box } from "@mui/material";
import { styled } from "@mui/system";
import colors from '../../style/colors.json'

export const FooterBox = styled(Box)({
    background: colors.footerBGDarkGreen,
    display: "flex",
    gap: 5,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: "10px",
    height: "150px",
    "&>p ,a": {
        color: "#fff",
        height: "fit-content",
        fontSize: "13px",
        fontWeight: 500
    }
})