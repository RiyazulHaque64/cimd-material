/* eslint-disable react/prop-types */
import Drawer from "@mui/material/Drawer";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Send } from '@mui/icons-material'
export default function Sidebar(props) {
    const { isSidebarOpen, SidebarWidth } = props;
    return (
        <Drawer
            anchor="left"
            open={isSidebarOpen}
            variant={"persistent"}
            PaperProps={{
                sx: {
                    borderRight: 0,
                    width: SidebarWidth,
                    borderRadius: "9px",
                    top: "90px",
                    padding: "8px 16px",
                    left: "25px",
                    boxShadow: "rgba(90, 114, 123, 0.11) 0px 7px 30px 0px",
                    height: "calc(100vh - 130px)",
                },
            }}
        >
            <Box sx={{ width: "100%" }}>
                <Button
                    color="primary"
                    size="medium"
                    variant="text"
                    end
                    fullWidth
                    sx={{ textAlign: "start" }}
                    startIcon={<Send />}
                >Home</Button>
            </Box>

        </Drawer>
    );
}
