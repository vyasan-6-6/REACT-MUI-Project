import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { Notifications } from "@mui/icons-material";
import { useState } from "react";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const StyledToolBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });

    const Search = styled("div")(({ theme }) => ({
        background: "white",
        padding: "0 10px",
        width: "40%",
        borderRadius: theme.shape.borderRadius,
    }));

    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        },
    }));
    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    }));
    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    New Era
                </Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder="Search...." />
                </Search>

                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications color="action" />
                    </Badge>
                    <Avatar
                        onClick={(e) => setOpen(true)}
                        sx={{ width: 30, height: 30 }}
                        src="https://i.pinimg.com/originals/ae/42/a5/ae42a5f18fbda4cf0c8af98e59b8ab1b.png"
                    />
                </Icons>

                <UserBox>
                    <Avatar
                        onClick={(e) => setOpen(true)}
                        sx={{ width: 30, height: 30 }}
                        src="https://i.pinimg.com/originals/ae/42/a5/ae42a5f18fbda4cf0c8af98e59b8ab1b.png"
                    />
                    <Typography variant="">Anto</Typography>
                </UserBox>
            </StyledToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
