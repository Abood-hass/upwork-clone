import React, { Component, memo } from 'react'

//Custom Components
import UpworkLogo from '../../components/UpworkLogo'
import FooterLogin from '../../components/FooterLogin'
import Button from '../../components/Button'
import FormContainer from '../../components/FormContainer'
import DviderText from '../../components/DviderText'
import TextField from '../../components/TextField'
import CustomTypography from '../../components/Typography'
import LoadingScreen from '../../components/LoadingScreen'
import CustomCheckBox from '../../components/CheckBox'

//Custom Layout
import LoginLayout from '../../layout/LoginLayoutPage'

// Mock Data and Style
import buttons from '../../style/buttons.json'
import data from '../../mock/data.json'
import colors from '../../style/colors.json'
import pagesRoutes from '../../routes/pagesRoutes.json'
import externalLinks from '../../routes/externalLinks.json'
import { Auth_API, registerRoute } from '../../api/Auth'

//Styled Component
import InputAlert, { InputContainer } from './style'
import { Box, Link, Typography } from '@mui/material'

// Yup package
import * as yup from 'yup'

// React Route package
import { Navigate } from 'react-router-dom'

// Axios package
import axios from 'axios'

// Utilties
import { getToken } from '../../utilies/localStorage'

class index extends Component {

    initalState = {
        signupError: '',
        loading: false,
        fName: { value: "", err: "" },
        lName: { value: "", err: "" },
        email: { value: "", err: "" },
        password: { value: "", err: "" },
    }

    constructor(props) {
        super(props);
        this.state = this.initalState

        this.removeEmail = this.removeEmail.bind(this);
        this.submitUserInfo = this.submitUserInfo.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    nav = this.props.nav


    Schema = yup.object({
        fName: yup.string()
            .required(data.requiedFirstName)
            .min(6, data.minLengthFirstName)
            .max(10, data.maxLengthFirstName),

        lName: yup.string()
            .required(data.requiedLastName)
            .min(6, data.minLengthLastName)
            .max(10, data.maxLengthLastName),

        email: yup.string()
            .email(data.correctEmail)
            .required(data.requiedEmail),
        password: yup.string()
            .required(data.requiedPassword)
            .matches(data.passwordRegex, data.correctPassword)
            .min(6, data.minLengthPassword)
            .max(10, data.maxLengthPassword),
    })

    removeEmail() {
        this.setState(this.initalState)
    }


    async submitUserInfo() {
        await this.Schema.validate(
            {
                email: this.state.email.value,
                password: this.state.password.value,
                fName: this.state.fName.value,
                lName: this.state.lName.value,
            }, { abortEarly: false, }
        )
            .catch((err) =>
                err.errors.forEach(({ field, err }) => this.onError(field, err))
            )
            .then(() => {
                this.setState(prev => ({ ...prev, loading: true }))

                axios.post(Auth_API + registerRoute, {
                    name: this.state.fName.value + " " + this.state.lName.value,
                    email: this.state.email.value,
                    password: this.state.password.value,
                })
                    .then(_ => {
                        this.nav(pagesRoutes.loginPage, {
                            state:
                                { email: this.state.email.value, password: this.state.password.value }
                        })
                    })
                    .catch(({ response: { data: { message } } }) => {
                        this.setState(prev => ({ ...prev, signupError: message }))
                    })
                    .finally(_ => {
                        this.setState(prev => ({ ...prev, loading: false }))
                    })
            })
            .finally(_ =>
                this.setState(prev => ({ ...prev, loading: true }))
            )
    }

    onChange({ target: { name, value } }) {
        this.setState(prev => ({ ...prev, [name]: { err: "", value } }))
    }

    onError(name, err) {
        this.setState(prev => ({ ...prev, [name]: { ...(prev[name]), err, } }))
    }

    formStyle = {
        width: "550px",
        padding: "20px",
    }

    checkBoxPolicy = <Typography fontSize={"12px"} fontWeight={"300"}>
        Yes, I understand and agree to the
        <Link zIndex={10} href={externalLinks.termsOfService} target={"_blank"} fontWeight={"500"} color={colors.mainGreenColor} underline="hover" > Upwork Terms of Service </Link>
        , including the
        <Link zIndex={10} href={externalLinks.userAgreement} target={"_blank"} fontWeight={"500"} color={colors.mainGreenColor} underline="hover" > User Agreement </Link>
        and
        <Link zIndex={10} href={externalLinks.privacyPolicy} target={"_blank"} fontWeight={"500"} color={colors.mainGreenColor} underline="hover" > Privacy Policy </Link>
        .
    </Typography>

    render() {
        return (
            getToken() ?
                <Navigate to={pagesRoutes.loginPage} />
                : <LoginLayout
                    header={<UpworkLogo />}
                    form={
                        <FormContainer sx={this.formStyle}>
                            <LoadingScreen open={this.state.loading} />
                            <InputContainer>
                                <CustomTypography variant='h4' text={data.registerPage} />
                                <Button loginType={buttons.apple} />
                                <Button loginType={buttons.google} />
                                <DviderText text={"or"} />
                                <InputAlert err={this.state.signupError} />
                                <Box display={"flex"} gap={"2%"} width="100%">
                                    <Box width="100%">
                                        <TextField err={this.state.fName.err} name="fName" value={this.state.fName.value} onChange={this.onChange} placeholder={"First Name"} />
                                        <InputAlert err={this.state.fName.err} />
                                    </Box>
                                    <Box width="100%">
                                        <TextField err={this.state.lName.err} name="lName" value={this.state.lName.value} onChange={this.onChange} placeholder={"Last Name"} />
                                        <InputAlert err={this.state.lName.err} />
                                    </Box>

                                </Box>
                                <TextField err={this.state.email.err} name="email" value={this.state.email.value} onChange={this.onChange} placeholder={"Email"} icon="email" />
                                <InputAlert err={this.state.email.err} />
                                <TextField err={this.state.password.err} name="password" value={this.state.password.value} type={"password"} onChange={this.onChange} icon="password" placeholder={"Password (atleast 6 of letter and numbers)"} />
                                <InputAlert err={this.state.password.err} />
                                <Box display={"flex"} flexDirection={"column"} alignItems={"left"} width="100%" justifyContent={"space-between"}>
                                    <CustomCheckBox label={<Typography fontSize={"12px"} fontWeight={"300"} >{data.sendHelpfullemail}</Typography>} />
                                    <CustomCheckBox label={<Typography fontSize={"12px"} fontWeight={"300"} >{this.checkBoxPolicy}</Typography>} />
                                </Box>
                                <Button text={data.normalRegister} onClick={this.submitUserInfo} />
                                <Typography>Already have an account? <Link variant="body2" onClick={_ => this.nav(pagesRoutes.loginPage)} color={colors.mainGreenColor} underline="hover" >Log In</Link></Typography>
                                <Box></Box>
                            </InputContainer>

                        </FormContainer>
                    }
                    footer={<FooterLogin />}
                />
        )
    }
}

export default memo(index)
