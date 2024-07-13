"use client"
import { useState } from 'react';
import { Money, Person, PersonAdd, ViewComfyAlt } from "@mui/icons-material";
import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuListDatatype } from '@/utils/types';


export const menuItems: MenuListDatatype[] = [
    { link: "/", icon: <ViewComfyAlt />, label: 'Overview' },
    { link: "/cashflow", icon: <Money />, label: 'Cashflow' },
    { link: "/member", icon: <PersonAdd />, label: 'Member' },
    { link: "/user", icon: <Person />, label: 'User & Role' }
];

const SideBar = () => {
    // const [activeItem, setActiveItem] = useState('Overview');
    const pathname = usePathname()

    return (
        <div className="bg-[#1C2554] h-screen lg:px-8 pt-8 space-y-8 fixed left-0 top-0 w-0 overflow-x-hidden lg:w-[20vw]">
            <div className='h-[100px] w-[100px] rounded-full bg-white'>
                <Image src={logo} alt='logo' width={100}></Image>
            </div>
            <div className="flex flex-col gap-3">
                {menuItems.map(item => (
                    <Link href={item.link} key={item.label}>
                        <div
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition duration-150 ease-in-out ${pathname === item.link
                                ? 'bg-white text-black'
                                : 'text-white hover:text-black hover:bg-white'
                                }`}
                        // onClick={() => setActiveItem(item.label)}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
