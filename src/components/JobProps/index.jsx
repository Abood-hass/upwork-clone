import { Grid, Typography } from '@mui/material'
import PriceTagIcon from '../../assets/icons/price-tag.png'
import IntelligenceIcon from '../../assets/icons/intelligence.png'
import ContractIcon from '../../assets/icons/contract-24.png'
import CalendarIcon from '../../assets/icons/calendar-30.png'
import FeaturedIcon from '../../assets/icons/featured-30.png'
import TimeIcon from '../../assets/icons/time-30.png'
import TimerIcon from '../../assets/icons/timer.png'
import { LightTooltip } from './style'

export default function Index({ icon, text, subText, alt }) {


    const imgSrc = {
        "FixedPrice": PriceTagIcon,
        "Hourly": IntelligenceIcon,
        "Contract": ContractIcon,
        "Calendar": CalendarIcon,
        "Featured": FeaturedIcon,
        "Time": TimeIcon,
        "Timer": TimerIcon
    }

    return (
        <LightTooltip title={alt} placement="top-start">
            <Grid container item gap={1} sm={4}>
                <Grid width={"fit-content"} container item sm={2}>
                    <img alt='' style={{ width: "20px", height: "fit-content" }} src={imgSrc[icon] || PriceTagIcon} />
                </Grid>
                <Grid container direction={"column"} item sm={5} width={"fit-content"}>
                    <Typography fontSize={"15px"} children={text || "text"} />
                    <Typography fontSize={"12px"} color={"GrayText"} children={subText || "sub text"} />
                </Grid>
            </Grid>
        </LightTooltip>
    )
}
