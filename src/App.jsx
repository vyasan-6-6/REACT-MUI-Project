import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";
import { getTheme } from "./components/Theme";

function App() {
    const [mode, setMode] = useState("light");

const theme = getTheme(mode);    

    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Box bgcolor={"background.default"} color={"text.primary"}>
                    <Navbar />
                    <Stack direction="row" justifyContent="space-between" spacing={2}>
                        <Sidebar mode={mode} setMode={setMode} />
                        <Feed />
                        <Rightbar />
                    </Stack>
                    <Add />
                </Box>
            </ThemeProvider>
        </>
    );
}

export default App;
