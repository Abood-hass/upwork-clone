import styled from "styled-components";
import { Button } from "@mui/material";
import { styled as styledOverride } from "@mui/system";
import style from '../../style/colors.json'

export const CustomButton = styledOverride(Button)`
  background:${style.mainGreenColor};
  width:100%;
  border-radius:20px;
  font-weight:600;
  postion:relative;
  height:35px;
  font-size:14px;
  :disabled{
    cursor:not-allowed;
    border-color: gray;
  }
  :hover{
    background:${style.mainGreenColor}d5;
  }
`

export const GoogleLogin = {
  background: style.loginGoogleColor,
  "&:hover": {
    background: style.loginGoogleColor + "d5"
  },
}

export const AppleLogin = {
  background: "#fff",
  border: "1px solid #000",
  color: "#000",
  "&:hover": {
    background: "#fff",
  }
}


export const LoginIcon = styled.img({
  position: "absolute",
  height: "100%",
  left: 0,
  marginRight: "10px"
});


export const RegisterOutline = {
  background: "#fff",
  color: style.mainGreenColor,
  border: `1px solid ${style.mainGreenColor}`,
  "&:hover": {
    background: style.mainGreenColor + 50,
    borderColor: style.mainGreenColor + 30,
  }
}

