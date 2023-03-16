import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import colors from '../../style/colors.json'

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress sx={{ borderRadius: "15px" }} variant="determinate" color='success' {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color={colors.mainGreenColor} >{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
    const [progress] = React.useState(90);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}