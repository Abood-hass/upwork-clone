import styled from "styled-components";
import { Button } from "@mui/material";
import { styled as styledOverride } from "@mui/system";
import style from '../../style/colors.json'

export const CustomButton = styledOverride(Button)`
  background:${style.mainGreenColor};
  width:100%;
  border-radius:20px;
  :hover{
  background:${style.mainGreenColor}50;
  }
  postion:relative;
`

export const GoogleLogin = {
  background: style.loginGoogleColor,
  "&:hover": {
    background: style.loginGoogleColor + 50
  }
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


