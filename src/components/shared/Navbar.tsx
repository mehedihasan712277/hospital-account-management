"use client"
import { usePathname } from "next/navigation"
import { menuItems } from "./SideBar"

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
        <nav className="bg-[#FCFCFC] fixed left-[20vw] top-0 right-0">
            <p>{title}</p>
        </nav>
    )
}

export default Navbar