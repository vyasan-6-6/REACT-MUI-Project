import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";

const Add = () => {
    const [open, setOpen] = useState(false);
    const StyleModal = styled(Modal)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    });
    const UserBox = styled(Box)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
        marginRight: "auto",
        width: "fit-content",
    });
    return (
        <>
            <Tooltip title="Add" onClick={(e) => setOpen(true)}>
                <Fab
                    color="primary"
                    aria-label="add"
                    sx={{
                        position: "fixed",
                        bottom: 20,
                        left: { xs: "calc(50% - 25px)", md: 30 },
                    }}
                >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={2} bgcolor={"background.default"} color={"text.primary"} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign={"center"}>
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://material-ui.com/static/images/avatar/3.jpg"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span">
                            Remy Sharo
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        defaultValue="What's On Your Mind ?"
                        variant="standard"
                    />
                    <Stack direction={"row"} gap={2} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        sx={{ mt: "auto", mb: 3, width: "100%" }}
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button sx={{ flex: 1 }}>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyleModal>
        </>
    );
};

export default Add;
