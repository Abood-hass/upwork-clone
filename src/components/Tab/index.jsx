import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

function TabPanel({ content, value, Component, index, ...other }) {



    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                (Component && content.length) ? <Box>
                    {content?.map((row, index) => <>
                        <Component {...row} key={index} />
                        {((index + 1) !== content.length) && <Divider variant='fullWidth' />}
                    </> || <></>)}
                </Box>
                    :
                    <h2>No Data ?</h2>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ tabsGroup }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {tabsGroup.map(({ label, content }, index) =>
                        <Tab key={index} label={label + ` (${content.length})`}{...a11yProps(0)} />)}
                </Tabs>
            </Box>
            {tabsGroup.map(({ content, component }, index) => <TabPanel content={content} Component={component} index={index} value={value} key={index} />)}
        </Box>
    );
}