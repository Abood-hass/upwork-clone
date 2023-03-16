
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
export const menu =
{
    title: "Find Work",
    options: [
        {
            title: "Find Work",
            optionHandle: () => console.log("first")
        },
        {
            title: "Saved Works",
            optionHandle: () => console.log("first")
        },
        {
            title: "Proposal",
            optionHandle: () => console.log("first")
        },
        {
            title: "Profile",
            optionHandle: () => console.log("first")
        },
        {
            title: "My state",
            optionHandle: () => console.log("first")
        },
        {
            title: "My Project Dashboard",
            optionHandle: () => console.log("first")
        },
    ]
}


export const Message = {
    title: "Message",
    optionHandle: () => console.log("first")
}


export const Help = {
    title: "Help",
    icon: <QuestionMarkOutlinedIcon color='#000' />,
    optionHandle: () => console.log("first")
}

export const DirectContacts = {
    title: "Direct Contacts",
    icon: <SendOutlinedIcon color='#000' />,
    optionHandle: () => console.log("first")
}

export const Notification = {
    title: "Notification",
    icon: <NotificationsNoneOutlinedIcon color='#000' />,
    optionHandle: () => console.log("first")
}

export const Logout = {
    title: "Logout",
    icon: <LogoutIcon color='#000' />,
    optionHandle: () => console.log("first")
}
export const Setting = {
    title: "Setting",
    icon: <SettingsIcon color='#000' />,
    optionHandle: () => console.log("first")
}

export const help = {
    title: <QuestionMarkOutlinedIcon sx={{ padding: 0 }} color={'success'} />,
    options: [
        {
            title: "Find Work",
            optionHandle: () => console.log("first")
        },
        {
            title: "Saved Works",
            optionHandle: () => console.log("first")
        },
        {
            title: "Proposal",
            optionHandle: () => console.log("first")
        },
    ]
}
