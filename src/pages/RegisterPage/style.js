import { Alert, Box } from "@mui/material";
import { styled } from "@mui/system";

export const InputContainer = styled(Box)({
    display: 'flex',
    alignItems: "center",
    gap: 20,
    flexDirection: "column",
    width: "100%"
})

export default function InputAlert({ err }) {
    return (<>
        {err && <Alert
            sx={{ width: "90%", border: "none", }}
            variant="outlined"
            severity="error"
            children={err} />}
    </>
    )
}
