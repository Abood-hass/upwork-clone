import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, AccordionSummary, Typography, } from '@mui/material';
import { FilterContainer, OptionContainer } from './style';
import CustomCheckbox from './Checkbox';

export default function Index(props) {


    return (
        <Box>
            <FilterContainer expanded elevation={0}>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='body1'>{props?.title}</Typography>
                </AccordionSummary>

                <OptionContainer>
                    {props?.options?.map((option, index) =>
                        <CustomCheckbox onChange={props.onChange} {...option} key={index} />
                    )}
                </OptionContainer>
            </FilterContainer>
        </Box>
    );
}