import Typography from "@mui/material/Typography";

const Header = () => {
    return (
        <Typography
            variant="h2"
            fontWeight={900}
            color="primary.main"
            textTransform={"uppercase"}
            align="center"
            mb={3}
        >
            Weather App
        </Typography>
    );
};

export default Header;
