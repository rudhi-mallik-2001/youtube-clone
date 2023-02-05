import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Vedios,UpperBar } from "./";
import { dataFromApi } from "../utils/dataFromApi";
import axios from "axios";
function Feed() {
  const [selectedCategory, setselectedCategory] = useState('Home');
  const [video, setVideo] = useState([]);
  useEffect(()=>{
    dataFromApi(`search?part=id,snippet&order=date&regionCode=IN&q=${selectedCategory==='Home'||selectedCategory==='All'?'song':selectedCategory}`)
    .then((data)=>setVideo(data.items)
    )
  },[selectedCategory]);
  //console.log(video)
  // useEffect(()=>{
  //   const options = {
  //     method: 'GET',
  //     url: 'https://youtube-v31.p.rapidapi.com/search',
  //     params: {
  //       relatedToVideoId: '7ghhRHRP6t4',
  //       part: 'id,snippet',
  //       type: 'video',
  //       maxResults: '50'
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': '75a1d8f6e9msh370dea24b536bbap1b0d4djsn30622fbebb94',
  //       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //     }
  //   };

  //   axios.request(options).then(function (response) {
  //     setVedio(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // },[selectedCategory])
  //console.log(video);
  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "95%" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          display:{sx:'none',sm:'none',md:"block"}
        }}
        >
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
          
        />
        <Typography
          variant="body2"
          sx={{ mt: "1.2px", color: "Black",display:{xs:"none",sm:"none",md:"block"} }}
        >
          Copyright 2022 @rudhi

        </Typography>

      </Box>
      <Box
        p={2}
        sx={{ overflow: "auto", height:  { xs: "auto", md: "90vh" }, flex: 2 }}
      >
        <UpperBar selectedCategory={selectedCategory}
      setselectedCategory={setselectedCategory}
      />
        {/* <Typography variant="h4" fontWeight="bold" sx={{ color: 'white' }}>
          {selectedCategory}<span
            style={{ color: 'red', paddingLeft: "10px" }}
          >
            Videos</span>
        </Typography> */}
        {video.length >= 2 && <Vedios video={video} 
        sx={{marginTop:"10px"}}
        />}
      </Box>
    </Stack>
  )
}

export default Feed;