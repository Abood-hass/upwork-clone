import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/system";

export const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} placement="top-start" classes={{ popper: className }} />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#fff",
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: "2px 2px 5px gray",
    },
}));