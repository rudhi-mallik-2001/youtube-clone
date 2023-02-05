import React from 'react'
import { Stack } from "@mui/material";
import { categories,categories2,categories3 } from "../utils/constants";
import { width } from '@mui/system';

const Sidebar = ({ selectedCategory, setselectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "90vh" },
            flexDirection: { md: "column" },
            width:'300px',
            display:{xs:'none',sm:'none',md:"block"}
        }}
    >
        
        {categories2.map((category) => (
            <button
                className="category-btn"
                onClick={() => { setselectedCategory(category.name) }}
                style={{ background: category.name === selectedCategory && '#cacaca', color: 'black' }}
                key={category.name}
            >
                <span
                    style={{
                        color: category.name === selectedCategory ? 'black' : 'black',
                        marginRight: '15px'
                    }}
                >{category.icon}
                </span>
                <span style={{
                    opacity: category.name === selectedCategory ? '1' : '0.7',
                    color: "black"
                }}
                >{category.name}
                </span>
            </button>
        ))}
                <span ><hr style={{color:"rgb(223 215 215)",height:"1px",background:"rgb(223 215 215)"}}/></span>

         {categories3.map((category) => (
            <button
                className="category-btn"
                onClick={() => { setselectedCategory(category.name) }}
                style={{ background: category.name === selectedCategory && '#cacaca', color: 'black' }}
                key={category.name}
            >
                <span
                    style={{
                        color: category.name === selectedCategory ? 'black' : 'black',
                        marginRight: '15px'
                    }}
                >{category.icon}
                </span>
                <span style={{
                    opacity: category.name === selectedCategory ? '1' : '0.7',
                    color: "black"
                }}
                >{category.name}
                </span>
            </button>
        ))}
        <span ><hr style={{color:"rgb(223 215 215)",height:"1px",background:"rgb(223 215 215)"}}/></span>
         {categories.map((category) => (
            <button
                className="category-btn"
                onClick={() => { setselectedCategory(category.name) }}
                style={{ background: category.name === selectedCategory && '#cacaca', color: 'black' }}
                key={category.name}
            >
                <span
                    style={{
                        color: category.name === selectedCategory ? 'black' : 'black',
                        marginRight: '15px'
                    }}
                >{category.icon}
                </span>
                <span style={{
                    opacity: category.name === selectedCategory ? '1' : '0.7',
                    color: "black"
                }}
                >{category.name}
                </span>
            </button>
        ))}
    </Stack>
)


export default Sidebar