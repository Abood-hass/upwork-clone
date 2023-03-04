import React from 'react'
import { AppleLogin, CustomButton, GoogleLogin, LoginIcon } from './style.js'
import googleIcon from '../../assets/images/login-google-icon.png'
import appleIcon from '../../assets/images/login-apple-icon.png'
import buttons from '../../style/buttons.json'



export default function Index({ onClick, disabled, sx, text, loginType }) {



    const styleType = {
        [buttons.google]: { style: GoogleLogin, image: googleIcon, text: "Connect with Google" },
        [buttons.apple]: {
            style: AppleLogin, image: appleIcon,
            imageStyle: { position: "relative", height: "27px" }, text: "Connect with Apple"
        }
    }

    return (
        <>
            <CustomButton
                disabled={disabled}
                onClick={onClick}
                sx={{ ...styleType[loginType]?.style, ...sx }}
                variant={"contained"}>
                <LoginIcon src={styleType[loginType]?.image} style={styleType[loginType]?.imageStyle} />
                {text || styleType[loginType]?.text || "Login"}</CustomButton>
        </>
    )
}
