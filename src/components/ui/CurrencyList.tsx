"use client"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { currencyValues } from '@/utils/temporaryData';

const CurrencyList = () => {
    const [age, setAge] = useState("2");

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
                    {
                        currencyValues.map(ele => {
                            return <MenuItem key={ele.id} sx={{ margin: "0px 10px", borderRadius: "4px" }} value={ele.id}>{ele.currency}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default CurrencyList;
