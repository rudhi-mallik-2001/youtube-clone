import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Paper, IconButton, Stack } from "@mui/material";
import MicSharpIcon from '@mui/icons-material/MicSharp';
const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState();
  const usenavigate = useNavigate()
  const SubmitEvent = (e) => {
    e.preventDefault();
    if (searchTerm) {
      usenavigate(`/search/${searchTerm}`);
      console.log(searchTerm)
      setsearchTerm('')
    }
  }
  return (
    <Stack
      direction={{xs:"column",sm:"column",md:"row"}}
    >
      <Paper component='form'
        onSubmit={SubmitEvent}
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          pl: 2,
          boxShadow: 'none',
          mr: { sm: 5 },
          justifyContent: "center",
          alignItems: "center",
          width: "max-content"
        }}>
        <input className='search-bar' placeholder='Search...' value={searchTerm}
          onChange={(e) => { setsearchTerm(e.target.value) }}
          sx={{ display: { sx: 'none', sm: 'none', md: "block" } }}
        />
        <IconButton type='submit' sx={{
          p: '10px', color: 'black',
          borderLeft: "2px solid black", borderRadius: "0% 40% 40% 0%", background: "#f2f2f2",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom:"15px",
          Right: "30px"
        }}><Search></Search></IconButton>

      </Paper>
      <Paper component='form'
        onSubmit={SubmitEvent}
        sx={{ display: { x: 'none', sm: 'none', md: "block" },borderRadius:"50%" }}>

        <IconButton type='submit' sx={{
          display: { xs: "none", sm: "none", md: "block" },
          p: '10px', color: 'black'
          , borderRadius: "50%", background: "#f2f2f2",
          Right: "30px"
        }}><MicSharpIcon></MicSharpIcon></IconButton>
      </Paper>
    </Stack >
  )
}

export default SearchBar