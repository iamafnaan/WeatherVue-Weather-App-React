export const apiCall = async (location) => {
    const API_KEY = import.meta.env.VITE_API_KEY; // securing api key

    const options = {
        method: "GET",
        headers: { accept: "application/json", "Accept-Encoding": "gzip" },
    };

    try {
        const response = await fetch(
            `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${API_KEY}`,
            options
        ); // for real time

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error); // catching errors
    }
};

export const fetchForecastData = async (location) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const units = "metric"; 

    const options = {
        method: "GET",
        headers: { accept: "application/json", "Accept-Encoding": "gzip" },
    };

    try {
        const response = await fetch(
            `https://api.tomorrow.io/v4/timelines?location=${location}&timesteps=daily&units=${units}&apikey=${API_KEY}`,
            options
        ); // for weather-forecast

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
};
