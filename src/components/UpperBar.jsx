import React from 'react'
import { Stack } from "@mui/material";
import { categories4, } from "../utils/constants";

const UpperBar = ({ selectedCategory, setselectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "auto" },
            
        }}
    >
         {categories4.map((category) => (
            <button
                className="category4-btn"
                onClick={() => { setselectedCategory(category.name) }}
                style={{ background: category.name === selectedCategory && 'Black', 
                color: 'black',
             }}
                key={category.name}
                
            >
                <span style={{
                    opacity: category.name === selectedCategory ? '1' : '0.7',
                    color: category.name === selectedCategory ?"white":"black",
                    margin:"10px",
                    width: 'max-content',

                }}
                >{category.name}
                </span>
            </button>
        ))}
    </Stack>
)


export default UpperBar