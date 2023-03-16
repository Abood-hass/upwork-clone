import React, { Component, memo } from 'react'

//Custom Components
import UpworkLogo from '../../components/UpworkLogo'
import FooterLogin from '../../components/FooterLogin'
import Button from '../../components/Button'
import FormContainer from '../../components/FormContainer'
import DviderText from '../../components/DviderText'
import TextField from '../../components/TextField'
import Typography from '../../components/Typography'
import LoadingScreen from '../../components/LoadingScreen'

//Custom Layout
import LoginLayout from '../../layout/LoginLayoutPage'

// Mock Data and Style
import buttons from '../../style/buttons.json'
import data from '../../mock/data.json'
import colors from '../../style/colors.json'
import pagesRoutes from '../../routes/pagesRoutes.json'
import { Auth_API, LoginRoute } from '../../api/Auth'

//Styled Component
import InputAlert, { InputContainer } from './style'
import { Box, Checkbox, FormControlLabel, Link } from '@mui/material'

// Yup package
import * as yup from 'yup'

// React Route package
import { Navigate } from 'react-router-dom'

// Axios package
import axios from 'axios'

// Utilties
import { getToken, setToken } from '../../utilies/localStorage'

class index extends Component {

    initalState = {
        emailAdded: false,
        loginError: '',
        loading: false,
        email: { value: "", err: "" },
        password: { value: "", err: "" }
    }

    constructor(props) {
        super(props);
        this.state = this.initalState

        this.removeEmail = this.removeEmail.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
        this.submitUserInfo = this.submitUserInfo.bind(this);
        this.onChange = this.onChange.bind(this);
    }



    componentDidMount() {
        this.setState(prev => ({
            ...prev,
            email: { err: "", value: this.props?.state?.email || "" },
            password: { err: "", value: this.props?.state?.password || "" },
        }))
    }

    nav = this.props.nav

    emailSchema = yup.object({
        email: yup.string().email(data.correctEmail).required(data.requiedEmail),
    })

    passwordSchema = yup.object({
        password: yup.string()
            .required(data.requiedPassword)
            .matches(data.passwordRegex, data.correctPassword)
            .min(6, data.minLengthPassword)
            .max(10, data.maxLengthPassword),
    })

    removeEmail() {
        this.setState(this.initalState)
    }

    onChange({ target: { name, value } }) {
        this.setState(prev => ({ ...prev, [name]: { err: "", value } }))
    }

    async submitEmail() {
        await this.emailSchema.validate({
            email: this.state.email.value,
        }, { abortEarly: false }
        ).then(() =>
            this.setState(prev => ({ ...prev, emailAdded: true }))
        ).catch((err) =>
            this.setState(prev => ({ ...prev, email: { ...prev.email, err: err.errors[0].err } }))
        )
    }


    async submitUserInfo() {
        await this.passwordSchema.validate({
            password: this.state.password.value,
        }, { abortEarly: false }
        ).then(() => {

            this.setState(prev => ({ ...prev, loading: true }))

            axios.post(Auth_API + LoginRoute, {
                email: this.state.email.value,
                password: this.state.password.value,
            })
                .then(({ data }) => {
                    setToken(data.token)
                })
                .catch(({ response: { data: { message } } }) => {
                    this.setState(prev => ({ ...prev, loginError: message }))
                })
                .finally(_ => {
                    this.setState(prev => ({ ...prev, loading: false }))
                })
        }
        )
            .catch((err) =>
                this.setState(prev => ({ ...prev, password: { ...prev.password, err: err.errors[0].err } }))
            )
    }




    render() {
        return (
            getToken() ?
                <Navigate to={pagesRoutes.mainPage + "/" + pagesRoutes.homePage} />
                : <LoginLayout
                    header={<UpworkLogo />}
                    form={
                        <FormContainer>
                            {this.state.emailAdded ?
                                <>
                                    <LoadingScreen open={this.state.loading} />
                                    <InputContainer>
                                        <Typography variant='h5' text={"Welcome"} />
                                        <Typography variant='body2' text={this.state.email.value} />
                                        <TextField err={this.state.password.err} name="password" value={this.state.password.value} onChange={this.onChange} placeholder={"Password"} icon={"password"} type={"password"} />
                                        <InputAlert err={this.state.password.err || this.state.loginError} />
                                        <Box display={"flex"} alignItems={"center"} width="100%" justifyContent={"space-between"}>
                                            <FormControlLabel control={<Checkbox variant="body2" color='success' defaultChecked />} label={data.remmberMe} />
                                            <Link variant="body2" href="#" color={colors.mainGreenColor} underline="hover" >Foreget password</Link>
                                        </Box>
                                        <Button text={"Log in"} sx={{ width: "200px" }} onClick={this.submitUserInfo} />
                                        <Link variant="body2" sx={{ marginBottom: "30px" }} onClick={this.removeEmail} href="" color={colors.mainGreenColor} underline="hover" >Not you?</Link>
                                    </InputContainer>

                                </>
                                :
                                <>
                                    <InputContainer>
                                        <Typography variant='h5' text={data.loginPage} />
                                        <TextField err={this.state.email.err} type="email" name="email" value={this.state.email.value} onChange={this.onChange} placeholder={"Username or Email"} icon={"email"} />
                                        <InputAlert err={this.state.email.err} />
                                        <Button text={data.normalLogin} onClick={this.submitEmail} />
                                        <DviderText text={"or"} />
                                        <Button loginType={buttons.google} />
                                        <Button loginType={buttons.apple} />
                                    </InputContainer>

                                    <InputContainer>
                                        <DviderText text={data.dontHaveAccount} />
                                        <Button onClick={_ => this.nav(pagesRoutes.registerPage)} sx={{ width: "200px", marginBottom: "15px" }} loginType={buttons.register} />
                                    </InputContainer>
                                </>}
                        </FormContainer>
                    }
                    footer={<FooterLogin />}
                />
        )
    }
}


export default memo(index)