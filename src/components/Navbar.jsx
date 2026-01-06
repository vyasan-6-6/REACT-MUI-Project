import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { Notifications } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";

import { useState } from "react";
const Navbar = () => {
    const [open, setOpen] = useState(false);
 

    const StyledToolBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });
const Search = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.paper
      : "#ffffff",
  color: theme.palette.text.primary,
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
        <AppBar position="sticky" color="secondary">
            <StyledToolBar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    New Era
                </Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder="Search...." />
                </Search>

                <Icons>
                    <Badge badgeContent={19} color="error">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={26} color="error">
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
  open={open}
  onClose={() => setOpen(false)}
  anchorOrigin={{ vertical: "top", horizontal: "right" }}
  transformOrigin={{ vertical: "top", horizontal: "right" }}
  PaperProps={{
    sx: (theme) => ({
      mt: 5,
      minWidth: 180,
      bgcolor: theme.palette.background.paper,
      borderRadius: 2,
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 10px 30px rgba(0,0,0,0.7)"
          : "0 10px 30px rgba(0,0,0,0.15)",
    }),
  }}
>
  <MenuItem sx={{ gap: 1 ,
  "&:hover": {
    bgcolor: "action.hover",
  },}}>
    <PersonIcon fontSize="small" />
    Profile
  </MenuItem>

  <MenuItem sx={{ gap: 1,
  "&:hover": {
    bgcolor: "action.hover",
  }, }}>
    <SettingsIcon fontSize="small" />
    My Account
  </MenuItem>

  <Divider />

  <MenuItem sx={{ gap: 1, color: "error.main",
  "&:hover": {
    bgcolor: "action.hover",
  }, }}>
    <LogoutIcon fontSize="small" />
    Logout
  </MenuItem>
</Menu>

        </AppBar>
    );
};

export default Navbar;
