import { Box, Fab,   Modal,   styled,   Tooltip, Typography  } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react"; 

const Add = () => {
  const [open,setOpen] = useState(false);
  const StyleModal = styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  })
    return (
        <> 
        <Tooltip title="delete" onClick={(e)=>setOpen(true) }>
  <Fab 
    color="primary" 
    aria-label="add"
    sx={{
      position: "fixed",
      bottom: 20,
      left: { xs: "calc(50% - 25px)", md: 30 }
    }}
  >
    <AddIcon />
  </Fab>
</Tooltip>
<StyleModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} p={3} bgcolor={"white"} borderRadius={5}>
<Typography variant="h6" color="gray" textAlign={"center"}>
  Create Post
</Typography>
<UserBox>
  
</UserBox>
  </Box>
</StyleModal>
        </>
    );
};

export default Add;
