import Box from "@mui/material/Box";
import Logo from "../../assets/images/logos/logo.png";

export const SiteLogo = () => {
    return (
        <Box display={"flex"} justifyContent="center">
            <img src={Logo} alt="logo not found" style={{ width: "90px", height: "80px" }} />
        </Box>
    );
};
