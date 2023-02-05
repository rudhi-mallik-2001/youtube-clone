import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Vedios } from "./";
import { dataFromApi } from "../utils/dataFromApi";
import axios from "axios";
import { useParams ,useNavigate} from "react-router-dom";
function Searchterm() {
  const SearchTerm=useParams([]);
  const result = Object.values(SearchTerm);

  console.log(result[0]);
  const [selectedCategory, setselectedCategory] = useState('');
  const [video, setVideo] = useState([]);
  useEffect(()=>{
    dataFromApi(`search?part=id,snippet&regionCode=IN&q=${result[0]}`)
    .then((data)=>setVideo(data.items)
    )
  },[SearchTerm]);
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedCategory !== '') {
      // dataFromApi(`search?part=id,snippet&q=${selectedCategory}`)
      // .then((data)=>setVideo(data.items))
      console.log(selectedCategory)
      navigate('/', { selectedCategory })
    }
  }, [selectedCategory])
  console.log(video);
  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "95%" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 }
        }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          variant="body2"
          sx={{ mt: "1.2px", color: "#FFF",display:{xs:"none",sm:"none",md:"block"} }}
        >
          Copyright 2022 @rudhi

        </Typography>

      </Box>
      <Box
        p={2}
        sx={{ overflow: "auto", height:  { sx: "auto", md: "110vh" }, flex: 2 }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ color: 'white' }}>
          {selectedCategory}<span
            style={{ color: 'red', paddingLeft: "10px" }}
          >
            Videos</span>
        </Typography>
        {video.length >= 2 && <Vedios vedios={video} />}
      </Box>
    </Stack>
  )
}

export default Searchterm;