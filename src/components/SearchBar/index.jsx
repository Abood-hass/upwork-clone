import { FormControl, InputAdornment, MenuItem, Select, TextField, Typography, } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import TaskIcon from '@mui/icons-material/TaskOutlined';
import People from '@mui/icons-material/PeopleOutlineOutlined';
import Card from '@mui/icons-material/CardTravelOutlined';
import React from 'react'
import { Box } from '@mui/system';

export default function index({ hideMenu, sx, value, onChange }) {

    const searchOptions = [
        {
            label: "Jobs", dec: "Apply Job", icon: <TaskIcon />, value: "Jobs"
        },
        {
            label: "Talent", dec: "Apply Talent", icon: <People />, value: "Talent"
        },
        {
            label: "Project", dec: "Apply Project", icon: <Card />, value: "Project"
        },
    ]

    return (
        <TextField
            sx={{ height: "100%", paddingY: 0, width: hideMenu && "90%", ...sx }}
            InputProps={{
                placeholder: "Search",
                sx: { height: "30px", paddingY: 0, borderRadius: "20px", },
                value: "" || value,
                onChange: null || onChange,
                endAdornment: (
                    !hideMenu &&
                    <FormControl sx={{ height: "100%", paddingY: 0, width: "130px" }}  >
                        <Select
                            defaultValue={"Jobs"}
                            renderValue={(value) => {
                                return (
                                    <Typography paddingX={2} variant='h6' fontSize={"15px"} children={value} />
                                );
                            }}
                            variant="standard"
                            sx={{ height: "100%", }}
                        >
                            {searchOptions.map(option =>
                                <MenuItem MenuItem selected value={option.value}  >
                                    <Box display={'flex'} gap={1} width="100%" paddingX={1}>
                                        {option.icon}
                                        <Box>
                                            <Typography variant='h6' fontSize={"12px"} children={option.label} />
                                            <Typography variant='body2' fontSize={"10px"} children={option.dec} />
                                        </Box>
                                    </Box>
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>

                ),
                startAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                )

                ,
            }}

        />
    )
}
