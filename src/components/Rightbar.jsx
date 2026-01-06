import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  const theme = useTheme()
    return (
        <Box sx={{ display: { xs: "none", sm: "block" } }} p={2} flex={2}>
           <Box position="fixed" width={300}>


<Typography
  variant="h6"
  sx={(theme) => ({
    color:
      theme.palette.mode === "dark"
        ? "#8f9bff"
        : "#3f51b5",
  })}
>

                    Online TeamMates
                </Typography>
                <AvatarGroup max={6} sx={{mt:2,mb:3}}>
                    <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=1" />
                    <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=9" />
                    <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=7" />
                    <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=44" />
                    <Avatar alt="Agnes Walker" src="https://i.pravatar.cc/150?img=67" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=4" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=4" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=4" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=4" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=4" />
                </AvatarGroup>
                <Typography variant="h6" fontFamily={"cursive"} fontWeight={100} >
                    Latest Photos Upload within 24h..
                </Typography>
                <ImageList cols={3} gap={5} rowHeight={100}>
  <ImageListItem>
    <img
      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
      alt="Mountains"
    />
  </ImageListItem>

  <ImageListItem>
    <img
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
      alt="Food"
    />
  </ImageListItem>

  <ImageListItem>
    <img
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
      alt="Workspace"
    />
  </ImageListItem>

   
</ImageList>

                <Typography variant="h6" fontFamily={'cursive'} fontWeight={100} sx={(theme) => ({
    color:
      theme.palette.mode === "dark"
        ? "#8f9bff"
        : "#3f51b5",
  })} >
                    Latest Chats
                </Typography>
                <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=1" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography 
                                        component="span"
                                        variant="body2"
                                        sx={(theme) => ({
    color:
      theme.palette.mode === "dark"
        ? "#8f9bff"
        : "#3f51b5", display: "inline" 
  })}
                                        
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=0" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography 
                                        component="span"
                                        variant="body2"
                                        sx={{  color:
      theme.palette.mode === "dark"
        ? "#8f9bff"
        : "#3f51b5", display: "inline" }}
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=22" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography 
                                        component="span"
                                        variant="body2"
                                        sx={(theme) => ({
    color:
      theme.palette.mode === "dark"
        ? "#8f9bff"
        : "#3f51b5",
        display:"inline"
  })}
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {" — Do you have Paris recommendations? Have you ever…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;
