import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({ location, setLocation, fetchData }) => {
    const getWeatherHandler = (e) => {
        e.preventDefault();
        fetchData();
        setLocation("");
    };
    return (
        <Box component="form" onSubmit={getWeatherHandler}>
            <TextField
                type="text"
                id="outlined-basic"
                label="Enter Location"
                variant="outlined"
                helperText="Please enter a city name"
                fullWidth
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                autoComplete="off"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default SearchBar;
