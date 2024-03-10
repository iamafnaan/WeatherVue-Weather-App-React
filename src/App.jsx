import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import WeatherCard from "./components/WeatherCard";

import { containerStyles } from "./styles/customStyles";

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container sx={containerStyles}>
                <WeatherCard />
            </Container>
        </React.Fragment>
    );
}

export default App;
