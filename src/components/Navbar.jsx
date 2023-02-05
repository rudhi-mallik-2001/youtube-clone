import React from 'react'
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import MenuIcon from '@mui/icons-material/Menu';
import { height } from '@mui/system';
const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{ position: 'stickey', top: '0', background: "#fff", height:"60px"}}>
    <Stack direction={"row"} justifyContent={'start'} alignItems='center'
    sx={{width:"30%"}}
      >
      <MenuIcon mx={2} fontSize={'large'} sx={{display:{xs:'none',sm:'none',md:"block"}}} />
      <Link to='/' style={{ display: 'flex', alignItems: 'center', marginLeft: "20px" }}>
        <img src={logo} alt='logo' height={30} sx={{ marginLeft: "20px" }} /><sup></sup>
      </Link>
    </Stack>
    
  <Stack
    direction='row'
    alignItems='center'
    left={120}
    >
      <SearchBar />
    </Stack>
    
  </Stack>
)

export default Navbar;

