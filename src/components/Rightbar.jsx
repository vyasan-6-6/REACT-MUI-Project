import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
    return (
        <Box sx={{ display: { xs: "none", sm: "block" } }} p={2} flex={2}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100} my={2}>Online Friends</Typography>
                <AvatarGroup max={6}>
  <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/7.jpg" />
  <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg"  />
  <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg"  />
  <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/5.jpg"  />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/1.jpg"  />
</AvatarGroup>
                <Typography variant="h6" fontWeight={100}>Latest Photos</Typography>
                <ImageList cols={3} gap={5} rowHeight={100}>
                  <ImageListItem>
                    <img src="https://material-ui.com/static/images/image-list/breakfast.jpg"/>
                  </ImageListItem>
                
                  <ImageListItem>
                    <img src="https://material-ui.com/static/images/image-list/burgers.jpg"/>
                  </ImageListItem>
                  <ImageListItem>
                    <img src="https://material-ui.com/static/images/image-list/breakfast.jpg"/>
                  </ImageListItem>
                </ImageList>
            <Typography variant="h6" fontWeight={100}>Latest Conversations</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
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
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
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
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/5.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
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
