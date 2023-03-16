import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery } from '@mui/material'
import React, { memo, useEffect, useState, } from 'react'
import Logo from '../UpworkLogo'
import Menu from '../Menu'
import SearchBar from '../SearchBar'
import Avatar from '../Avatar'
import Tab from '../Tab'
import colors from '../../style/colors.json'
import breackPoint from '../../style/breackPoint.json'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Search from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DirectContacts, help, Help, Logout, menu, Message, Notification, Setting } from './data'


function Index() {

    const MX = useMediaQuery(breackPoint.mainPage.mx)
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    useEffect(() => {
        setOpenDrawer(false)
    }, [MX])


    const toggleDrawer = (open) => () => {
        setOpenDrawer(open);
    };

    const toggleSearch = (open) => () => {
        setOpenSearch(open);
    };

    const tabs = [
        { label: "Jobs", content: ["Jobs"] },
        { label: "Talent", content: ["Talent"] },
        { label: "Projects", content: ["Projects"] },
    ]


    const mobileDrawerList = [menu, menu, menu, Message, Help, DirectContacts, Notification, Setting, Logout]

    const list = (
        <Box
            sx={{ width: "100vw" }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}>
            <Box
                padding={1}
                display={"flex"}
                gap={2}
                alignItems={"center"}
                justifyContent={"space-between"}  >
                <div onClick={toggleDrawer(false)}>
                    <CloseIcon sx={{ fontSize: "30px" }} />
                </div>
                <Logo width={"fit-content"} />
                <div onClick={toggleSearch(true)}>
                    <Search sx={{ fontSize: "30px" }} />
                </div>
            </Box>
            <List>
                <Avatar expand />
                <Divider />
                {mobileDrawerList.map((menu) => (
                    <>{menu.options
                        ?
                        <Accordion sx={{ padding: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{menu.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {menu.options.map(option =>
                                        <ListItemText
                                            onClick={option.optionHandle}
                                            key={option.title}
                                            primary={option.title} />
                                    )}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        :
                        <ListItem key={menu.title} sx={{ padding: 1 }} >
                            <ListItemButton sx={{ width: "100%" }}>
                                <ListItemText primary={menu.title} />
                                {menu.icon}
                            </ListItemButton>
                        </ListItem>}
                    </>
                ))}
                <Divider />
            </List>
        </Box >
    );


    const search = (
        <Box
            sx={{ width: "100vw" }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}>
            <Box padding={1} display={"flex"} gap={3} flexDirection={"column"}  >
                <Box display={"flex"} justifyContent={"space-between"} width={"100%"} >
                    <ArrowBackIcon onClick={toggleSearch(false)} sx={{ fontSize: "30px" }} />
                    <SearchBar hideMenu={true} />
                </Box>
                <Box>
                    <Tab tabsGroup={tabs} />
                </Box>
            </Box>
        </Box >
    );
    return (

        <Box display={"flex"} gap={2} alignItems={"center"} justifyContent="space-between" width="100%">
            <>

                {
                    MX ? <>
                        <div onClick={toggleDrawer(true)}>
                            <MenuOutlinedIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <Drawer
                            transitionDuration={0}
                            open={openDrawer}
                            onClose={toggleDrawer(false)}>
                            {list}
                        </Drawer>
                        <Drawer
                            anchor='right'
                            open={openSearch}
                            onClose={toggleSearch(false)}>
                            {search}
                        </Drawer>
                        <Logo width={"fit-content"} />
                        <div onClick={toggleSearch(true)}>
                            <Search sx={{ fontSize: "30px" }} />
                        </div>

                    </>
                        : <>
                            <Box display={"flex"} alignItems="center">
                                <Logo />
                                <Box display={"flex"} alignItems="center">
                                    <Menu menu={menu} />
                                    <Menu menu={menu} />
                                    <Menu menu={menu} />
                                    <Button
                                        id="demo-positioned-button"
                                        sx={{
                                            color: "#000",
                                            fontSize: "12px",
                                            width: "100px",
                                            "&:hover": {
                                                color: colors.mainGreenColor,
                                                background: "#0000"
                                            }
                                        }}
                                    >Message
                                    </Button>
                                </Box>
                            </Box>
                            <Box display={"flex"} alignItems="center">
                                <SearchBar />
                                <Box display={"flex"} alignItems="center" gap={3} paddingX={2}>
                                    <Menu menu={help} type="help" />
                                    <SendOutlinedIcon />
                                    <NotificationsNoneOutlinedIcon />
                                    <Avatar />
                                </Box>
                            </Box>
                        </>
                }</>
        </Box >
    )
}

export default memo(Index)
