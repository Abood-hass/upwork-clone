import React from 'react'
import { AppleLogin, CustomButton, GoogleLogin, LoginIcon, RegisterOutline } from './style.js'
import googleIcon from '../../assets/images/login-google-icon.png'
import appleIcon from '../../assets/images/login-apple-icon.png'
import buttons from '../../style/buttons.json'



export default function Index({ onClick, disabled, sx, text, loginType }) {



    const styleType = {
        [buttons.google]: { style: GoogleLogin, image: googleIcon, text: "Connect with Google" },
        [buttons.apple]: {
            style: AppleLogin, image: appleIcon,
            imageStyle: { position: "relative", height: "20px" }, text: "Connect with Apple"
        },
        [buttons.register]: {
            style: RegisterOutline, text: "Sign Up"
        }
    }[loginType]

    return (
        <CustomButton
            disabled={disabled}
            onClick={onClick}
            sx={{ ...styleType?.style, ...sx }}
            variant={"contained"}>
            <LoginIcon src={styleType?.image} style={styleType?.imageStyle} />
            {text || styleType?.text || "Login"}</CustomButton>
    )
}
