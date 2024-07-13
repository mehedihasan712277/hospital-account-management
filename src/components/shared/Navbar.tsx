"use client"
import { usePathname } from "next/navigation"
import { menuItems } from "./SideBar"
import { Badge, Button } from "@mui/material"
import SearchBox from "../ui/SearchBox"
import Dropdown from "../ui/Dropdown"
import { NotificationsNone } from "@mui/icons-material"

const Navbar = () => {
    const pathname = usePathname()
    // let title = menuItems.filter(ele => ele.link === pathname);
    // console.log(title)
    // // console.log(pathname)
    let title = menuItems.map(ele => {
        if (ele.link === pathname) {
            return ele.label
        }
        else {
            return ""
        }
    })

    return (
        <nav className="bg-[#FCFCFC] fixed left-[20vw] top-0 right-0 py-[20px] px-[30px] flex justify-between items-center">
            <div>
                <p className="text-[32px] font-bold text-[#05061B]">{title}</p>
                <p className="text-xs text-gray-300">Dashboard - home</p>
            </div>
            <div className="flex items-center gap-[10px]">
                <SearchBox></SearchBox>
                <Dropdown></Dropdown>
                <Button variant="outlined" sx={{ height: 50, width: 50, borderColor: "#697AD2" }}>
                    <Badge color="secondary" badgeContent={333}>
                        <span className="text-[#697AD2]">
                            <NotificationsNone></NotificationsNone>
                        </span>
                    </Badge>
                </Button>
                <Button variant="outlined">Content</Button>
            </div>
        </nav>
    )
}

export default Navbar