export const dateFormat = (timestamp) => {
    const dateObject = new Date(timestamp);

    if (isNaN(dateObject.getTime())) {
        console.error("Invalid timestamp");
    } else {
        const date = dateObject.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
        const day = dateObject.toLocaleDateString("en-US", {
            weekday: "short",
        });
        const time = dateObject.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
        return { date, day, time };
    }
};
