import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import EmojiBox from "./EmojiBox";

const ErrorScreen = () => {
    return (
        <Box mt={3}>
            <Typography variant="h5" color="primary.main">
                Oops! Something went wrong while fetching the weather. Please
                try again later.
            </Typography>

            <EmojiBox />
        </Box>
    );
};

export default ErrorScreen;
