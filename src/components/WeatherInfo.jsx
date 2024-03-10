import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";

import JSONCodes from "../data/weatherCodes.json";

export const weatherDetails = [
    {
        id: 1,
        name: "temperatureApparent",
        icon: <ThermostatIcon fontSize="large" />,
        text: "Feels like",
        unit: "°c",
    },
    {
        id: 2,
        name: "humidity",
        icon: <OpacityIcon fontSize="large" />,
        text: "Humidity",
        unit: "%",
    },
    {
        id: 3,
        name: "windSpeed",
        icon: <AirIcon fontSize="large" />,
        text: "Wind speed",
        unit: " m/s",
    },
    {
        id: 4,
        name: "pressureSurfaceLevel",
        icon: <CompressIcon fontSize="large" />,
        text: "Pressure",
        unit: " hPa",
    },
];

const WeatherInfo = ({ weatherData }) => {
    return (
        <Box>
            <Box mb={3}>
                <Typography
                    variant="h4"
                    fontWeight={700}
                    mt={3}
                    color="primary.main"
                >
                    {weatherData?.location[0]},
                    <Typography fontSize={"1rem"} fontWeight={700}>
                        {weatherData?.location[1]}
                    </Typography>
                </Typography>

                <Typography color="secondary.light">
                    {weatherData?.timestamp.time} | {weatherData?.timestamp.day}
                    , {weatherData?.timestamp.date}
                </Typography>

                <Typography
                    variant="h1"
                    fontWeight={600}
                    mt={3}
                    color="primary.main"
                >
                    {weatherData?.values.temperature}°c
                </Typography>
            </Box>

            <Divider>
                <Typography variant="h6" color="secondary.main">
                    {JSONCodes["weatherCode"][weatherData?.values.weatherCode]}
                </Typography>
            </Divider>

            <Grid container mt={3} rowGap={3} columnSpacing={2}>
                {weatherDetails.map((item) => {
                    const { id, name, icon, text, unit } = item;
                    return (
                        <Grid item xs={6} sm={3} key={id}>
                            <Box color="primary.main">{icon}</Box>
                            <Box mt={1}>
                                <Typography display="block">{text}</Typography>
                                <Typography fontWeight={700} display="block">
                                    {weatherData?.values?.[name]}
                                    {unit}
                                </Typography>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default WeatherInfo;
