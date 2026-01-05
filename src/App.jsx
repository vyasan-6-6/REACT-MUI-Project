import { CssBaseline, Stack } from "@mui/material"
import Box from '@mui/material/Box';
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar";
import Add from "./components/Add";

 
 

function App() {
  
   
  return (
  <>
    <CssBaseline/>
    <Box  >
      <Navbar/>
    <Stack direction="row" justifyContent="space-between" spacing={2}>
       <Sidebar/>
     <Feed/>
     <Rightbar/>
    </Stack>
    <Add/>
    </Box>
    </>
  )
}

export default App
