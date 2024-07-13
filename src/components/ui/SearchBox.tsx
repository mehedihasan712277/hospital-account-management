import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 126, height: 50, boxShadow: "none", border: "1px solid #697AD2" }}
        >
            <IconButton type="button" sx={{ color: "#697AD2" }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{
                    flex: 1,
                    '& .MuiInputBase-input::placeholder': {
                        color: 'blue',
                    },
                }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
    );
}

export default SearchBox;
