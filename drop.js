import React, { useState } from 'react';
import { FormControl,Select, MenuItem} from '@mui/material';
import "./color.css";
// import { margin, padding } from '@mui/system';


function Dropdown() {
    const [color, setColor] = useState("White");

    const handleColor = (event) => {
        setColor(event.target.value);
    }
    const options = [
          {
            value: 'Lime',
            label: 'Lime',
           
          },
          {
            value: 'Lavender',
            label: 'Lavender',  
         
          },
          {
            value: 'Crimson',
            label: 'Crimson',
           
          },
          {
            value: 'Darkblue',
            label: 'DarkBlue',
        
          },
          {
            value: 'Teal',
            label: 'Teal',
        
          },
          {
            value: 'RebeccaPurple',
            label: 'Rebecca Purple',
        
          },
          {
            value: 'GhostWhite',
            label: 'Ghost White',
        
          },
          {
            value: 'AquaMarine',
            label: 'Aqua Marine',
        
          },
          {
            value: 'AliceBlue',
            label: 'Alice Blue',
        
          },
        ];
    
    return (
        <>
        <br/>
        <h1><center>Dropdown button</center></h1>
        <br/>
        <br/>
        <div className='inner'>
            <FormControl>
                <Select
                    id={color}
                   
                    value={color}
                    onChange={handleColor}
                    sx={{
                       
                        width: 150
                    }}
                >
                    {options.map((option)=>(
                        <MenuItem value={option.value}>
                                {option.label}
                        </MenuItem>
                    ))}
                </Select>
                </FormControl>
                </div>
            <div className='div' id={color}>

            </div>
        </>
    )
}

export default Dropdown;