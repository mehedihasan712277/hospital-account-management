"use client"
import { NotificationsNone } from "@mui/icons-material"
import { useState } from 'react';
import { notifications } from '@/utils/temporaryData';
import Popover from '@mui/material/Popover';
import { Badge, Button } from "@mui/material"



const NotificationList = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id}
                variant="outlined"
                onClick={handleClick}
                sx={{ color: "#697AD2", borderColor: "#697AD2", height: 50, width: 50 }}
            >
                <Badge color="secondary" badgeContent={333}>
                    <span className="text-[#697AD2]">
                        <NotificationsNone></NotificationsNone>
                    </span>
                </Badge>
            </Button>


            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{ marginLeft: -30 }}
            >
                <div className="p-[20px] space-y-4 w-[300px]">
                    {
                        notifications.map(ele => <p className="rounded bg-[#F2F2F2] p-4">{ele.notification}</p>)
                    }
                </div>
            </Popover>
        </div>
    );
}

export default NotificationList