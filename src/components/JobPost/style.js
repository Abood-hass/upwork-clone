import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import colors from '../../style/colors.json'

export const JobPostContainer = styled(Box)({
    cursor: "default",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 15,
    border: "1px solid lightgray",
    borderWidth: "0px 0px 1px 0px",
    "&:hover": {
        background: "#f2f7f1"
    },

})

export const JobTitleContainer = styled(Box)({
    paddingY: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

})

export const JobTitle = styled(Typography)({
    fontSize: "20px",
    fontWeight: "500",
    cursor: "pointer",
    ":hover": {
        textDecoration: "underline",
        color: colors.mainGreenColor
    }
})

export const IconContainer = styled(Box)({
    display: "flex",
    gap: 10
})


export const JobPayingInfo = styled(Typography)({
    fontSize: "12px",
    fontWeight: "300"
})

export const JobDesc = styled(Typography)({
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontSize: "14px",
})

export const iconStyle = {
    sx: {
        "&:hover":
            { background: colors.mainGreenColor + "30" },
        border: `1px solid ${colors.mainGreenColor}70`,
        padding: "6px",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
    },
    color: "success"
}

export const JobProposalsInfo = styled(Typography)({
    fontSize: "12px",
    fontWeight: "300"
})
