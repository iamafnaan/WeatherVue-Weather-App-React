import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import EmojiBox from "./EmojiBox";

const LoadingScreen = () => {
    return (
        <Box mt={5}>
            <CircularProgress />
            <Typography variant="h5" mt={2} color="primary.dark">
                We&apos;re fetching the latest updates for you...
            </Typography>

            <EmojiBox />
        </Box>
    );
};

export default LoadingScreen;
