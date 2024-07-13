"use client"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const Dropdown = () => {
    const [age, setAge] = useState('5');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ width: 126 }}>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                        padding: 0,
                        margin: 0,
                        height: 50,
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#697AD2', // Change the border color
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#697AD2', // Change the border color on hover
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#697AD2', // Change the border color when focused
                        },
                    }}
                >
                    <MenuItem sx={{ margin: "0px 10px", borderRadius: "4px" }} value={5}>Dollar</MenuItem>
                    <MenuItem sx={{ margin: "0px 10px", borderRadius: "4px" }} value={10}>Ten</MenuItem>
                    <MenuItem sx={{ margin: "0px 10px", borderRadius: "4px" }} value={20}>Twenty</MenuItem>
                    <MenuItem sx={{ margin: "0px 10px", borderRadius: "4px" }} value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Dropdown;
