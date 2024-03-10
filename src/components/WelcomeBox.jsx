import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import EmojiBox from "./EmojiBox";

const WelcomeBox = () => {
    return (
        <Box mt={5}>
            <Typography variant="h5" fontWeight={700} color="primary.main">
                Welcome to the Weather Application!
            </Typography>
            <Typography variant="h6" fontWeight={500} color="primary.dark">
                Check your city&lsquo;s current weather instantly.
            </Typography>

            <EmojiBox />
        </Box>
    );
};

export default WelcomeBox;
