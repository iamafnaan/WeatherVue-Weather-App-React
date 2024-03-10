import { useState } from "react";

import Paper from "@mui/material/Paper";

import { ErrorScreen, Header, LoadingScreen, SearchBar, WeatherInfo, WelcomeBox } from './index'

import { weatherCardStyles } from "../styles/customStyles";

import { apiCall, fetchForecastData } from "../utils/api";


import { dateFormat } from "../utils/helper";


const WeatherCard = () => {
    const [error, setError] = useState(false);
    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
  

    const fetchData = async () => {
        setForecastData(null);
        
        setIsLoading(true);
        const responseData = await apiCall(location);
        setIsLoading(false);

        if (
            responseData.code == "429001" ||
            responseData.code == "404001" ||
            responseData.code == "400001"
        ) {
            setError(true);
            return;
        }

        setError(false);
        const { date, day, time } = dateFormat(responseData.data.time);

        let locationData = responseData.location.name.split(",");
        locationData = [locationData[0], locationData[locationData.length - 1]];
        setWeatherData({
            values: responseData.data.values,
            timestamp: { date, day, time },
            location: locationData,
        });
        const forecastResponse = await fetchForecastData(location);
        if (forecastResponse?.data?.timelines?.daily) {
          setForecastData(forecastResponse.data.timelines.daily[0].intervals);
    }
        
 
    };

    return (
        <Paper sx={weatherCardStyles} elevation={3}>
            <Header />
            <SearchBar
                location={location}
                setLocation={setLocation}
                fetchData={fetchData}
            />
            {isLoading ? (
                <LoadingScreen />
            ) : weatherData ? (
                <WeatherInfo weatherData={weatherData} />
            ) : error ? (
                <ErrorScreen/>
            ) : (
                <WelcomeBox />
            )}
            {isLoading ? (
                <LoadingScreen />
            ) : weatherData ? (
                <WeatherInfo weatherData={weatherData} forecastData={forecastData} />
            ) : error ? (
                <ErrorScreen />
            ) : (
                <WelcomeBox />
            )} 
        </Paper> //loading two cards .. for fore-casting as well the structure of api is as such that it has min-by-min object
    );
};

export default WeatherCard;
