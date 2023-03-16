import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import colors from "../../style/colors.json";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function PositionedMenu({ menu, type }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div >
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseOver={type ? null : handleClick}
                onClick={type ? handleClick : null}
                sx={{ color: menu.title === "Find Work" ? colors.mainGreenColor : "", fontSize: "12px", width: type ? "fit-content" : "100px" }}
            >
                {menu.title || "Dashboard"}
                {type ? null : <KeyboardArrowDownIcon sx={{ fontSize: "16px", color: "#000" }} />}
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
            >
                {
                    menu.options.map((option, index) =>
                        <MenuItem
                            key={index}
                            onClick={option.optionHandle}
                            children={option.title || "option"}
                            sx={{ color: option.title === menu.title ? colors.mainGreenColor : "", fontSize: "14px", fontWeight: 450, width: "280px" }}
                        />)
                    ||
                    <MenuItem onClick={handleClose} >Profile</MenuItem>

                }

            </Menu>
        </div>
    );
}