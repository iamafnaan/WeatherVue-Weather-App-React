import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { weatherEmojisStyles } from "../styles/customStyles";

const EmojiBox = () => {
    return (
        <Box mt={5}>
            <Typography variant="h4" sx={weatherEmojisStyles}>
                ☀️⛅☁️🌧️⛈️
            </Typography>
        </Box>
    );
};

export default EmojiBox;
