import { Box, Button, Typography } from '@mui/material'
import React, { memo } from 'react'
import { SearchFiled, SearchFiledContainer } from './style'
import colors from '../../style/colors.json'
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';


function index({ value, onChange, onClick, hideKeyWords }) {

    const resentSearch = ["Node.js", "React.js", "Node.js", "React.js", "Node.js", "React.js"].slice(0, 5)

    return (
        <Box display={"flex"} flexDirection={"column"} gap={1} >
            <SearchFiledContainer>
                <SearchFiled placeholder='Search for job' value={value} onChange={onChange} />
                <Button
                    onClick={onClick}
                    sx={{
                        background: colors.mainGreenColor,
                        borderRadius: 0,
                        minWidth: "40px",
                        padding: 0,
                        ":hover": {
                            background: colors.mainGreenColor + 80,
                        }
                    }}
                    children={<SearchIcon sx={{ color: "#fff" }} />} />
            </SearchFiledContainer>
            {!hideKeyWords && <Typography sx={{ fontSize: "12px" }}>
                {"Resent Search: "}
                {resentSearch.map((item, index) => <>
                    <NavLink
                        key={index}
                        children={item}
                        style={{ fontWeight: 500, textDecoration: 0, color: colors.mainGreenColor }} />
                    {((index + 1) !== resentSearch.length) ? <span>, </span> : <></>}
                </>)}
            </Typography>}
        </Box>
    )
}

export default memo(index)