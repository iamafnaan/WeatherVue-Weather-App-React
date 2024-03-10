import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3B3486",
            dark: "#0F2167",
        },
        secondary: {
            main: "#191919",
            light: "#45474B",
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    shadows: [
        'none', 
        '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)', // shadow level 1
        '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)', // shadow level 2
        '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)', // shadow level 3
        
    ],
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    fontSize: "16px",
                    "@media (max-width: 480px)": {
                        fontSize: "12px",
                    },
                },
                body: {
                    backgroundImage:
                        "linear-gradient(to top, #F3F8FF 0%, #DEECFF 100%)",
                },
            },
        },
        MuiIconButton: {
            defaultProps: {
                sx: {
                    bgcolor: "primary.main",
                    color: "#fff",

                    "&:hover": {
                        bgcolor: "primary.dark",
                    },
                },
            },
        },
    },
});

export default theme;

