"use client"
import { usePathname } from "next/navigation"
import { menuItems } from "./SideBar"
import SearchBox from "../ui/SearchBox"
import CurrencyList from "../ui/CurrencyList"
import NotificationList from "../ui/NotificationList"
import Image from "next/image"
import profile from "@/assets/profile.jpg"

const Navbar = () => {
    const pathname = usePathname()
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
            <div className="flex items-center gap-[20px]">
                <SearchBox></SearchBox>
                <CurrencyList></CurrencyList>
                <NotificationList></NotificationList>
                <div className="flex gap-[10px]">
                    <div className="border-[#697AD2] border-2 rounded">
                        <Image src={profile} alt="profile" width={50} height={50} className="rounded"></Image>
                    </div>
                    <div>
                        <p className="text-[#1C2554]">Mohammad Ratul Hasan</p>
                        <p className="text-gray-400 text-xs">Super Admin</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar